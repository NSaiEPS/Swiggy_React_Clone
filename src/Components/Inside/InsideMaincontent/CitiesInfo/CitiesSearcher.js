import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Selectcityinfo } from '../../../Redux_toolkit/Redux_Slice'
import ClearIcon from '@mui/icons-material/Clear';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

import './CitiesSearcher.css'

const CitiesSearcher = () => {
let selectCityInfo=useSelector(Selectcityinfo)
let [newsearch,setNewsearch]=useState(false)
let [focus,setFocus]=useState(false)

let [inputval,setInputval]=useState({
  inptext:'',
  location:''
})

let handleClicksearch=()=>{
  // alert('clicked')
  setNewsearch(true)
  // window.document.body.scroll='hidden'
  // document.body.
  document.body.style.overflowY = "hidden";


}
let handleEracenewSeacrh=()=>{
  setNewsearch(false)
  document.body.style.overflowY = "scroll";


}

let handleInputChange=(e)=>{
  setInputval({
  
    ...inputval,
    inptext:(e.target.value)
    
          })
}

let handlefocus=(a)=>{


  a==='focus'? setFocus(true):setFocus(false)
}


// console.log(focus,inputval.inptext)
  return (
    <div className='CitiesSearcher'>
      <div className='CitiesSearcher_inside'>
      
      <h1>Great restaurants in {selectCityInfo}, delivering to you</h1>
      <span>Set exact location to find the right restaurants near you.</span>
     
     <div className='CitiesSearcher_inside_Input'
     onClick={handleClicksearch}
     >
      <input placeholder='Enter street name, area etc...' 
     
      />
      <button>FIND FOOD</button>
     </div>
      </div>

      {newsearch &&
      <div className='CitiesSearcher_newSearch'>
  {/* search */}
  <div className='CitiesSearcher_newSearch_left'
  >
  
  <div className='CitiesSearcher_newSearch_left_inside'>
    <div>
    <ClearIcon 
  onClick={handleEracenewSeacrh}
  style={{
    cursor:'pointer'
  }}
  />
      </div>


      <div className={focus? 'CitiesSearcher_newSearch_left_inside_input CitiesSearcher_newSearch_left_inside_input_focus':
      'CitiesSearcher_newSearch_left_inside_input'}>
        <input placeholder='Search for area, street name..'
        
        onChange={
        handleInputChange
      }
        value={inputval.inptext}
        
        onFocus={()=>handlefocus('focus')}
        onBlur={()=>handlefocus('blur')}
        autoFocus
        />
{inputval.inptext &&
  <span
  onClick={()=>{
    setInputval({
      ...inputval,
      inptext:""
    })

  }}
  >
          clear
        </span>}
        
        </div>
        <div className='CitiesSearcher_newSearch_left_inside_GPS'>
          <div><GpsFixedIcon
          className='CitiesSearcher_newSearch_left_inside_GPS_icon'
          />
            </div>
            <div>
              <span>Get current location</span>
              <br/>
              <p>Using GPS
            
              </p>
              </div>
          </div>
    </div>
  </div>

  <div className='CitiesSearcher_newSearch_right'
  onClick={handleEracenewSeacrh}
  >
  </div>
        </div>
        }
      
    </div>
  )
}

export default CitiesSearcher