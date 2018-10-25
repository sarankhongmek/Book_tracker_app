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
            //console.log(books)
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


    updateQuery = (query) => {
        this.setState({ query: query }, this.searchResult);
    }


    searchResult  () {
        if (this.state.query === '' || this.state.query === undefined) {
            return this.setState({ results: []});
        }
        BooksAPI.search(this.state.query.trim()).then(res => {
            if(res.error) {
                return this.setState({results: []});
            }
            else {
                res.forEach(b => {
                    let f = this.state.books.filter(bookid => bookid.id === b.id);
                    b.shelf = f[0] ? f.shelf : null;
                })
                return this.setState({results: res});
            }
        })
    }


    render() {
        return (


            <div className="search-books">


                <div className="search-books-bar">


                    <Link to='/' className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</Link>


                    <div className="search-books-input-wrapper">

                            <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)} value={this.state.query}/>

                    </div>


                </div>


                <div className="search-books-results">


                    <ol className="books-grid">{this.state.results.map((item,key) => <Book key={key} book={item} updateShelf={this.updateShelf}/>)}</ol>


                </div>

                
            </div >
        )
    }
}

export default Search