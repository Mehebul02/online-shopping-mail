
import { useState } from 'react'
import './App.css'
import AddCards from './components/AddCard/AddCards'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
function App() {
   const[products,setProducts]=useState([])
    const handleAddCard =(pd)=>{
      
        const newCardAdd =[...products,pd]
        setProducts(newCardAdd)
       
    }
  return (
    <>
      
  <Header></Header>
  <div className='flex justify-evenly  gap-10 mt-10 '>
  <Cards handleAddCard ={handleAddCard }></Cards>
  <AddCards products={products}></AddCards>
  </div>
      
      
     
    </>
  )
}

export default App
