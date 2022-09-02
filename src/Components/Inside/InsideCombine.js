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
// import Filters from './Filters/Filters'


const InsideCombine = () => {
  let [items,setItems]=useState([])
  let [specialheader,setSpecialheader]=useState(false)
  // let [filteredData,setFilteredData]=useState([])
 
  let selectReqFilter=useSelector(SelectreqFilter)
  // let dispatch=useDispatch()
  let selectFilterInfo=useSelector(SelectFilterInfo)
  let selectDataFilterInfo=useSelector(SelectDataFilterInfo)
  // console.log(selectDataFilterInfo)

// console.log(selectDataFilterInfo)


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
  // alert('rendered')


},[])





useEffect(()=>
{

  // console.log('renderd')

  if(selectDataFilterInfo && Object.keys(selectDataFilterInfo).length !== 0){
  // console.log('renderd inside object')

  if(selectReqFilter==='rating'){
  // console.log('renderd inside object rating')

  
 setItems(items.sort((a,b)=>parseFloat(a.data.rating) -parseFloat(b.data.rating) ).reverse())
  
  }
  
 if(selectReqFilter==='costLowtoHign'){
  
  items.sort((a,b)=>parseFloat(a.data.price) -parseFloat(b.data.price) )

}

if(selectReqFilter==='costHightoLow'){
  
  items.sort((a,b)=>parseFloat(a.data.price) -parseFloat(b.data.price) ).reverse()

}
if(selectReqFilter==='deliveryTime'){
  items.sort((a,b)=>parseFloat(a.data.minites) -parseFloat(b.data.minites) )

  
}









 
  }

  else {
 
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

 }}


},[selectReqFilter])



if(selectFilterInfo.active){
  document.body.style.overflow='hidden'
}

// let handleEraseFilteringPage=()=>{

 
//     dispatch(filterInfoAction({
//       active:false
//     }))
//   document.body.style.overflowY='scroll'

  
// }

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


//   if(selectDataFilterInfo?.cuisines?.length>0)
// {

//   setItems(items?.filter((item)=>(
  
//     selectDataFilterInfo?.cuisines.includes(item.data.type)))
//     )

// }


// if( selectDataFilterInfo?.rating ){
//   console.log(selectDataFilterInfo?.rating )

//   let val=parseFloat((selectDataFilterInfo?.rating)?.split('>')[1])
//   console.log(parseInt(selectDataFilterInfo?.rating))


//   if(parseInt(selectDataFilterInfo?.rating)===5){
//     console.log(parseInt(selectDataFilterInfo?.rating),'here if')
//     setItems(items?.filter((data)=>parseFloat(data.data?.rating)
//     ===parseInt(selectDataFilterInfo?.rating))
//       )
//   }
//   else {
//     console.log(parseInt(selectDataFilterInfo?.rating),'here else')

//   setItems(items?.filter((data)=>parseFloat(data.data?.rating)
//   >=val)
//     )}
// }


// if(selectDataFilterInfo?.freedelvery){
//   setItems(items?.filter((data)=>(data.data?.freedelivery)
//   ==='true'))
// }


// if(selectDataFilterInfo?.offers){
//   setItems(items?.filter((data)=>
//   parseInt(data.data?.discount)!==0 )
//   )
 
// }

// if(!selectDataFilterInfo){
//   getDataFunction()
// }


// console.log(selectDataFilterInfo?.rating)
console.log(selectDataFilterInfo)

if(!selectDataFilterInfo ){
  console.log('no data')

  getDataFunction()


}


  let val=parseFloat((selectDataFilterInfo?.rating)?.split('>')[1])
  // console.log(val)


