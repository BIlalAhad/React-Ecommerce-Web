import React from 'react'
import Hero from './Hero'
import Trusted from './Trusted'
import Trust from './Trust'
import Featureproducts from './Featureproducts'
import { useContext } from 'react'
import App from '../App'


export default function Home() {
 
  return (
    <div>
      <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="/home.avif" alt="img" />
        <h2 className="absolute text-6xl top-56 w-full text-white font-serif text-center ">Home</h2>
      </div>
    <div className='mb-20 mt-20 '></div>
      <Hero/>
      <Featureproducts/>
      <Trust/>
      <Trusted />
      
    </div>
  )
}
