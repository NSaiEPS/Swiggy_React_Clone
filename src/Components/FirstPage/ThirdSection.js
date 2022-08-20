import React from 'react'
import './ThirdSection.css'

const ThirdSection = () => {
  return (
    <div className='ThirdSection'>
      <div className='ThirdSection_inside'>
        <div>
       <div>
        <h1>Restaurants in your pocket</h1>
        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
        </div> 
        <div>
       <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'
       alt='googleplayimg'/>
       <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'
       alt='App Storeimg'/>

        </div>
        </div>
       <div>
        <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n'
        alt='appimg'/>
        
        </div> 

       <div>
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn'
        
        alt='appimg'/>
        </div> 
      </div>
    </div>
  )
}

export default ThirdSection