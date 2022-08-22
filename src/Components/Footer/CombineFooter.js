import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import './CombineFooter.css'
import Footer3 from './Footer3'

const CombineFooter = () => {
  return (
    <div className='CombineFooter'>
      {/* CombineFooter */}
      <div className='CombineFooter_inside'>

     


        <Footer1/>
        <Footer2/>
        <Footer3/>
        </div>
    </div>
  )
}

export default CombineFooter