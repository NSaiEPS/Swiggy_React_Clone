import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input_Selectors } from '../../Dashboard/Input_Selectors'
import { filterInfoAction } from '../../Redux_toolkit/Redux_Slice'
import './Filters.css'

const Filters = () => {
  let dispatch=useDispatch()
  let [items,setItems]=useState(
   
    Input_Selectors.typeofResipe.map((item)=>({
     


     item

      
    }))
   )
  
    
  

  // console.log(items)

  let handleEraseFilteringPage=()=>{

 
    dispatch(filterInfoAction({
      active:false
    }))

  
}
let [ar,setAr]=useState([])

let [itm,setItem]=useState('')

let handleChange=(item)=>{
  // console.log(item.target.checked)
  console.log(item)

  setItem(item)
 

}

useEffect(()=>{
  if(itm!=='' && !ar.includes(itm)){
  setAr(
    [
      ...ar,itm
    ]
  )
  }

},[itm])

console.log(ar)

// console.log(ar)

let handleClearFilter=()=>{

}
  return (
    <div
    className='Filters'
    >
      <div className='Filters_inside'>
        <div className='Filters_Inside_Top'>
         
         <button
onClick={handleEraseFilteringPage}
         
         >X</button>
         <h2>Filters</h2>
        </div>
        <div className='Filters_inside_middle'>
        <h4>Cuisines</h4>

           <div className='Filters_inside_middle_resipre'>


        {Input_Selectors.typeofResipe.map((item,indx)=>{
          return(
            <div key={item}>
              <input  type='checkbox'
              //  onChange={handleChange}/>
               onChange={()=>handleChange(item)}/>
             <span> {item}</span>

              </div>


          )
        })}
        </div>

        <h4>Rating</h4>


        <div className='Filters_inside_middle_ratings'>
 {Input_Selectors.ratings.map((item,indx)=>{
          return(
            <div key={item}>
              <input  type='checkbox'/>
            <span>  {item}</span>

              </div>


          )
        })}
        </div>
     
        </div>

     <div className='Filters_inside_middle_freeDelivery'>
       <input
      
       
       type='checkbox'/><h4>FREE DElivery</h4>
         <input
       
       
       type='checkbox'/><h4>OFFERS</h4>

     </div>

     {/* <div className='Filters_inside_middle_f'>
     

     </div> */}

<div className='Filters_Inside_Bottom'
style={{
  position:'fixed',
  top:`${window.innerHeight}px`

}}

>
  <div className='Filters_Inside_Bottom_inside'>

    <button
    onClick={handleClearFilter}
    >CLEAR</button>
    <button>SHOW RESTAURANTS</button>

  </div>

</div>




      </div>
    </div>
  )
}

export default Filters