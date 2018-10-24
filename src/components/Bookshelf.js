import React, {Component} from 'react'
import Book from "./Books";


class Bookshelf extends Component {
    state = {}

    componentDidMount(){
        //console.log(this)
    }

    render(){

        return(
            

            <div className="bookshelf">


                <h2 className="bookshelf-title">{this.props.title}</h2>


                <div className="bookshelf-books">


                    <ol className="books-grid">

                        
                        {this.props.books.map((book,key) => <Book updateShelf={this.props.updateShelf} book={book} key={key}/> )}


                    </ol>
                

                </div>
            

            </div>


        )


    }


}

export default Bookshelf