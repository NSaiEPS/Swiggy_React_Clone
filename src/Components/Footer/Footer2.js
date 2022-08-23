import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LocationCities } from '../../LocationCities'
import { cityAction } from '../Redux_toolkit/Redux_Slice'
import './Footer2.css'

const Footer2 = () => {

  let dispatch=useDispatch()

  let handleDispatchcity=(city)=>{
    dispatch(cityAction(
      city
    ))


  }
  return (
    <div className='Footer2 ' id='city_deliver'>
      <div className='Footer2_inside'>
        <span>WE DELIVER TO</span>
        <div className='Footer2_inside_names'>

       
        {LocationCities.more.map((item,indx)=>{
          return(
            <span key={item}
            >
              <Link to='city'
              onClick={()=>handleDispatchcity(item)}
               >
      

              {item}

              </Link>
              
             </span>
          )
        })}
         </div>
      </div>
    </div>
  )
}

export default Footer2