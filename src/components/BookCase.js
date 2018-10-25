import React, { Component } from 'react'
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class BookCase extends Component  { 
    constructor(props){
        super(props);
        this.state ={
            books:[],
        }
    }

    
//getall books from api request
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
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


    render () {
        
        
        return (

            //main app
            //List-boots-content contain book shelves of 3 different shelves name
            <div className="app">

               
                    <div className="list-books">

                        <div className="list-books-title">

                            <h1>MyReads</h1>

                        </div>

                    </div>

                    
                    <div className="list-books-content">

                        <div>
                    
                            <BookShelf title='Currently Reading' updateShelf={this.updateShelf} books={this.state.books.filter(b => b.shelf === 'currentlyReading')}/>
                            <BookShelf title='Want To Read' updateShelf={this.updateShelf} books={this.state.books.filter(b => b.shelf === 'wantToRead')}/>
                            <BookShelf title='Read' updateShelf={this.updateShelf} books={this.state.books.filter(b => b.shelf === 'read')}/>

                        </div>
                    
                    </div>


                    <div className="open-search">

                        <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>

                    </div>

       
            </div>
        )
    }
};

export default BookCase;