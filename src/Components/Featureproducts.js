import React from 'react'
import { useState, useEffect } from 'react'
import Count from '../Context/Count'
import Items from '../Context/Items';
import { useContext } from 'react';

export default function Featureproducts() {
  const [users,setUsers]=useContext(Items);
    const fetchUserData = () => {
        fetch("data.json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }
  
      useEffect(()=>{
        fetchUserData()
      },[]);
      const [Add,setAdd]=useContext(Count);
      function additem(items){
        setAdd([...Add,items]);  

      }
      
  return (
    <>
    <section  className='grid gap-10 grid-cols-4 py-20 max-w-5xl mx-auto'> 
        {
            users.map((items)=>{
                return(
                    <div className='border-2 shadow-xl border-gray-300 p-3 bg-gray-50'>
                        <img className='w-[150px] h-[150px]' src={items.image} alt='img' />
                        <h2 className='font-bold text-lg text-blue-800 py-2 h-[120px]'>{items.title}</h2>
                        <span className='text-right '>Rs:-{items.price}</span>
                        <p className='h-10'>{items.category}</p>
                        <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800'onClick={()=>{additem(items)}}>Add To Cart</button>
                    </div>
                )
            })
        }
    </section>

    <section>
      <div>
        <h2></h2>
        <span></span>
        <p></p>
      </div>
    </section>
    </>
  )
}
