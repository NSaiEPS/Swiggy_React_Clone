import React from 'react'
import { LocationCities } from '../../LocationCities'
import './Footer2.css'

const Footer2 = () => {
  return (
    <div className='Footer2'>
      <div className='Footer2_inside'>
        <span>WE DELIVER TO</span>
        <div className='Footer2_inside_names'>

       
        {LocationCities.more.map((item,indx)=>{
          return(
            <span>{item }</span>
          )
        })}
         </div>
      </div>
    </div>
  )
}

export default Footer2