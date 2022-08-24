import React from 'react'
import { useSelector } from 'react-redux'
import { Selectcityinfo } from '../../../Redux_toolkit/Redux_Slice'
import './CitiesSearcher.css'

const CitiesSearcher = () => {
let selectCityInfo=useSelector(Selectcityinfo)

  return (
    <div className='CitiesSearcher'>
      <div className='CitiesSearcher_inside'>
      
      <h1>Great restaurants in {selectCityInfo}, delivering to you</h1>
      <span>Set exact location to find the right restaurants near you.</span>
     
     <div className='CitiesSearcher_inside_Input'
     onClick={()=>{
      alert('clicked')
     }}
     >
      <input placeholder='Enter street name, area etc...' />
      <button>FIND FOOD</button>
     </div>
      </div>
      
    </div>
  )
}

export default CitiesSearcher