import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LocationCities } from '../../../LocationCities'
import { cityAction, locationAction, logininfoAction } from '../../Redux_toolkit/Redux_Slice'
import './Locationentering.css'
// import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { toast } from 'react-toastify';

import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../Firebase'

const Locationentering = () => {
  const [userss,loading]=useAuthState(auth)
  // console.log(userss)

  let [location,setLocation]=useState('')
  let [locationfalseCheck,setLocationfalseCheck]=useState(false)
  let [inputFocus,setInputFocus]=useState(false)

  let dispatch=useDispatch()
 
  let handleLogin=()=>{
    dispatch(
      logininfoAction(
        {name:'login',
         status:true,
      }
      )
    )

  }

  let handleSignup=()=>{

    dispatch(
      logininfoAction(
        {name:'signup',
         status:true,
      }
      )
    )

  }

  let handleLocationInput=(e)=>{
    setLocation(e.target.value)
setLocationfalseCheck(false)


  }

  let handleClearLocationInput=()=>{
    setLocation('')

setLocationfalseCheck(false)
  }


  let handleLocationCheck=()=>{
let checkcap=location[0]
let reqlocation=''
    if(location && checkcap.toUpperCase()!==checkcap){
    let reqlocationarr=location.split('')
    reqlocationarr[0]=reqlocationarr[0].toUpperCase()
    let reqlocationarrfirst=reqlocationarr
  
    
    reqlocationarrfirst.map((item)=>{

    reqlocation=reqlocation+item
    })}

 
    else{
       reqlocation=location}


    if((LocationCities.Popular.includes(reqlocation) )||(LocationCities.more.includes(reqlocation) )){
      
      setLocationfalseCheck(false)
    dispatch(
      locationAction(
        {
          active:true,
          location:reqlocation
        }
      )
    
      )

      toast.success(`checking for ${location} location`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

    }
    else {
     
      setLocationfalseCheck(true)
      toast.error(`Opps location not found`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

    }
  
    
  }

  // let dispatch=useDispatch()

    let handleDispatchcity=(city)=>{
      dispatch(cityAction(
        city
      ))
  
  
    }

    let handleLocationcheckkey=(e)=>{
      if(e.charCode === 13){
        handleLocationCheck()

        
     }


    }

    let handlelogout=()=>{
    auth.signOut()

    }
  return (
    <div className='Locationentering'
    
    >
      <div className='Locationentering_inside'>
      <div className='Locationentering_inside_top'>
        <div>

        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png' alt='Swiggyimg'/>
        </div>
        {userss ?
        <div>
<button onClick={handlelogout}
         className='Locationentering_inside_top_signupbtn'>Logout</button>
        </div>:
       <div>
        <button className='Locationentering_inside_top_loginbtn'
        
        onClick={handleLogin}>Login</button>

        <button onClick={handleSignup}
         className='Locationentering_inside_top_signupbtn'>Sign up</button>
         
         </div>}




      </div>

{/* 
      <div className='Locationentering_inside_Changing'>

   

        <h1
        className='Locationentering_inside_Changing_1'
        > Hungry ?</h1>

<h1
        className='Locationentering_inside_Changing_2'
        > Unexpected guests ?</h1>

<h1
        className='Locationentering_inside_Changing_3'
        > Cooking gone wrong ?</h1>

<h1
        className='Locationentering_inside_Changing_4'
        > Movie marathon ?</h1>

<h1
        className='Locationentering_inside_Changing_5'
        > Game night ?</h1>

<h1
        className='Locationentering_inside_Changing_6'
        > Late night at office ?</h1>


   
      </div> */}






<div className="Locationentering_inside_Changing">
            <div className="i-title-wrapper">
              <h1 className="i-title-item">Hungry ?</h1>
              <h1 className="i-title-item">Unexpected guests  ?</h1>
              <h1 className="i-title-item">Cooking gone wrong ?</h1>
              <h1 className="i-title-item">Movie marathon ?</h1>
              <h1 className="i-title-item"> Game night ?</h1>
              <h1 className="i-title-item"> Late night at office ?</h1>
            </div>
          </div>




      <div className='Locationentering_inside_info'>
        <span>Order food from favourite restaurants near you.
          </span>
        </div>
      
      <div className='Locationentering_inside_input'>
        
        <div className='Locationentering_inside_input_input'>
          <input onChange={handleLocationInput} value={location}
          placeholder='Enter your delivery location' 
          onFocus={()=>setInputFocus(true)}
          onBlur={()=>setInputFocus(false)}
          className={inputFocus? 'focusClass':'noFocusClass'}

    onKeyPress={handleLocationcheckkey}
    autoFocus

          />
         


{location ? <button 
className='Locationentering_inside_inputLocationclear'
onClick={handleClearLocationInput}
>Clear</button>:
 <button className='Locationentering_inside_inputLocation'>
         
 <GpsFixedIcon className='Locationentering_inside_inputLocation_icon'/> 
    <small>Locate Me</small>
    
  </button>

}
           
        </div>
        <div className='Locationentering_inside_input_findfoodbtn'
        onClick={handleLocationCheck}
        >
          <button 
          >FIND FOOD</button>
          </div>

          {locationfalseCheck &&
           <div className='please_enter_drivng_location_div'>
           <span>
           Enter your delivery location</span>
         </div> }
         

      </div>

      <div>Popular cities in India</div>
      
      <div className='Locationentering_inside_cities'>
        {LocationCities.Popular?.map((cities,indx)=>{
          return(
            <div key={indx}
            onClick={()=>{handleDispatchcity(cities)}}
            >
             
              <Link to={`city/${cities}`} >
       {/* <Link to={`admindashboard`} > Admin DashBoard  </Link> */}

              {cities}

              </Link>
              </div>
          )
        })}

        & 
        
        <a href='#city_deliver'>
        more
        </a>
         
        
      </div>
      </div>
      </div>
  )
}

export default Locationentering