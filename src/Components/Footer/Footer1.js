import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Companyinfo } from '../../Companyinfo'
import { moreInfoAction } from '../Redux_toolkit/Redux_Slice'
import './Footer1.css'
const Footer1 = () => {
let dispatch=useDispatch()
let handlemoreinfo=(moreinfo)=>{
  dispatch(moreInfoAction(
    moreinfo
  ))

  dispatch(
    {
      type:'moreInfoAction',
      payload:moreinfo
    }
  )

  window.scroll(0,0)

}

  return (
    <div className='Footer1'>
      <div>
        COMPANY
        <div className='Footer1_info'>
        {Companyinfo.COMPANY.map((item,indx)=>{
          return(
            <span key={indx}
            onClick={()=>{handlemoreinfo(item)}}

            >
              <Link to={`moreinfo`}
              > {item}</Link>
           
            </span>
          )
        })}
        </div>
      </div>
      

      <div>
        CONTACT
        <div className='Footer1_info'
        >

        {Companyinfo.CONTACT.map((item,indx)=>{
          return(
            <span key={indx}
            onClick={()=>{handlemoreinfo(item)}}>
           <Link to='moreinfo'
              > {item}</Link>
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
            <span key={indx}
            onClick={()=>{handlemoreinfo(item)}}
            >
          <Link to='moreinfo'
              > {item}</Link>
            </span>
          )
        })}
        </div>
      </div>

      <div>
     

        <a  target='_blank'
         href='https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader'>

      
        <img  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'
        alt='appstore.png'/>  </a>


<a href='https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage' target='_blank' >

       
<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'
alt='googleplay.png'/> </a>
      </div>

    
      

    </div>
  )
}

export default Footer1