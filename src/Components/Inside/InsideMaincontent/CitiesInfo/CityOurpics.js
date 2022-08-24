import React from 'react'
import './CityOurpics.css'

const CityOurpics = () => {
  return (
    <div
    className='CityOurpics'>

      <div className='CityOurpics_inside'>

      
      <span>Our picks for you </span>

      </div>

      <div className='CityOurpics_inside_imgpart'>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk'
          alt='diff.img'/>
          <h1>OFFERS NEAR YOU</h1>
        </div>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/TopRated_kyu7dk'
          alt='diff.img'/>
          <h1>TOP RATED</h1>
        </div>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperFastDelivery_lmh0wh'
          alt='diff.img'/>
          <h1>SUPER FAST DELIVERY</h1>
        </div>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Biriyani_bohvze'
          alt='diff.img'/>
          <h1>BIRYANI</h1>
        </div>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm'
          alt='diff.img'/>
          <h1>NORTH INDIAN</h1>
        </div>
        <div>
          <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy'
          alt='diff.img'/>
          <h1>SOUTH INDIAN</h1>
        </div>
      </div>

      </div>

  )
}

export default CityOurpics