import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Bookshop.css';

const Bookshop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    //fetching data from JSON
    useEffect(() => {
        fetch('books.JSON')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    //Add to Cart button click handler.
    const handleAddToCart = id => {
        let newCart = [...cart];
        if (!cart) {
            newCart.push(books.find(book => book.id === id));

        } else if (!cart.find(book => book.id === id) && cart.length < 4) {
            newCart.push(books.find(book => book.id === id));
        }
        setCart(newCart);
    }



    return (
        <div>
            <div className='header-title'>
                <h1>The Baffled Bookworm</h1>
            </div>
            <div className='book-shop'>
                <div className='book-items'>
                    <Books books={books}
                        handleAddToCart={handleAddToCart}
                    ></Books>
                </div>
                <div className='book-cart'>
                    <h4>You Choose:</h4>
                    {
                        cart.map(item => <SelectedItem
                            name={item.name}
                            image={item.image}
                            key={item.id}
                        ></SelectedItem>)
                    }
                    <button className='random-btn'>Chose a Random Book</button>
                    <button className='clear-btn'>Clear All</button>

                </div>
            </div>
        </div>
    );
};



export default Bookshop;