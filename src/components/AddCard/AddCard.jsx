import React from 'react';
import PropTypes from 'prop-types';

const AddCard = ({product,handleDelete}) => {
    const {title,price}=product
    return (
        <div className='grid grid-cols-3 space-x-16 mt-4 '>
        
            <p>{title.slice(0,13)}</p>
            <p>${price}</p>
            <button onClick={()=>handleDelete(product.id)} className='btn bg-cyan-800 text-xl p-2 rounded-md text-white'>Delete</button>
            
        </div>
    );
};

AddCard.propTypes = {
    product:PropTypes.array
};

export default AddCard;