import React, { Component } from 'react'
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class BookCase extends Component  { 
    state ={
        books:[],
        currentReading:[],
        wantToRead:[],
        read:[]
    }
    
//getall books from api request
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
            console.log(books)
        })
    }

    render () {
        let shelves = [];

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