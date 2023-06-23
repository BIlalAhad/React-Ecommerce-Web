import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Login from './Login'
import { BsFillCartFill } from "react-icons/bs";
import Count from '../Context/Count'


export default function Header() {
  const [Add,setAdd]=useContext(Count);
  return (
    <div className=' mb-20'>
      <section className='flex justify-between items-center px-12 py-4 bg-blue-950 text-white '>
        <img className='w-20 rounded-full' src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt=""></img>
        <div className='flex items-center gap-8'>
            <nav className='text-lg font-normal flex items-center gap-8 uppercase'>
                <NavLink to='/' className='hover:border-b-4 border-white'>Home</NavLink>
                <NavLink to='/Products' className='hover:border-b-4 border-white'>Products</NavLink>
                <NavLink to='/About' className='hover:border-b-4 border-white'>About</NavLink>
                <NavLink to='/Contact' className='hover:border-b-4 border-white'>Contact</NavLink>
                <NavLink to='/Login' className='hover:border-b-4 border-white'><button className='p-3 bg-blue-800 text-white hover:bg-blue-700'>Log In</button></NavLink>
            </nav>
        <div className='relative'>
        <NavLink  to='/cart'><BsFillCartFill className='text-3xl hover:text-blue-700  '/><p className='absolute -top-3 -right-3'>{Add.length}</p></NavLink>
        </div>
        </div>
      </section>
    </div>
  )
}
