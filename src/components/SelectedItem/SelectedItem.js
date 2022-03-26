import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedItem.css';

//property destructuring.
const SelectedItem = ({ id, image, name, deleteSingleBook }) => {
    return (
        <div className='selected-item'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <FontAwesomeIcon className='delete-btn' onClick={() => { deleteSingleBook(id) }} icon={faTrashCan}></FontAwesomeIcon>

        </div>
    );
};

export default SelectedItem;