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
  

// let selectCityInforedux=useSelector(Selectcityinfo)
let selectCityInforedux=useSelector(store=>store.info.city)
// console.log(selectCityInforedux)
// useEffect(()=>{
//   window.addEventListener(('scroll',()=>{
//     window.scrollTo(0,0)
//   }))

// },[])


useEffect(()=>{

  !selectCityInforedux && navigate('/')

},[selectCityInforedux])

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
          >Home</span>/ <span>{selectCityInforedux}</span>
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

      {/* {selectCityInforedux} */}
      </div>
    </div>
  )
}

export default City