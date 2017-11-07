import React from 'react'
import PropTypes from 'prop-types';

import Book from './Book'

const CurrentlyBooks = ({books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
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

CurrentlyBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default CurrentlyBooks;
