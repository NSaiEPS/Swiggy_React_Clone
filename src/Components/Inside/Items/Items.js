import React from 'react'
import './Items.css'

const Items = ({id,imgurl,name}) => {

    // id={item.id}
    // imgurl={item.data.imgurl} name={item.data.name} type={item.data.type}
    // rating={item.data.rating} discount={item.data.discount} price={item.data.price}
    // numofpeople={item.data.numofpeople}  minites={item.data.minites}
    // cuponcode={item.data.cuponcode}  freedelivery={item.data.freedelivery}
    // promoted={item.data.promoted} index={indx}


  return (
    <div>{name}</div>
  )
}

export default Items