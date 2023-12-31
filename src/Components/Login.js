import React from 'react'

export default function Login() {
  return (
    <div className='mb-20 '>
      <form className='max-w-2xl space-y-11 mx-auto bg-gray-100 p-16 rounded-3xl'
  action="https://formspree.io/f/myyarrjb"
  method="POST"
>
  
  <div className='flex items-center'>
  <label className='w-[100px]'>Email:</label>
  <input className=' border-2 w-full border-gray-300 p-2' type='text' autoComplete='off' placeholder='Email' name='Email'/>
  </div>
  <div className='flex items-center'>
  <label className='w-[100px]'>Passward:</label>
  <input className=' border-2 w-full border-gray-300 p-2' autoComplete='off' type='password' placeholder='Passward' name='Passward'/>
  </div>
  <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800 text-center ' type='submit'>Login</button>

</form>
    </div>
  )
}
