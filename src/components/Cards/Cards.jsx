import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
         <div className="grid grid-cols-3  gap-20 max-w-6xl mx-auto mt-10 ">
         {
            cards.map((card,idx)=> <Card key={idx} card={card}></Card>)
          }
         </div>
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;