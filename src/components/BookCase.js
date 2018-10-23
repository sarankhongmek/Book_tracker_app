import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import BookShelf from "./BookShelf";


class BookCase extends Component  { 
    state ={}
    
    render () {

        return (
            //main app
            <div className="app">


                <div className="list-books">

                    <div className="list-books-title">

                        <h1>MyReads</h1>

                    </div>

                </div>

                
                <div className="list-books-content">

                    <div>

                         <BookShelf />

                    </div>
                 
                </div>


                <div className="open-search">

                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>

                </div>


            </div>
        )
    }
};

export default BookCase;