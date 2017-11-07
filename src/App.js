import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './components/SearchBook';
import ListBook from './components/ListBook';
import { Route } from 'react-router-dom';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.onChangeShelf = this.onChangeShelf.bind(this);
    }

    componentWillMount() {
        let bookLoad = window.localStorage.getItem('BookList') || '[]';
        if (bookLoad === '[]') {
            BooksAPI.getAll().then((books) => {
                this.updateLocalStorage(books);
                this.setState({books})
            })
        } else {
            this.setState({books : JSON.parse(bookLoad)})
        }
    }

    updateLocalStorage(books) {
        window.localStorage.setItem('BookList', JSON.stringify(books))
    }

    onChangeShelf(target, book) {
        this.setState((state, b) => {
            const { books = []} = state;
            const l = books.filter(_ => _.id !== book.id);
            book.shelf = target.value;
            l.push(book);
            this.updateLocalStorage(l);
            return { books: l}
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBook books={this.state.books} onChangeShelf={this.onChangeShelf}/>
                )}/>
                <Route path="/search" render={({history}) => (
                    <SearchBook history={history} books={this.state.books} onChangeShelf={this.onChangeShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default App
