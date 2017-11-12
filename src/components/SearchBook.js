import React, { Component } from 'react';
import { Debounce } from 'react-throttle';
import PropTypes from 'prop-types'

import * as BooksAPI from '../BooksAPI'
import Book from "./Book";

class SearchBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            booksFilter: []
        };
        this.updateQuery = this.updateQuery.bind(this);
    }

    updateSearch(search) {
        let newSearch = [];
        search.forEach((item) => {
            let foundShelf = false;
            this.props.books.forEach((itemShelf) => {
               if (item.id === itemShelf.id) {
                   newSearch.push(itemShelf);
                   foundShelf = true;
               }
            });
            if (!foundShelf) {
                item.shelf = "none";
                newSearch.push(item);
            }
        });
        return newSearch
    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query, 20).then((search) => {
                if (Array.isArray(search)) {
                    const newSearch = this.updateSearch(search);
                    this.setState({booksFilter: newSearch, query: query})
                } else {
                    this.setState({booksFilter: [], query: query})
                }
            })
        } else {
            this.setState({booksFilter: [], query: query})
        }
    };

    render() {
        const { history, onChangeShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={()=>{history.push("/")}}>Close</a>
                    <div className="search-books-input-wrapper">
                        <Debounce time="400" handler="onChange">
                            <input type="text" placeholder="Search by title or author"
                                   onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    {(this.state.booksFilter.length === 0 && this.state.query !== "") && (
                        <div>
                            <h2>Nenhum Livro disponível para o termo: {this.state.query}</h2>
                        </div>
                    )}
                    <ol className="books-grid">
                    {this.state.booksFilter.map((book) => (
                        <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBook.propTypes = {
    history: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default SearchBook;