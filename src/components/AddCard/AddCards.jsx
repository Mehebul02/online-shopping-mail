import React from 'react';
import PropTypes from 'prop-types';
import AddCard from './AddCard';
const AddCards = ({products,handleDelete}) => {
   
  
    return (
        <div>
           <h1 className='text-2xl bg-cyan-800 px-4 py-2 rounded-md text-white text-center'>Add Card:{products.length}</h1>

           <div className='grid grid-cols-2 space-x-16 mt-4 '>
            <p className='text-xl'>Name</p>
            <p className='text-xl'>Price</p>
            </div>
            {
                products.map((product,idx)=><AddCard key={idx} idx={idx} handleDelete={handleDelete} product={product}></AddCard>)

            }
           
         
        </div>

    );
};

AddCards.propTypes = {
    products:PropTypes.array
};

export default AddCards;