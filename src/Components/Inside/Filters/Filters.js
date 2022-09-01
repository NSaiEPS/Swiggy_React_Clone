import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input_Selectors } from '../../Dashboard/Input_Selectors'
import { filterDataInfoAction, filterInfoAction, SelectDataFilterInfo } from '../../Redux_toolkit/Redux_Slice'
import './Filters.css'

const Filters = () => {
  let dispatch=useDispatch()
  // let [items,setItems]=useState(
   
  //   Input_Selectors.typeofResipe.map((item)=>({
     


  //    item

      
  //   }))
  //  )

  // let selectDataFilterInfo=useSelector(SelectDataFilterInfo)
  
  //   console.log(selectDataFilterInfo)
  

  // console.log(items)

  let handleEraseFilteringPage=()=>{

 
    dispatch(filterInfoAction({
      active:false
    }))
  document.body.style.overflowY='scroll'


  
}
let [cuisinesName,setCuisinesName]=useState([])
let [rating,setRating]=useState([])

// let [itm,setItem]=useState('')

let handleChangeCuisines=(e)=>{
 
  // console.log(e.target.checked)
  // console.log(e.target.name)
 
  let check=(e.target.checked)
  let name=(e.target.name)
if(check && !cuisinesName.includes(name))
setCuisinesName([
...cuisinesName,name
 ])

 if(!check){
  let requnCheckname=cuisinesName.indexOf(name)
  cuisinesName.splice(requnCheckname,1)
 }

}


let handleChangeRating=(e)=>{
  // console.log(e.target.checked)
  // console.log(e.target.name)
 
  let check=(e.target.checked)
  let name=(e.target.name)
if(check && !rating.includes(name))
setRating([
...rating,name
 ])

 if(!check){
  let requnCheckname=cuisinesName.indexOf(name)
  rating.splice(requnCheckname,1)
 }
}







let [filterremData,setfilterremData]=useState({
  
  freedelvery:false,
  offers:false
})

let handleClearFilter=()=>{
  dispatch(filterDataInfoAction())
  dispatch(filterInfoAction({
    active:false
  }))
  document.body.style.overflowY='scroll'
}

let handleChangeRemain=(e)=>{
  // console.log(e.target.name)
  // console.log(e.target.checked)
  let nam=(e.target.name)
  let check=(e.target.checked)

   if(nam==='freedelvery'){
    if(check){
      setfilterremData({
        ...filterremData,
        freedelvery:true
      })
    }
    else {
      setfilterremData({
        ...filterremData,
        freedelvery:false
      })

    }
   }


   if(nam==='offers'){
    if(check){
      setfilterremData({
        ...filterremData,
        offers:true
      })
    }
    else {
      setfilterremData({
        ...filterremData,
        offers:false
      })

    }
   }



// if(nam!=='offers' && nam!=='freedelvery'){
// if(check)
// {
//   setfilterremData({
//     ...filterremData,
//     rating:nam
//   })
// }
// else{
//   setfilterremData({
//     ...filterremData,
//     rating:''
//   })
// }


// }

}

// console.log(filterremData)
// console.log(rating)


let handleSubmitFilter=()=>{
  let reqrating=rating[(rating.length-1)]

  dispatch(filterInfoAction({
    active:false
  }))
  document.body.style.overflowY='scroll'

// console.log(reqrating)
   if(reqrating){

  dispatch(filterDataInfoAction({
    cuisines:cuisinesName,
    freedelvery:(filterremData.freedelvery),
    offers:(filterremData.offers),
    rating:reqrating

  }

  ))

}

  else {
    dispatch(filterDataInfoAction({
      cuisines:cuisinesName,
      freedelvery:(filterremData.freedelvery),
      offers:(filterremData.offers)
   
    }
  
    ))

  }
// console.log(cuisinesName)

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
              name={item}
               onChange={handleChangeCuisines}
               
               />

               {/* onChange={()=>handleChange(item)}/> */}
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
              <input  type='checkbox'
               name={item}
               onChange={handleChangeRating}
              />
            <span>  {item}</span>

              </div>


          )
        })}
        </div>
     
        </div>

     <div className='Filters_inside_middle_freeDelivery'>
       <input
      
       
       type='checkbox'
       name='freedelvery'
       onChange={handleChangeRemain}


       /><h4>FREE DElivery</h4>
         <input
       name='offers'
       onChange={handleChangeRemain}
       
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
    <button
    onClick={handleSubmitFilter}
    >SHOW RESTAURANTS</button>

  </div>

</div>




      </div>
    </div>
  )
}

export default Filters