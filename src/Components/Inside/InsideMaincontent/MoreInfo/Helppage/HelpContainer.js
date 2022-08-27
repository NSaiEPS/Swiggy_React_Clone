import React from 'react'
import { useSelector } from 'react-redux'
import { Selectlocationinfo } from '../../../../Redux_toolkit/Redux_Slice'
import Header1 from '../../../Header/Header1'
import CityHeader from '../../CitiesInfo/CityHeader'
import './HelpContainer.css'

function HelpContainer() {
  let selectLocationInfo=useSelector(Selectlocationinfo)
  // active:true,
  console.log(selectLocationInfo.active)

  return (
    <div className='HelpContainer'>
      <div className='City_inside_header'>
        {selectLocationInfo.active ?   <Header1/>:
        <CityHeader/>} 
      
        </div>
      <div className='HelpContainer_inside'>
     <h1>Help & Support</h1>
     <small>Let's take a step ahead and help you better.</small>
      </div>
        
    </div>
  )
}

export default HelpContainer
