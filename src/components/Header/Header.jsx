import { FiShoppingCart } from "react-icons/fi";
import bg from '../../assets/images/bg.jpg'
const Header = () => {
    return (
        <div >
           <header className='flex justify-between max-w-7xl mx-auto mt-10 '>
           <div >
                <h1 className='text-3xl font-bold text-cyan-800'>Online Shopping Mail</h1>
            </div>
            <nav>
                <ul className='flex justify-between items-center space-x-7'>
                   <a href=""><button className='text-xl text-white px-6 py-2 rounded-xl bg-cyan-800'>All</button></a>
                   <a href=""><li className='text-cyan-800'>Recent</li></a>
                    <a href=""><li className='text-cyan-800'>Shared With me</li></a>
        <button className="text-2xl"><FiShoppingCart></FiShoppingCart> </button>
                    
                </ul>
            </nav>
           
           </header>
          <div className='mt-10'>
          <img className='max-w-7xl mx-auto rounded-lg' src={bg} alt="" />
          </div>
        </div>
        
    );
};

Header.propTypes = {
    
};

export default Header;