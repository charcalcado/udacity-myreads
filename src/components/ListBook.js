import React from  'react';
import PropTypes from 'prop-types'

import TitleApp from './TitleApp'
import Shelf from "./Shelf";

const ListBook = ({books, onChangeShelf }) => {

    return (
        <div className="list-books">
            <TitleApp/>
            <div className="list-books-content">
                <Shelf books={books.filter(b => b.shelf === "currentlyReading")} onChangeShelf={onChangeShelf} title="Currently Reading"/>
                <Shelf books={books.filter(b => b.shelf === "wantToRead")} onChangeShelf={onChangeShelf} title="Want to Read"/>
                <Shelf books={books.filter(b => b.shelf === "read")} onChangeShelf={onChangeShelf} title="Read"/>
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