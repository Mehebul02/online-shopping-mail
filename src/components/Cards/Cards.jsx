import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddCard }) => {
    const [cards,setCards]=useState([])
 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
   
    return (
        <div>
            {/* <h1 className="text-2xl text-center text-cyan-800 font-semibold mt-10 ">Total Items :{cards.length}</h1> */}
         <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl gap-10 mt-10 ">
         {
            cards.map((card,idx)=> <Card key={idx} handleAddCard ={handleAddCard } card={card} ></Card>)
          }
         </div>
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;