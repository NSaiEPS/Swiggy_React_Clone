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
        <div className='ThirdSection_inside_appstorediv'>

          <a  target='_blank'
          href='https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage'>

       <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'
       alt='googleplayimg'/></a>
       <a href='https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader'
       target='_blank'
       >
       <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'
       alt='App Storeimg'/></a>

        </div>
        </div>
        {/* <div> */}
       <div className='ThirdSection_inside_phoneimgdiv'>
        <img  className='ThirdSection_inside_phoneimg1'  
        src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n'
        alt='appimg'/>
        
        </div> 

       <div className='ThirdSection_inside_phoneimgdiv'>
        <img className='ThirdSection_inside_phoneimg2'
        src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn'
        
        alt='appimg'/>
        </div> 
      {/* </div> */}
      </div>
    </div>
  )
}

export default ThirdSection