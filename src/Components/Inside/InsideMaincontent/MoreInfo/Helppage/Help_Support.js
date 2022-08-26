import React, { useEffect, useState } from 'react'
import CityHeader from '../../CitiesInfo/CityHeader'
import FAQ1 from './FAQ1'
import FAQ2 from './FAQ2'
import FAQ3 from './FAQ3'
import HelpContainer from './HelpContainer'
import './Help_Support.css'

const Help_Support = () => {

  let [helpHeaaderPresent,sethelpHeaaderPresent]=useState(false)


  useEffect(()=>{

  window.addEventListener('scroll',()=>{
    if(window.scrollY>=175){
      sethelpHeaaderPresent(true)
    }
    else {
      sethelpHeaaderPresent(false)
    }
  })
},[])


let [selectSection,setselectSection]=useState({
  first:true,
  second:false,
  third:false
})


let handleclickbtn=(e)=>{
  // console.log(e.target.name,'s')
  // setselectSection({
  //   ...selectSection,
  //   first:false,
  //   second:false,
  //   third:false
  // })
  // console.log(selectSection)

  let nam=e.target.name;
  // console.log(nam)

  if(nam==='first'){
    setselectSection({
      ...selectSection,
      first:true,
      second:false,
    third:false
    })


  }
    if(nam==='second'){
      setselectSection({
        ...selectSection,
        first:false,
        second:true,
        third:false
      })
  }

  if(nam==='third'){
    setselectSection({
      ...selectSection,
      first:false,
      second:false,
      third:true
    })
  // setselectSection({
  //   ...selectSection,
  //   [nam]:true
  // })}
}
// console.log(selectSection)

}
  return (
    <div className='Help_Support'>
     <div className='Help_Support_inside'>
     <HelpContainer/>
     
     {helpHeaaderPresent && <div className='Help_Support_inside_header'>
      <div className='Help_Support_inside_header_inside'>
      {/* <div className='HelpContainer_inside'> */}
     <h2>Help & Support</h2>
     <small>Let's take a step ahead and help you betterfewsf.</small>
      </div>
        {/* </div> */}
      
      </div>
      }
     <div className='Help_Support_inside_FAQpart'>
      <div className='Help_Support_inside_FAQpart_left'>
        <div className='Help_Support_inside_FAQpart_left_inside'>

          <button className={!selectSection.first? 'Help_support_FAQ_buttonnotselected':'Help_support_FAQ_buttonselected'}
           name='first' onClick={handleclickbtn}>
            Partner Onboarding
            
            </button>
            <button className={!selectSection.second? 'Help_support_FAQ_buttonnotselected':'Help_support_FAQ_buttonselected'}
         
            name='second' onClick={handleclickbtn}>
            Legal</button>

            <button className={!selectSection.third? 'Help_support_FAQ_buttonnotselected':'Help_support_FAQ_buttonselected'}

            name='third' onClick={handleclickbtn}>
            FAQs</button>
        </div>
      

      </div>
      
      <div className='Help_Support_inside_FAQpart_right'>
        {selectSection.first &&
        <div>
          <h2>Partner Onboarding</h2>
      <FAQ1/>
      </div>}

{selectSection.second &&

      <div>
          <h2>Legal</h2>

        {<FAQ2/>}
</div>
}

{selectSection.third &&
<div>
<h2>FAQs</h2>

<FAQ3/>
</div>}
</div>
     </div>
     </div>
    </div>
  )
}

export default Help_Support
