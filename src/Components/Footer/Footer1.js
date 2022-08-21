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
        img
        img
      </div>

    
      

    </div>
  )
}

export default Footer1