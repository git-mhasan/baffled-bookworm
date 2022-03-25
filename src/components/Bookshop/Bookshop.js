import React, { useEffect, useState } from 'react';
import './Bookshop.css';

const Bookshop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.JSON')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2 className='header-title'>The Baffled Bookworm</h2>
            <div className='book-shop'>
                <div className='book-items'>
                    {books[1].name}
                </div>
                <div className='book-cart'>
                    <h1>hhhh</h1>
                </div>
            </div>
        </div>
    );
};

export default Bookshop;