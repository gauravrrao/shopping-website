import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-box">
    <div className='header-container'>

        <ul className='ul'>
           <NavLink className="link" to ='/'> <li className='li1'>Product</li></NavLink>
           <NavLink className="link" to ='/cart'> <li className='li2'>Cart</li></NavLink>
        </ul>
        
    </div>
    </div>
  )
}

export default Header