
import { useState } from 'react'
import './App.css'
import AddCards from './components/AddCard/AddCards'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import AddCard from './components/AddCard/AddCard'
function App() {
   const[products,setProducts]=useState([])
    const handleAddCard =(p)=>{  
        // // const newCardAdd =[...products,pd]
        // setProducts(newCardAdd)
        const isExit =products.find((pd)=>pd.id==p.id)
        if(!isExit){
          setProducts([...products,p])
        }
        else{
          alert('asdasd')
        }
    }
    const handleDelete=(id)=>{
      const newBtn = products.filter(item =>item.id !=id)
      setProducts(newBtn)
    }
  return (
    <>
      
  <Header products={products}></Header>
  <div className='flex justify-evenly  gap-6 mt-10 '>
  <Cards handleAddCard ={handleAddCard }></Cards>
  <AddCards handleDelete={handleDelete} products={products}></AddCards>
  </div>
      
      
     
    </>
  )
}

export default App
