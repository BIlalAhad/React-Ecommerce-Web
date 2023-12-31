import React from 'react'
import { ImOffice } from "react-icons/im";

export default function Trusted() {
  return (
   <section className='bg-gray-200 py-20 space-y-16 mt-20'>
   <div>
    <p className='text-center text-3xl  font-serif'>Trusted By 7000+ Companies</p>
   </div>
   <div className='text-7xl '>
    <div className='grid grid-flow-col grid-cols-4 max-w-5xl mx-auto text-gray-500 '>
    <ImOffice/>
    <ImOffice/>
    <ImOffice/>
    <ImOffice/>
    </div>
   </div>
   </section>
  )
}
