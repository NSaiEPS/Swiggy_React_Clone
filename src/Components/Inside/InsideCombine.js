import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import HeaderBtween from './Header/HeaderBtween'
import './InsideCombine.css'
// import Maincontent from './InsideMaincontent/Maincontent'
import Items from './Items/Items'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const InsideCombine = () => {
  let [items,setItems]=useState([])
  let [specialheader,setSpecialheader]=useState(false)
  let [filteredData,setFilteredData]=useState([])
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=535) return setSpecialheader(true)
    return setSpecialheader(false)
  })

  // console.log('render')

  db.collection('items').onSnapshot((item)=>{
    setItems((item.docs.map((data)=>({
      id:data.id,
      data:data.data()

    }))))
    setFilteredData(items)

  })


},[])


let [filtering,setFiltering]=useState(0)
let handlefilter=()=>{
  setFiltering(filtering+1)
  console.log(filtering)
}

let handleFilters=()=>
{
  setFilteredData(items?.filter((item)=>parseFloat(item.data?.rating)
  >=4))
 
  console.log(filteredData)
 
 }
  
  console.log(filteredData)


// useEffect(()=>{


// let filters=()=>{
//   // console.log('getr')
//  setFilteredData(items?.filter((item)=>item.data?.discount!=='0'))
 
//  console.log(filteredData)

// }
//  filters()
//  console.log(filteredData)

// },[filtering])

let num=10;
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


            <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
          <h2>{num} restaurants</h2>
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
          <span>Delivery Time</span>
          <span>Rating</span>
          <span>Cost: Low To High</span>
          <span>Cost: High To Low</span>
          <span
          onClick={handleFilters}
          >Filters</span>
        </div>
      </div>
    </div>
  
            </div>
          
            </div>




            <div className='InsideCombine_inside_Maincontent'>
              {/* To be check */}
           
      <div className='App_Maincontent_inside'>
        {specialheader &&
        
        <div className='App_Maincontent_inside_header2'>
        {/* <Header2 show={true}/> */}



        <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
          <h2>{num} restaurants</h2>
        </div>

        <div className='Header2_inside_right'>
          <Link to='/search'
          className='Header2_inside_right_searchLink'
          >
          <span
          
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            Search</span>
          </Link>
          <span>Relevance</span>
          <span>Delivery Time</span>
          <span>Rating</span>
          <span>Cost: Low To High</span>
          <span>Cost: High To Low</span>
          <span
          onClick={handleFilters}
          >Filters</span>
        </div>
      </div>
    </div>



       
          </div>
        }
       {/* {firstchange &&
         <InsideCombine/> } */}

{/* <Maincontent/> */}
<button
onClick={handlefilter}
>filter</button>

<div className='App_Maincontent_inside_items_map'>


     <div className='App_Maincontent_inside_items_map_inside'>

{Array.isArray(filteredData)&&
 
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
