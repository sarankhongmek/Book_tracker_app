import React, { Component } from 'react'
import Option from "./Option";


class Book extends Component {
    state = {}
 
    render(){

        return (
            

            <li>


                <div className="book">


                    <div className="book-top">


                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}>
                        
                        
                        </div>

                        <Option book={this.props.book} updateShelf={this.props.updateShelf} />


                    </div>


                    <div className="book-title">
                    
                        {this.props.book.title}
                    
                    </div>

                    
                    <div className="book-authors">
                    
                        {this.props.book.authors || "No authors"}
                    
                    </div>


                </div>


            </li>


        )

    }

}

export default Book