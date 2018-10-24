import React from 'react'
import './App.css'
// import components 
import BookCase from './components/BookCase'
import Search from './components/Searchbooks'
//import router
import {Switch,Route} from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  render() {
    return(
      //Router
      <Switch>
        <Route exact path='/search' component={Search} />
        <Route exact path='/'component={BookCase}/>
      </Switch>
    )
  }

}

export default BooksApp
