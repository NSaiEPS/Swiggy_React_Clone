import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Selectcityinfo } from '../../../Redux_toolkit/Redux_Slice'
import CityHeader from './CityHeader'
import './City.css'
import CitiesSearcher from './CitiesSearcher'
import CitiesFoodculture from './CitiesFoodculture'
import CityOurpics from './CityOurpics'
import CitiesFindItem from './CitiesFindItem'

const City = () => {

let navigate=useNavigate()
  

let selectCityInfo=useSelector(Selectcityinfo)
// console.log(selectCityInfo)
// useEffect(()=>{
//   window.addEventListener(('scroll',()=>{
//     window.scrollTo(0,0)
//   }))

// },[])


useEffect(()=>{

  !selectCityInfo && navigate('/')

},[selectCityInfo])

let handleGoHome=()=>{
  navigate('/')
}

  return (
    <div className='City'>
      
      <div className='City_inside'>
        <div className='City_inside_header'>
        <CityHeader/>

        </div>
        <div className='City_inside_citiesSearch'>
          <CitiesSearcher/>
        </div>

        <div className='City_inside_showhome'>
          <span
          onClick={handleGoHome}
          >Home</span>/ <span>{selectCityInfo}</span>
        </div>

        <div className='City_inside_citiesFoodCulture'>
          <CitiesFoodculture/>

        </div>

        <div className='City_inside_citiesOurpics'>
        <CityOurpics/>
        </div>

        <div className='City_inside_citiesFindItem'>
          <CitiesFindItem/>
        </div>

      {/* {selectCityInfo} */}
      </div>
    </div>
  )
}

export default City