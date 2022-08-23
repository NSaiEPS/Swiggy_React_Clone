import React from 'react'
import { useSelector } from 'react-redux'
import { Selectmoreinfo } from '../../../Redux_toolkit/Redux_Slice'

const Moreinfo = () => {
    let selectMoreInfo=useSelector(Selectmoreinfo)
  return (
    <div>
      Moreinfo about
      {selectMoreInfo}

    </div>
  )
}

export default Moreinfo
