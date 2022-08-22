import React from 'react'
import { Companyinfo } from '../../Companyinfo'
import './Footer1.css'
const Footer1 = () => {
  return (
    <div className='Footer1'>
      <div>
        COMPANY
        <div className='Footer1_info'>
        {Companyinfo.COMPANY.map((item,indx)=>{
          return(
            <span key={indx}>
            {item}
            </span>
          )
        })}
        </div>
      </div>
      

      <div>
        CONTACT
        <div className='Footer1_info'>

        {Companyinfo.CONTACT.map((item,indx)=>{
          return(
            <span key={indx}>
            {item}
            </span>
          )
        })}
        </div>
      </div>
      

      <div>
        LEGAL
        <div className='Footer1_info'>

        {Companyinfo.LEGAL.map((item,indx)=>{
          return(
            <span key={indx}>
            {item}
            </span>
          )
        })}
        </div>
      </div>

      <div>
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'
        alt='googleplay.png'/>
        <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'
        alt='appstore.png'/>
      </div>

    
      

    </div>
  )
}

export default Footer1