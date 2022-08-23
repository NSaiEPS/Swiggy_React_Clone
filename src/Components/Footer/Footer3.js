import React from 'react'
import './Footer3.css'

const Footer3 = () => {
  return (
    <div className='Footer3'>
        <div className='Footer3_inside'>
        <div>
          <a href='https://www.swiggy.com' target='_blank'>
            <img 
            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza'
             alt='swiigy.png'/>
             </a>

        </div>
        <div>
        © 2022 Swiggy
        </div>
        <div>
        <a href='https://www.facebook.com/swiggy.in' target='_blank'>
        <img className='footer3_inside_divimg'
            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc'
             alt='swiigy.png'/>
             </a>

             <a href='https://www.pinterest.com/swiggyindia/' target='_blank'>

<img className='footer3_inside_divimg'
            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd'
             alt='swiigy.png'/>
             </a>

             <a href='https://www.instagram.com/swiggyindia/' target='_blank'>

<img className='footer3_inside_divimg'
            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh'
             alt='swiigy.png'/>
             </a>

             <a href='https://twitter.com/swiggy' target='_blank'>

<img 
            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv'
             alt='swiigy.png'/>
             </a>

        </div>
        </div>
      
    </div>
  )
}

export default Footer3
