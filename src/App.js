import React from 'react'
// import * as BooksAPI from './BooksAPI'
import SearchBook from './components/SearchBook';
import ListBook from './components/ListBook';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={ListBook}/>
                <Route path="/search" component={SearchBook}/>
            </div>
        )
    }
}

export default BooksApp
