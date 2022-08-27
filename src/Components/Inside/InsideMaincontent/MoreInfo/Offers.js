import React from 'react'
import Header1 from '../../Header/Header1'
import './Offers.css'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className='Offers_inside'>
          <div className='Offers_inside_header'>


          <Header1/>

          </div>


        <div className='Offers_inside_section1'>


  <div
  className='Offers_inside_section1_left'
  >
    <h1>
    Offers for you
    </h1>
    <span>

    Explore top deals and offers exclusively for you!


    </span>

  </div>

  <div className='Offers_inside_section1_right'>


<img alt='img'
src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham' 

/>
  </div>
        </div>
<div className='Offers_inside_section2'>

</div>
    </div>
    </div>

  )
}

export default Offers