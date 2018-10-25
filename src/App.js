import React from 'react'
import './App.css'
// import components 
import BookCase from './components/BookCase'
import Search from './components/Searchbooks'
//import router
import {Switch,Route} from 'react-router-dom'



class BooksApp extends React.Component {


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
