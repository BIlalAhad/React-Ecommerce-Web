import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


export default function Trust() {
  return (
    <div className='max-w-5xl mx-auto flex justify-between my-32 gap-5  '>
      <div className='flex items-center  bg-gray-200 p-20'>
       <div className='text-5xl text-blue-600'>
       <TbTruckDelivery/>  
      </div> 
        <p>
            Free Home deliver
        </p>
      </div>
      <div className='flex items-center gap-5 bg-gray-200 p-20'>
       <div className='text-5xl text-blue-600'>
       <TbTruckDelivery/>  
      </div> 
        <p>
            Free Home deliver
        </p>
      </div>
      <div className='flex items-center gap-5 bg-gray-200 p-20'>
       <div className='text-5xl text-blue-600'>
       <TbTruckDelivery/>  
      </div> 
        <p>
            Free Home deliver
        </p>
      </div>
      
    </div>
  )
}
