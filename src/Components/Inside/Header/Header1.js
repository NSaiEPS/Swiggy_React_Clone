import React from 'react'
import './Header1.css'

const Header1 = () => {
  return (
    <div className='Header1'>

      <div className='Header1_inside'>
        <div className='Header1_inside_left'>

          <img  src='https://anujbansal16.github.io/images/logos/swiggy.svg'
          alt='swiggy.png'/>
          
           <span>Location</span>
           </div>
        <div className='Header1_inside_right'>
           <div>
            <span>Search</span></div>
           <div>
            <span>Offers</span>
           </div>
           <div>
            <span>Help</span>
           </div>
           <div>
            <span>Sign In</span>
           </div>
           <div>
            <span>Cart</span>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Header1