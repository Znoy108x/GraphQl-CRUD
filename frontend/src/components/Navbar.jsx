import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between px-6 bg-mine_gray">
      <img src="https://graphql.org/img/logo.svg" alt="" className="w-7 h-7"/>
      <span className="text-xl font-medium text-white tracking-wider">Projectron</span>
    </div>
  )
}

export default Navbar