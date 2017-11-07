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

    updateQuery = (query) => {
        console.log("Query",query);
        if (query) {
            console.log("Processando Consulta....");
            BooksAPI.search(query, 20).then((books) => {
                console.log("Passando no them", books);
                if (Array.isArray(books)) {
                    this.setState({booksFilter: books, query: query})
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
        console.log("BookFilterSize", this.state.booksFilter.length, this.state.query);
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