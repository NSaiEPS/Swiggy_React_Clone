import React from 'react'
import './FirstSection.css'
import Locationentering from './Locationentering'

const FirstSection = () => {
  return (
    <div className='FirstSection'>
      

      <div className='FirstSection_inside'>
        <div className='FirstSection_inside_Locationpart'>
          <Locationentering/>
        </div>
        <div 
        className='FirstSection_inside_imgpart' >
          
        </div>
      </div>
    </div>
  )
}

export default FirstSection
