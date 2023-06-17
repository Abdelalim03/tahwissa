import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  return (
    <nav className={`navbar  fixed backdrop-blur-sm z-10 h-fit flex-col lg:flex-row border-b-2 `}>
        <div className={`flex lg:block w-full lg:w-auto justify-between  items-center ${visible && "mb-10" }  lg:mb-0`}>
          <Link href="/" className='logo '>
              Tahwissa!
          </Link>
          <button className="space-y-2 w-8 lg:hidden" onClick={toggleVisible}>
            <div className="w-full h-1 rounded-full bg-orange-500" />
            <div className="w-full h-1 rounded-full bg-orange-500" />
            <div className="w-full h-1 rounded-full bg-orange-500" />
          </button>
        </div>
        <div
        className={` list-items  ${ 
          visible ? " flex h-fit" : " hidden lg:flex "
        }`}
      >
              <Link className='nav-item' href="/" >Home</Link>
              <Link className='nav-item' href="/interestpoints" >Destinations</Link>
              <a className='nav-item' href="/#about" >About Us</a>
              <button className={` signup-button lg:hidden
        `}>
                  SignUp
              </button>
        </div>
        <div className={` hidden  ${
          visible ? "hidden lg:block " : "lg:block "
        }`}>
        <Link href="/signup" className='signup-button'>
            SignUp
        </Link>
        </div>
        
    </nav>
  )
}

export default Navbar