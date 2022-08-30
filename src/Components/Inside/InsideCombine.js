import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import HeaderBtween from './Header/HeaderBtween'
import './InsideCombine.css'
import Maincontent from './InsideMaincontent/Maincontent'
import Items from './Items/Items'

const InsideCombine = () => {
  let [items,setItems]=useState([])
  let [specialheader,setSpecialheader]=useState(false)
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=450) return setSpecialheader(true)
    return setSpecialheader(false)
  })

  console.log('render')

  db.collection('items').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))

  })


},[])

  return (
    <div className='InsideCombine'>
        

        <div className='InsideCombine_inside'>
          <div className='InsideCombine_inside_headerpart'>
            <div className='InsideCombine_inside_headerpart_header1'>
            <Header1/>
            </div>
            <div className='InsideCombine_inside_headerpart_headerbetween'>
           <HeaderBtween/>
            </div>
            <div className='InsideCombine_inside_headerpart_header2'>
            <Header2/>
            </div>
          
            </div>




            <div className='InsideCombine_inside_Maincontent'>
              {/* To be check */}
           
      <div className='App_Maincontent_inside'>
        {specialheader &&
        
        <div className='App_Maincontent_inside_header2'>
        <Header2/>
       
dghdoiugdn
          </div>
        }
       {/* {firstchange &&
         <InsideCombine/> } */}

{/* <Maincontent/> */}

<div className='App_Maincontent_inside_items_map'>


{/* imgurl:inputval.imgurl,
    name:inputval.name,
    type:inputval.type,
    rating:inputval.rating,
    discount:inputval.discount,
    price:inputval.price,
    numofpeople:inputval.numofpeople,
    minites:inputval.minites,
    cuponcode:inputval.cuponcode,
    freedelivery:inputval.freedelivery,
    promoted:inputval.promoted */}
     
{Array.isArray(items)&&
 
 items?.map((item,indx)=>{
  return(
    <div  key={item}
    className='App_Maincontent_inside_items_map_item'>
<Items id={item.id}
imgurl={item.data.imgurl} name={item.data.name} type={item.data.type}
rating={item.data.rating} discount={item.data.discount} price={item.data.price}
numofpeople={item.data.numofpeople}  minites={item.data.minites}
cuponcode={item.data.cuponcode}  freedelivery={item.data.freedelivery}
promoted={item.data.promoted} index={indx}


/>

      </div>
  )
 })

}

      
</div>
       

      </div>
            </div>

        </div>
      
    </div>
  )
}

export default InsideCombine
