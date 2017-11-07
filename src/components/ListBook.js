import React from  'react';
import PropTypes from 'prop-types'

import TitleApp from './TitleApp'
import CurrentlyBooks from './CurrentlyBooks'
import WantBooks from './WantBooks'
import ReadBooks from './ReadBooks'

const ListBook = ({books, onChangeShelf }) => {

    let booksCurrently = books.filter((book) => { return book.shelf === "currentlyReading"});
    let readBooks = books.filter((book) => { return book.shelf === "read"});
    let wantBooks = books.filter((book) => { return book.shelf === "wantToRead"});

    return (
        <div className="list-books">
            <TitleApp/>
            <div className="list-books-content">
                <CurrentlyBooks books={booksCurrently} onChangeShelf={onChangeShelf}/>
                <WantBooks books={wantBooks} onChangeShelf={onChangeShelf}/>
                <ReadBooks books={readBooks} onChangeShelf={onChangeShelf}/>
            </div>
            <div className="open-search">
                <a href="/search">Add a book</a>
            </div>
        </div>
    )
};

ListBook.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default ListBook;