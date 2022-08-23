import React from 'react'
import { useSelector } from 'react-redux'
import { Selectcityinfo } from '../../../Redux_toolkit/Redux_Slice'

const City = () => {

  

let selectCityInfo=useSelector(Selectcityinfo)
  return (
    <div>
      {selectCityInfo}
    </div>
  )
}

export default City