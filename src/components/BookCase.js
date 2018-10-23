import React, { Component } from 'react'
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'

class BookCase extends Component  { 
    state ={}
    
    render () {
        let shelves = [];

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
                          
                            <BookShelf title='Currently Reading'/>
                            <BookShelf title='Want To Read'/>
                            <BookShelf title='Read'/>

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