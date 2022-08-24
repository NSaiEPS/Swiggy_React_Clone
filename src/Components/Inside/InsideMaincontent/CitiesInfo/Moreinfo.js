import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Selectmoreinfo } from '../../../Redux_toolkit/Redux_Slice'
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'


const Moreinfo = () => {
    let selectMoreInfo=useSelector(Selectmoreinfo)
    // console.log(selectMoreInfo)
    let navigate=useNavigate()



    useEffect(()=>{
      // No value in the redux navigate to '/'
     !selectMoreInfo && navigate('/')
    },[selectMoreInfo])
    
  return (
    <div>
      Moreinfo about
      {selectMoreInfo}

    </div>
  )
}

export default Moreinfo