if(selectDataFilterInfo?.cuisines?.length>0)
{
// When  causine , offers , freedeilvery & rating are clicked

  if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)&& (selectDataFilterInfo?.rating)  ){
    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter((item)=>(
    
   
    selectDataFilterInfo?.cuisines.includes(item.data.type))).filter( (data)=>(data.data?.freedelivery)
      ==='true'
    )
    
    .filter(
      (data)=>
      parseInt(data.data?.discount)!==0 ).filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      console.log('rating less than 5')
      setItems(items?.filter((item)=>(
  
        selectDataFilterInfo?.cuisines.includes(item.data.type))).filter((data)=>(data.data?.freedelivery)
          ==='true'
        ).filter((data)=>
          parseInt(data.data?.discount)!==0 ).filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }

  }


else  {

  if(  ((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)) ||
  
  ((selectDataFilterInfo?.freedelvery)&& (selectDataFilterInfo?.rating)  )    ||
  (
    (selectDataFilterInfo?.offers) && (selectDataFilterInfo?.rating) 
  )
  )
  {
// When just causine , offers & freedilivery are clicked


 if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)  ){
   
  
    setItems(items?.filter((item)=>(
  
      selectDataFilterInfo?.cuisines.includes(item.data.type))).filter( (data)=>(data.data?.freedelivery)
        ==='true'
      )
      
      .filter(
        (data)=>
        parseInt(data.data?.discount)!==0 )
            
      )



  }
// When just causine , freedelivery & rating are clicked

  if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.rating)){


    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter((item)=>(
    
   
    selectDataFilterInfo?.cuisines.includes(item.data.type))).filter( (data)=>(data.data?.freedelivery)
      ==='true'
    ).filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      console.log('rating less than 5')
      setItems(items?.filter((item)=>(
  
        selectDataFilterInfo?.cuisines.includes(item.data.type))).filter((data)=>(data.data?.freedelivery)
          ==='true'
        ).filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }


    

  }


// When just causine , offers & rating are clicked


  if((selectDataFilterInfo?.offers) && (selectDataFilterInfo?.rating)){


    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter((item)=>(
    
   
    selectDataFilterInfo?.cuisines.includes(item.data.type))).filter(
      (data)=>
      parseInt(data.data?.discount)!==0 )
    
    .filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      // console.log('rating less than 5')
      setItems(items?.filter((item)=>(
  
        selectDataFilterInfo?.cuisines.includes(item.data.type)))
        
        .filter(
          (data)=>
          parseInt(data.data?.discount)!==0 )
        
        .filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }


    

  }





  







}

else {


if((selectDataFilterInfo?.offers) ||(selectDataFilterInfo?.rating) || (selectDataFilterInfo?.freedelvery) )
{
 // When just causine & freedelivery are clicked


  if(selectDataFilterInfo?.freedelvery){
  // console.log('free delivery')


    setItems(items?.filter((item)=>(
  
      selectDataFilterInfo?.cuisines.includes(item.data.type))
      ).filter((data)=>(data.data?.freedelivery)
      ==='true'
    )
      
      
      )
      
  }

// When just causine & offers are clicked

  if(selectDataFilterInfo?.offers){
    // console.log('free delivery')
  
  
      setItems(items?.filter((item)=>(
    
        selectDataFilterInfo?.cuisines.includes(item.data.type))
        ).filter(
          (data)=>
          parseInt(data.data?.discount)!==0 )
      )
        
        
        
        
    }

// When just causine & rating are clicked

    if((selectDataFilterInfo?.rating) )
{


  if(parseInt(selectDataFilterInfo?.rating)===5){
    console.log('rating 5')

  
setItems(items?.filter((item)=>(
  
 
  selectDataFilterInfo?.cuisines.includes(item.data.type)))
  
  .filter(   (data)=>
      parseInt(data.data?.rating)===5
        
        )
  )
}

  else
  {
    // console.log('rating less than 5')
    setItems(items?.filter((item)=>(

      selectDataFilterInfo?.cuisines.includes(item.data.type)))

      .filter((data)=>parseFloat(data.data?.rating)
          >=val)
      )

  }



}



}

// When just Causine are selected

else {

  setItems(items?.filter((item)=>(

    selectDataFilterInfo?.cuisines.includes(item.data.type))))

}
}




}







  
}



