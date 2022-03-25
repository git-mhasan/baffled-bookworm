import React from 'react';
import Card from '../Card/Card';
import './Books.css';

//property destructuring.
const Books = ({ books, handleAddToCart }) => {
    return (
        <div className='book-items'>
            {
                books.map(book => <Card
                    id={book.id}
                    name={book.name}
                    price={book.price}
                    image={book.image}
                    handleAddToCart={handleAddToCart}
                    key={book.id}
                ></Card>)
            }
        </div>
    );
};

export default Books;