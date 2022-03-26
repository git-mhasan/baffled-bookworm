import React from 'react';
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

//property destructuring.
const Card = ({ id, name, price, image, handleAddToCart }) => {
    return (
        <div className='card-container'>
            <img src={image} alt="" />
            <h4><b>{name}</b></h4>
            <p>Price: ${price}</p>
            <button className='cart-btn' onClick={() => { handleAddToCart(id) }}><p>Add to Cart</p>
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Card;