import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const WantBooks = ({books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
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

WantBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default WantBooks;
