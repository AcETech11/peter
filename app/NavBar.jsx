"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from'react-icons/ai'

const NavBar = () => {
    const [isOpen, setisOpen] = useState(false)

  return (
    <div className='nav_container'>
      <div className='nav_wrapper'>
        <Link href="/" className='nav_logo'>
            <h3 className='logo'>Peter</h3>
        </Link>
        
        <nav className='nav_links'>
              <ul>
                  <li><Link href="/">HOME</Link></li>
                  <li><Link href="/About">ABOUT</Link></li>
                  <li><Link href="/Service">SERVICES</Link></li>
                  <li><Link href="/Portfolio">PORTFOLIO</Link></li>
                  <li><Link href="/Contact">CONTACT</Link></li>
              </ul>
          </nav>

        <a href='/' download className='CvBtn'>Download Cv</a>
        <div onClick={()=>{setisOpen(!isOpen)}} className='moblie_nav_button'>
            {isOpen? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      {isOpen && (
        <div className='mobile_nav_container'>
            <nav className='mobile_nav_links'>
              <ul>
                  <li><Link href="/" onClick={()=>{setisOpen(!isOpen)}}>HOME</Link></li>
                  <li><Link href="/About" onClick={()=>{setisOpen(!isOpen)}}>ABOUT</Link></li>
                  <li><Link href="/Service" onClick={()=>{setisOpen(!isOpen)}}>SERVICES</Link></li>
                  <li><Link href="/Portfolio" onClick={()=>{setisOpen(!isOpen)}}>PORTFOLIO</Link></li>
                  <li><Link href="/Contact" onClick={()=>{setisOpen(!isOpen)}}>CONTACT</Link></li>
              </ul>
              <a href='/' download className='Mobile_CvBtn'>Download Cv</a>
          </nav>
          
        </div>
      )}
    </div>
  )
}

export default NavBar
