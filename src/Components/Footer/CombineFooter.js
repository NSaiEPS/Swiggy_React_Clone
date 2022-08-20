import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import './CombineFooter.css'

const CombineFooter = () => {
  return (
    <div className='CombineFooter'>
      {/* CombineFooter */}
      <div className='CombineFooter_inside'>

     


        <Footer1/>
        <Footer2/>
        </div>
    </div>
  )
}

export default CombineFooter