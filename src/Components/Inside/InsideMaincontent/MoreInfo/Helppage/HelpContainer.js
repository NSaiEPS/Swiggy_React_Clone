import React from 'react'
import Header1 from '../../../Header/Header1'
// import CityHeader from '../../CitiesInfo/CityHeader'
import './HelpContainer.css'

function HelpContainer() {
  return (
    <div className='HelpContainer'>
      <div className='City_inside_header'>
        {/* <CityHeader/> */}
        <Header1/>
        </div>
      <div className='HelpContainer_inside'>
     <h1>Help & Support</h1>
     <small>Let's take a step ahead and help you better.</small>
      </div>
        
    </div>
  )
}

export default HelpContainer
