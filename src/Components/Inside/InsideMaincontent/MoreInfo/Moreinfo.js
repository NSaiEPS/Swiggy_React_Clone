import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Selectmoreinfo } from '../../../Redux_toolkit/Redux_Slice'
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'


const Moreinfo = () => {
    // let selectMoreInforedux=useSelector(Selectmoreinfo)
    let selectMoreInforedux=useSelector(store=>store.info.moreinfo)
    // console.log(selectMoreInforedux)
    let navigate=useNavigate()



    // useEffect(()=>{
    //   // No value in the redux navigate to '/'
    //  !selectMoreInforedux && navigate('/')
    // },[selectMoreInforedux])
    
  return (
    <div>
      Moreinfo about
      {selectMoreInforedux}

    </div>
  )
}

export default Moreinfo
