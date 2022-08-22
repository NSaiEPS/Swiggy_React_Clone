import React from 'react'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import HeaderBtween from './Header/HeaderBtween'
import './InsideCombine.css'
import Maincontent from './InsideMaincontent/Maincontent'

const InsideCombine = () => {
  return (
    <div className='InsideCombine'>
        

        <div className='InsideCombine_inside'>
          <div className='InsideCombine_inside_headerpart'>
            <div className='InsideCombine_inside_headerpart_header1'>
            <Header1/>
            </div>
            <div className='InsideCombine_inside_headerpart_headerbetween'>
           <HeaderBtween/>
            </div>
            <div className='InsideCombine_inside_headerpart_header2'>
            <Header2/>
            </div>
          
            </div>




            <div className='InsideCombine_inside_Maincontent'>
          <Maincontent/>
            </div>

        </div>
      
    </div>
  )
}

export default InsideCombine
