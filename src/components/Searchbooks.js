import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from "./Books";

class Search extends Component {
    state = {
        query: "",
        books: [],
        results: []
    }



    componentDidMount(){
        BooksAPI.getAll().then((res) => {
            this.setState({ books: res })
            
        })
    }


    updateShelf = (book,shelf) => {
        BooksAPI.update(book,shelf).then(resp => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
        });
    }


    updateQuery = (value) => {
        this.setState({ query: value }, this.searchResult);
    }


    searchResult  () {
        if (this.state.query === ""  || this.state.query === undefined) {
            this.setState({error: false, results: []});
            return;
        }


        BooksAPI.search(this.state.query).then(response => {
            if (response === undefined || (response.error && response.error !== "empty query")) {
                return this.setState({results: [] })
            } else if (response.length) {
                response.forEach(b => {
                    let f = this.state.books.filter(bookid => bookid.id === b.id);
                    if(f[0]){
                        b.shelf = f[0].shelf;
                    }
                })
         
                this.setState({ results: response});
            }
            
        })
    }






    render() {
        return (


            <div className="search-books">


                <div className="search-books-bar">


                    <Link to='/' className="close-search">Close</Link>


                    <div className="search-books-input-wrapper">

                            <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)} value={this.state.query.value}/>

                    </div>


                </div>


                <div className="search-books-results">


                    <ol className="books-grid">{this.state.results && this.state.results.map((item,key) => (<li key={key}>  <Book book={item} updateShelf={this.updateShelf}/> </li>))}</ol>


                </div>

                
            </div >
        )
    }
}

export default Search