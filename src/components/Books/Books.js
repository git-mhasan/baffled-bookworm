import React from 'react';
import Card from '../Card/Card';
import './Books.css';

//property destructuring.
const Books = ({ books }) => {
    return (
        <div className='book-items'>
            {
                books.map(book => <Card
                    name={book.name}
                ></Card>)
            }
        </div>
    );
};

export default Books;