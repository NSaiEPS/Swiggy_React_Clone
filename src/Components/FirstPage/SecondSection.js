import React from 'react'
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div className='SecondSection'>
      <div className='SecondSection_inside'>

        <div>
          <div>
            <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'
             alt='no min ordeer'/>
          </div>
          <div>
              <h3>No Minimum Order</h3>
              <p>Order in for yourself or for the group, with no restrictions on order value</p>

          </div>
        </div>
  

        <div>
          <div>            <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'
            alt='Live ordeer'/>
</div>
          <div>
              <h3>Live Order Tracking</h3>
              <p>
              Know where your order is at all times, from the restaurant to your doorstep
                
                </p>

          </div>
        </div>


        <div>
          <div>            <img   src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'
          alt='Fast delivery'/>
</div>
          <div>
              <h3>Lightning-Fast Delivery</h3>
              <p>
              Experience Swiggy's superfast delivery for food delivered fresh & on time
                </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default SecondSection