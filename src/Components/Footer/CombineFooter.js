import React, { useState } from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import './CombineFooter.css'
import Footer3 from './Footer3'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const CombineFooter = () => {
  let [goupicon,setGoupIcon]=useState(true)
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=500){
      setGoupIcon(false)
    }
    else {
      setGoupIcon(true)
      
    }

  })

  // let handleGoUp=()=>{
  //   // window.scrollTo(0,0)
  //   window.scroll({ top: 0, left: 0,  behavior: 'smooth' });
  // }

  // let handleGoDown=()=>{
  //   let l=document.body.scrollHeight;
  //   // window.scrollTo(0,l)
  //   // console.log( document.body.scrollHeight)
  //   // window.scroll({
  //   //   bottom: 0, // or document.scrollingElement || document.body
  //   //   behavior: 'smooth'
  //   // })

  //   window.scroll({ top: l, left: 0,  behavior: 'smooth' });


  // }


  let handleGp=()=>{
    if(!goupicon){
    window.scroll({ top: 0, left: 0,  behavior: 'smooth' });

    }

    else {
    let l=document.body.scrollHeight;

    window.scroll({ top: l, left: 0,  behavior: 'smooth' });

    }
  }

  
// console.log(window.location.reload())


  return (
    <div className='CombineFooter'>
      {/* CombineFooter */}
      <div className='CombineFooter_inside'>

     


        <Footer1/>
        <Footer2/>
        <Footer3/>
        <div className='CombineFooter_inside_showupdown'
        onClick={handleGp}>
          {!goupicon?  <KeyboardDoubleArrowUpIcon
          // onClick={handleGoUp}
          />
          
          :
          <KeyboardDoubleArrowDownIcon
          // onClick={handleGoDown}
          /> }
         

        </div>
        </div>
    </div>
  )
}

export default CombineFooter