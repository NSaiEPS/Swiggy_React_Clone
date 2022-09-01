import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import HeaderBtween from './Header/HeaderBtween'
import './InsideCombine.css'
// import Maincontent from './InsideMaincontent/Maincontent'
import Items from './Items/Items'
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useDispatch, useSelector } from 'react-redux'
import { filterInfoAction, SelectDataFilterInfo, SelectFilterInfo, SelectreqFilter } from '../Redux_toolkit/Redux_Slice'
import Filters from './Filters/Filters'


const InsideCombine = () => {
  let [items,setItems]=useState([])
  let [specialheader,setSpecialheader]=useState(false)
  // let [filteredData,setFilteredData]=useState([])
 
  let selectReqFilter=useSelector(SelectreqFilter)
  let dispatch=useDispatch()
  let selectFilterInfo=useSelector(SelectFilterInfo)
  let selectDataFilterInfo=useSelector(SelectDataFilterInfo)

console.log(selectDataFilterInfo)


let getDataFunction=()=>{
  db.collection('items').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))

  })

}
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=535) return setSpecialheader(true)
    return setSpecialheader(false)
  })

  // console.log('render')

  getDataFunction()


},[])





useEffect(()=>
{
  // if(req==='rating'){
  // setFilteredData(items?.filter((item)=>parseFloat(item.data?.rating)
  // >=4))
  // }
  // console.log(filteredData)
 
  if(selectReqFilter==='rating'){
    db.collection('items').orderBy('rating','desc').onSnapshot((item)=>{
      setItems((item.docs.map((data)=>({
        id:data.id,
        data:data.data()
  
      }))))
  
    })
  
   }

 if(selectReqFilter==='costLowtoHign'){
  db.collection('items').orderBy('price','asc').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))

  })

 }

 if(selectReqFilter==='costHightoLow'){
  db.collection('items').orderBy('price','desc').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))

  })

 }

 if(selectReqFilter==='deliveryTime'){
  db.collection('items').orderBy('minites','asc').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))

  })

 }

//  if(selectReqFilter===''){
//   getDataFunction()
//  }


  
  // console.log(filteredData)
},[selectReqFilter])



if(selectFilterInfo.active){
  document.body.style.overflow='hidden'
}

let handleEraseFilteringPage=()=>{

 
    dispatch(filterInfoAction({
      active:false
    }))
  document.body.style.overflowY='scroll'

  
}

// let h='660'

// console.log(window.innerHeight)
// let [ch,setch]=useState(2)
// useEffect(()=>{
//   // let [items,setItems]=useState([])
//   let ar=['Pizzas','South Indian']

//   // setItems(items?.filter((item)=>parseFloat(item.data?.rating)
//   // >=ch))

//   setItems(items?.filter((item)=>
  
//   ar.includes(item.data.type)
  
  
//   ))
// },[ch])

  
  // console.log(ch)




useEffect(()=>{
  // let [items,setItems]=useState([])
  // console.log('rendered')

  // setItems(items?.filter((item)=>parseFloat(item.data?.rating)
  // >=ch))

  if(selectDataFilterInfo?.cuisines?.length>0)
{
  // setItems(items?.filter((item)=>(
  
  // selectDataFilterInfo?.cuisines.includes(item.data.type)))

  
  // .filter((data)=>parseFloat(data.data?.rating)
  // >=val
  // ))
  setItems(items?.filter((item)=>(
  
    selectDataFilterInfo?.cuisines.includes(item.data.type)))
    )





}
// console.log(val)

if( selectDataFilterInfo?.rating ){
  let val=parseFloat((selectDataFilterInfo?.rating)?.split('>')[1])

  if(val===NaN){
    setItems(items?.filter((data)=>parseFloat(data.data?.rating)
    >=val[0])
      )
  }
  else {
  setItems(items?.filter((data)=>parseFloat(data.data?.rating)
  >=val)
    )}
}


// freedelvery:(filterremData.freedelvery),
// offers:(filterremData.offers),
if(selectDataFilterInfo?.freedelvery){
  setItems(items?.filter((data)=>(data.data?.freedelivery)
  ==='true'))
}


if(selectDataFilterInfo?.offers){
  setItems(items?.filter((data)=>
  parseInt(data.data?.discount)!==0 ))
 
}

if(!selectDataFilterInfo){
  getDataFunction()
}

},[selectDataFilterInfo])

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

{/* 
            <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
        <h2>
            {filteredData.length>0 ?
          `${filteredData.length} `  : `${items.length}  `  
          }
          Restaurants
              </h2>
        </div>

        <div className='Header2_inside_right'>
          <Link to='/search'
          className='Header2_inside_right_searchLink'
          >
          <span
          className={ 'Header2_inside_right_search'}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            Search</span>
          </Link>
          <span>Relevance</span>
          <span
          onClick={()=>handleFilters('deliveryTime')}
          
          >Delivery Time</span>
          <span
          onClick={()=>handleFilters('rating')}
          
          
          >Rating</span>
          <span
          onClick={()=>handleFilters('costLowtoHign')}

          
          
          >Cost: Low To High</span>
          <span
          onClick={()=>handleFilters('costHightoLow')}

          
          >Cost: High To Low</span>
          <span
    
          >Filters</span>
        </div>
      </div>
    </div> */}

{/* <Header2
    show={false} lenght=
    {filteredData.length>0 ?
      filteredData.length  : items.length} 
    /> */}

<Header2
    show={false} lenght=
   {items.length}
    />
  
            </div>
          
            </div>




            <div className='InsideCombine_inside_Maincontent'>
              {/* To be check */}
           
      <div className='App_Maincontent_inside'>
        {specialheader &&
        
        <div className='App_Maincontent_inside_header2'>
        {/* <Header2 show={true}/> */}



        <Header2
    show={true} lenght=
    {items.length} 
    />



       
          </div>
        }
       {/* {firstchange &&
         <InsideCombine/> } */}

{/* <Maincontent/> */}
{/* <button
onClick={handlefilter}
>filter</button> */}

<div className='App_Maincontent_inside_items_map'>


     <div className='App_Maincontent_inside_items_map_inside'>
{/* 
{filteredData.length>0 ?
 filteredData?.map((item,indx)=>{
  return(
    <div  key={indx}
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
 : */}



 {items.length>0?
 
 items?.map((item,indx)=>{
  return(
    <div  key={indx}
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
 }):
 (navigator.onLine)?
 <h1 className='InsideCombine_NoResipeIndicator'>
 OOps No Reciepe! for the required filter!  Try with another filter.</h1> :
 <h1
 className='InsideCombine_NoResipeIndicator'
 >
 OOps No Reciepe! due to Network isuue!! </h1>

}

     </div>
      
</div>
       

      </div>
            </div>

        </div>

{/* <button
onClick={()=>{
  setch(ch+1)
}}

>ckl</button> */}

{selectFilterInfo.active &&
        <div className='InsideCombine_Filtering_page'>
          <div className='InsideCombine_Filtering_page_inside'>



<div className='InsideCombine_Filtering_page_inside_left'
onClick={handleEraseFilteringPage}

>

</div>
<div className='InsideCombine_Filtering_page_inside_right'
style={{
 
  height:`${(window.innerHeight)}px`
}}
>
<Filters/>
</div>


            </div>
        </div>}
      
    </div>
  )
}

export default InsideCombine
