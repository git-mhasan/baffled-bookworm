import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Question from '../Question/Question';
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
        else if (cart.length > 3) {
            window.alert("You've already chosen 4 items!")
        }
        setCart(newCart);
    }

    const randomItemSelector = (maxVal) => {
        const randomIndex = Math.floor(Math.random() * maxVal);
        window.confirm("Your Lucky Book is: \n" + + "\n" + cart[randomIndex].name);

    }

    //celar selected items function
    const clearItems = () => {
        setCart([]);
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
                    <h4>Choose 4 Books:</h4>
                    {
                        cart.map(item => <SelectedItem
                            name={item.name}
                            image={item.image}
                            key={item.id}
                        ></SelectedItem>)
                    }
                    <button onClick={() => { randomItemSelector(cart.length) }} className='random-btn'>Chose a Random Book</button>
                    <button onClick={clearItems} className='clear-btn'>Clear All</button>

                </div>
            </div>
            <div className='question-section'>
                <Question></Question>
            </div>
        </div>
    );
};



export default Bookshop;