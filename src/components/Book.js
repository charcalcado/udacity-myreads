import React from 'react';
import PropTypes from 'prop-types';


const Book = ({book, onChangeShelf}) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        minWidth: 128,
                        minHeight: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(e) => onChangeShelf(e.target, book)}
                            defaultValue={book.shelf || "none"}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join() : "Desconhecido"}</div>
            </div>
        </li>
    )
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default Book;