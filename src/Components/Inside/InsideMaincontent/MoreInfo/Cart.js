import React from 'react'
import { Link } from 'react-router-dom'
import CityHeader from '../CitiesInfo/CityHeader'
import './Cart.css'

const Cart = () => {
  return (
    <div className='Cart'>
      <div className='Cart_inside'>

     <div className='City_inside_header'>
        <CityHeader/>
        {/* <Header1/> */}
        </div>

        <div className='Cart_inside_section1'>

          <div className='Cart_inside_section1_img'
          ></div>

          <div className='Cart_inside_section1_downpart'>
          <h2> Your cart is empty</h2> 
<small> You can go to home page to view more restaurants</small>
<br/>
<Link to='/'>
<button>


SEE RESTAURANTS NEAR YOU
</button>
</Link>

</div>

        </div>
      </div>

      Cart
    </div>
  )
}

export default Cart