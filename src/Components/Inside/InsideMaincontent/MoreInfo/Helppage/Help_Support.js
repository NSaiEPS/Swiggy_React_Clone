import React, { useEffect, useState } from 'react'
import CityHeader from '../../CitiesInfo/CityHeader'
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
      artner Onboarding
I want to partner my restaurant with Swiggy
What are the mandatory documents needed to list my restaurant on Swiggy?
After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
What is this one time Onboarding fees? Do I have to pay for it while registering?
Who should I contact if I need help & support in getting onboarded?
How much commission will I be charged by Swiggy?
I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?
</div>}

{selectSection.second &&

      <div>Legal
Terms of Use
Privacy Policy
Cancellations and Refunds
Terms of Use for Swiggy ON-TIME / Assured</div>
}

{selectSection.third &&
<div>
FAQs
What is Swiggy Customer Care Number?
I want to explore career opportunities with Swiggy
I want to provide feedback
Can I edit my order?
I want to cancel my order
Will Swiggy be accountable for quality/quantity?
Is there a minimum order value?
Do you charge for delivery?
How long do you take to deliver?
What are your delivery hours?
Can I order from any location?
Is single order from many restaurants possible?
Do you support bulk orders?
Can I order in advance?
Can I change the address / number?
Did not receive OTP?
Did not receive referral coupon?
Deactivate my account
Unable to view the details in my profile
What is Swiggy Money?
Do you accept Sodexo, Ticket Restaurant etc.?
I want an invoice for my order
</div>}
</div>
     </div>
     </div>
    </div>
  )
}

export default Help_Support
