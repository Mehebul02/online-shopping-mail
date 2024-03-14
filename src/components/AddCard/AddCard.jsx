import React from 'react';
import PropTypes from 'prop-types';

const AddCard = ({product}) => {
    const {title,price}=product
    return (
        <div className='grid grid-cols-2 space-x-28 mt-4 '>
        
            <p>{title.slice(0,13)}</p>
            <p>${price}</p>
            
        </div>
    );
};

AddCard.propTypes = {
    product:PropTypes.array
};

export default AddCard;