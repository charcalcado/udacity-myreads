import React from 'react'
import PropTypes from 'prop-types'

import Book from  './Book'

const ReadBooks = ({books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
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

ReadBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};


export default ReadBooks;
