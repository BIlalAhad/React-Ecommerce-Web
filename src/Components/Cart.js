import React, { useContext } from 'react'
import { useState } from 'react'
import Count from '../Context/Count';


export default function Cart() {
  const[Add,setAdd]=useContext(Count);
  const [cart,setcart]=useState([]);
  const increment=(items)=>{
   setcart(items.quantity++);
  }
  const decrement=(items)=>{
    if(items.quantity>0){
      setcart(items.quantity--);
    }
  }

  
  return (
    <div className=' mb-20'>
      <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="cart.avif" alt="img" />
        <h2 className="absolute text-6xl top-56 w-full text-white font-serif text-center ">Cart</h2>
      </div>
    <div className='mb-20 mt-20 '></div>
      {
        Add.map((item)=>{

          return(
            <div className='max-w-6xl mx-auto gap-10 '>
              <div className='grid grid-cols-4 items-center gap-10 mt-8 border-b-2 border-blue-800 p-2'>
              <img src={item.image} alt='img' width='60px' />
              <h2 className='text-blue-800  font-serif'>{item.title}</h2>
              <span>Price={item.price}</span>
              <div className='flex items-center gap-3'>
                <button className='p-2 bg-blue-800 text-white font-bold w-8 hover:bg-blue-600' onClick={()=>{decrement(item)}}>-</button>
                <p className='p-2'>{item.quantity}</p>
                <button className='p-2 bg-blue-800 text-white font-bold w-8 hover:bg-blue-600' onClick={()=>{increment(item)}}>+</button>
              </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
