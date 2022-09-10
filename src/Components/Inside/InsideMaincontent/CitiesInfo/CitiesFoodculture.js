import React from 'react'
import { useSelector } from 'react-redux'
import { Selectcityinfo } from '../../../Redux_toolkit/Redux_Slice'
import './CitiesFoodculture.css'

const CitiesFoodculture = () => {
// let selectCityInfo=useSelector(Selectcityinfo)
let selectCityInforedux=useSelector(store=>store.info.city)

  return (
    <div className='CitiesFoodculture'>
      <h2>About the food culture in {selectCityInforedux}</h2>
      <p>Order food & beverages online from restaurants near & around you. We deliver food from your neighborhood local joints, your favorite cafes, luxurious & elite restaurants in your area. Exciting bit? We place no minimum order restrictions! Order in as little (or as much) as you?d like. We?ll Swiggy it to you!</p>
      </div>
  )
}

export default CitiesFoodculture