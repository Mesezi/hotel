'use client'
import React, { useState } from 'react'

const login = () => {
const [formDetails, setFormDetails] = useState({
    email: '',
    password: ''
})

const loginHandler = async (e: { preventDefault: () => void })=>{
    const url = `https://hotelapi-ek7f.onrender.com/api/login`; // Replace with your API endpoint
    e.preventDefault()
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Specify content type as JSON
  },
  body: JSON.stringify(formDetails) // Convert data to JSON string
};

try{
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
}
catch(err){
    console.log(err)
}

}

  return (
    <section className='h-screen grid place-items-center'>
  <form onSubmit={loginHandler} className='bg-zinc-800 max-w-[300px] mx-auto p-10 rounded-md grid gap-3'>
      <input type="text" placeholder='Email' className='p-2 text-black' onChange={(e)=>{
        setFormDetails(prev=>({
            ...prev, email: e.target.value
        }))
      }}/>
      <input type="text" name="" id="" placeholder='Password' className='p-2 text-black' onChange={(e)=>{
        setFormDetails(prev=>({
            ...prev, password: e.target.value
        }))
      }}/>
      <button className='p-2 rounded-sm border border-white'>Submit</button>
    </form>

    </section>
  
  )
}

export default login
