import React from 'react'
import './Items.css'
import StarIcon from '@mui/icons-material/Star';
const Items = ({id,imgurl,name,type,rating,discount,price,numofpeople,minites,cuponcode,freedelivery,promoted,index}) => {

   
// console.log(typeof(name))
// let ratingreq=rating;
// ratingreq= (parseFloat(ratingreq))

  return (
  <div className='Items'>
    <div className='Items_inside'>
{/* {name} */}


 <div>
    <img src={imgurl}
    className='Items_inside_IMG'
    alt='img.pmg'/>
 </div>


 <div className='Items_inside_names_div'>
    <span>{name}</span> <br/>
    <small>{type}</small>
 </div>


 <div className='Items_inside_rating_div_'>
<button

className={parseFloat(rating)>=4.5 ? 'Items_inside_rating_div_GoldBtn':
(parseFloat(rating)<4.5 && parseFloat(rating)>=3.5)? '':
(parseFloat(rating)<3.5 && parseFloat(rating)>=2.5)?'Items_inside_rating_div_Avgbtn':
parseFloat(rating)<2.5 && 'Items_inside_rating_div_BelowAvgbtn'
}
>
    <StarIcon className='Items_inside_rating_div_StarIcon'/>
    {parseFloat(rating)!==0 ? `${rating}`:'__'}


 </button>
<span>{minites} MINS</span>
<span>₹ {price} for {numofpeople}</span>

 </div>

 {parseInt(discount)!==0 &&
 <div className='Items_inside_offers_div_'>
  
     {cuponcode?
    (`${parseInt(discount)} % off | Use ${cuponcode} `)
:
(`${parseInt(discount)} % off on all orders `)}

 </div>}
 {freedelivery==='true' &&
 
 <div className='Items_inside_freedilivery_div_'>
   FREE DELIVERY
 </div>
 }


 <div className='Items_inside_quickview_div_'>
    QUICK VIEW
 </div>


{promoted==='true' && 
 <div
 className='Items_inside_promoted_div_'
 >
    <span>PROMOTED</span>
 </div>
}
    </div>

  </div>
  )

}

export default Items