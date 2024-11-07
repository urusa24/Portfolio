'use client'
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import {useState} from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
        <div style={{ textAlign: 'left'}} className="logo-container">
   <Image src="/portfolio.jpg" width={100} height={100} alt="Portfolio Logo" className="logo-image"></Image>
</div>

            <ul className='lg gap-16 hidden md:flex'>
                <li className='menuLink'><Link href='#Hero'>Home</Link></li>
                <li className='menuLink'><Link href='#About'>About</Link></li>
                <li className='menuLink'><Link href='#Skills'>Skills</Link></li>
                <li className='menuLink'><Link href='#Contact'>Contact</Link></li>
                </ul>
            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> :
              <AiOutlineMenu size={30} />
            }
            </div>
        </div>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="menuLink">
            <Link href="#Hero" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="menuLink">
            <Link href="#About" onClick={toggleMenu}>About</Link>
          </li>
          <li className="menuLink">
            <Link href="#Skills" onClick={toggleMenu}>Skills</Link>
          </li>
          <li className="menuLink">
            <Link href="#Contact" onClick={toggleMenu}>Contact</Link>
          </li>


        </ul>
      )}
    </div>
  )
}

export default Navbar
