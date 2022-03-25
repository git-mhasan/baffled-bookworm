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



        // if (cart.length > 4) {
        //     window.alert("Sorry! You've already chosen 4 items");

        // }
        // else {
        //     let newCart = [];
        //     const selectedItem = books.find(book => book.id === id);
        //     newCart = [...cart, selectedItem]
        //     setCart(newCart);
        //     console.log(cart);
        // }
    }

    return (
        <div>
            <h1 className='header-title'>The Baffled Bookworm</h1>
            <div className='book-shop'>
                <div className='book-items'>
                    <Books books={books}
                        handleAddToCart={handleAddToCart}
                    ></Books>
                </div>
                <div className='book-cart'>
                    <SelectedItem
                        name={books[0].name}
                        image={books[0].image}
                    ></SelectedItem>
                </div>
            </div>
        </div>
    );
};



export default Bookshop;