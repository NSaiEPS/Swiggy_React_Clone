import React from 'react'
import { Companyinfo } from '../../Companyinfo'
import './Footer1.css'
const Footer1 = () => {
  return (
    <div className='Footer1'>
      <div>
        COMPANY
        <div>
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
        <div>
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
        <div>
        {Companyinfo.LEGAL.map((item,indx)=>{
          return(
            <span key={indx}>
            {item}
            </span>
          )
        })}
        </div>
      </div>

    
      

    </div>
  )
}

export default Footer1