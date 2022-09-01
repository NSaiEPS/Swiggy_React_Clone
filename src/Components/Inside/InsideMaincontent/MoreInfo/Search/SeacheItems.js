import React from 'react'
import './SearchItems.css'
const SeacheItems = ({
    id,name,type,imgurl,discount,price,numofpeople,minites,cuponcode,freedelivery,promoted
}) => {

    
  return (
    <div
    className='SeacheItems'>
        <div className='SeacheItems_Inside'>
            <div>
                <img alt='img'
                src={imgurl}/>


            </div>
            <div className='SeacheItems_Inside_namesPart'>
                <span>
                    <b>{name}</b></span>
                <span>{type}</span>
            </div>

        </div>
        

    </div>
  )
}

export default SeacheItems