import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SelectedItem = ({ image, name }) => {
    return (
        <div className='selected-item'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>

        </div>
    );
};

export default SelectedItem;