// When no causine is selected & remaining are selected



else {

  // WHen no causine selected & remiang are selected


  if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)&& (selectDataFilterInfo?.rating)  ){
    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter( (data)=>(data.data?.freedelivery)
      ==='true'
    )
    
    .filter(
      (data)=>
      parseInt(data.data?.discount)!==0 ).filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      console.log('rating less than 5')
      setItems(items?.filter((data)=>(data.data?.freedelivery)
          ==='true'
        ).filter((data)=>
          parseInt(data.data?.discount)!==0 ).filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }

  }



else {



  if(  ((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)) ||
  
  ((selectDataFilterInfo?.freedelvery)&& (selectDataFilterInfo?.rating)  )    ||
  (
    (selectDataFilterInfo?.offers) && (selectDataFilterInfo?.rating) 
  )
  )
  {
// When no causine is selected , freedeivlery & offers are selected


 if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.offers)  ){
   
  
    setItems(items?.filter( (data)=>(data.data?.freedelivery)
        ==='true'
      )
      
      .filter(
        (data)=>
        parseInt(data.data?.discount)!==0 )
            
      )



  }
// When no causine is selected , freedeivlery & rating are selected


  if((selectDataFilterInfo?.freedelvery) && (selectDataFilterInfo?.rating)){


    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter( (data)=>(data.data?.freedelivery)
      ==='true'
    ).filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      console.log('rating less than 5')
      setItems(items?.filter((data)=>(data.data?.freedelivery)
          ==='true'
        ).filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }


    

  }

// When no causine is selected , offers & rating are selected



  if((selectDataFilterInfo?.offers) && (selectDataFilterInfo?.rating)){


    if(parseInt(selectDataFilterInfo?.rating)===5){
      console.log('rating 5')

    
  setItems(items?.filter(
      (data)=>
      parseInt(data.data?.discount)!==0 )
    
    .filter(   (data)=>
        parseInt(data.data?.rating)===5
          
          )
    )
  }

    else
    {
      // console.log('rating less than 5')
      setItems(items?.filter((item)=>(
  
        selectDataFilterInfo?.cuisines.includes(item.data.type)))
        
        .filter(
          (data)=>
          parseInt(data.data?.discount)!==0 )
        
        .filter((data)=>parseFloat(data.data?.rating)
            >=val)
        )

    }


    

  }}

  else{
// WHen just Free delivery clicked
    if(selectDataFilterInfo?.freedelvery){
      // console.log('free delivery')
    
    
        setItems(items?.filter((data)=>(data.data?.freedelivery)
          ==='true'
        )
          
          
          )
          
      }
    
    // When just causine & offers are clicked
    
      if(selectDataFilterInfo?.offers){
        // console.log('free delivery')
      
      
          setItems(items?.filter(
              (data)=>
              parseInt(data.data?.discount)!==0 )
          )
            
            
            
            
        }
    
    // When just causine & rating are clicked
    
        if((selectDataFilterInfo?.rating) )
    {
    
    
      if(parseInt(selectDataFilterInfo?.rating)===5){
        console.log('rating 5')
    
      
    setItems(items?.filter(   (data)=>
          parseInt(data.data?.rating)===5
            
            )
      )
    }
    
      else
      {
        // console.log('rating less than 5')
        setItems(items?.filter((data)=>parseFloat(data.data?.rating)
              >=val)
          )
    
      }
    
    
    
    }

  }





  







}





  

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



<Header2
    show={false} lenght=
   {items.length}
    />
  
            </div>
          
            </div>




            <div className='InsideCombine_inside_Maincontent'>
           
           
      <div className='App_Maincontent_inside'>
        {specialheader &&
        
        <div className='App_Maincontent_inside_header2'>




        <Header2
    show={true} lenght=
    {items.length} 
    />



       
          </div>
        }
      

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



      
    </div>
  )
}

export default InsideCombine
