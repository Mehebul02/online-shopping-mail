
import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {image,title,price}=card;
    return (
        <div className='bg-slate-200  p-10  rounded-xl shadow-lg space-y-8'>
            <img className='max-w-40 mx-auto' src={image} alt="" />
            <h1 className='text-xl text-cyan-800'>{title}</h1>
            <p>${price}</p>
            <div className='flex justify-between'>
            <button className=' bg-cyan-800 p-2 rounded-md text-xl text-white'>Buy Now</button>
            <button className='bg-fuchsia-700 p-2 rounded-md text-xl text-white'>Add Cart</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card:PropTypes.array.isRequired
};

export default Card;