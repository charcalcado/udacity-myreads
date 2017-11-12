import React from 'react'
import PropTypes from 'prop-types';

import Book from './Book'

const Shelf = ({title, books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
                    ))}
                </ol>
            </div>
        </div>
    )
};

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Shelf;
