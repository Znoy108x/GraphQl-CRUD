import React from 'react'
// components imports
import Navbar from '../components/Navbar'
import Clients from "../components/Clients"

const Home = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col font-lora'>
      <Navbar/>
        <div className="flex flex-col">
            <Clients/>
        </div>
    </div>
  )
}

export default Home