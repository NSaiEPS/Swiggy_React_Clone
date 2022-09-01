import React, { useEffect, useState } from 'react'
import Header1 from '../../../Header/Header1'
import './Search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { db } from '../../../../../Firebase';
import SeacheItems from './SeacheItems';
import CloseIcon from '@mui/icons-material/Close';

const Search = () => {
  let [imgSearchName,setImgSearchName]=useState(' ')
  let [items,setItems]=useState([])
  let [filtersData,setFiltersData]=useState([])


  let handleInputChange=(e)=>{
    setImgSearchName(e.target.value)

  }
  // console.log(imgSearchName)

  let getDataFunction=()=>{
    db.collection('items').onSnapshot((item)=>{
      setItems((item.docs.map((data)=>({
        id:data.id,
        data:data.data()
  
      }))))
  
    })
  
  }

  useEffect(()=>{
    getDataFunction()
  },[])


  useEffect(()=>{
    
    setFiltersData(items.filter((item)=>
    item.data.type===imgSearchName
    
    ))
  },[imgSearchName])
  return (
    <div
    className='Search'
    >

        <div className='Search_inside'>
        <div className='Search_inside_header'>

            <Header1/>
            </div>

            <div className='Search_inside_main'>
                <div className='Search_inside_main_input'>
       <input placeholder='Search for restaurant and food'
       autoFocus 
       value={imgSearchName}
       onChange={handleInputChange}
       
       />
       {imgSearchName!==''?
       <CloseIcon className='Search_inside_main_input_icon'
       onClick={()=>{setImgSearchName('')

       }}
       />
       
       :
       
       <SearchRoundedIcon
       
       className='Search_inside_main_input_icon'/>}
                </div>

            </div>

        </div>

        <div className='Search_outside_main'>
          <div className='Search_outside_main_cuisines'>

          {!filtersData.length>0 && <>
            <h2>Popular Cuisines</h2>
            <div className='Search_outside_main_cuisines_imgpart'>
              <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg'
              alt='cui.img'
              onClick={()=>{
                setImgSearchName('Chicken-Biryani')
              }}
              
              />
            
            <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1'
              alt='cui.img'
              
              onClick={()=>{
                setImgSearchName('Pizzas')
              }}/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv'
              alt='cui.img'


              onClick={()=>{
                setImgSearchName('Burger')
              }}/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/oea45ipb1ctr4m61m7af'
              alt='cui.img'
              onClick={()=>{
                setImgSearchName('Bakery')
              }}/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd'
              alt='cui.img'
              onClick={()=>{
                setImgSearchName('North Indian')
              }}/>

{/* <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd'
              alt='cui.img'/> */}

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx'
              alt='cui.img'
              
              onClick={()=>{
                setImgSearchName('South Indian')
              }}/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u'
              alt='cui.img'
              
              onClick={()=>{
                setImgSearchName('Fast Foods')
              }}/>
<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97'
              alt='cui.img'

              onClick={()=>{
                setImgSearchName('Ice Creams')
              }}/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc'
              alt='cui.img'

              onClick={()=>{
                setImgSearchName('Indian Snacks')
              }}/>
            
            
            </div> </>}

            <div className='Search_outside_main_cuisines_searchedItems'>
             

             {imgSearchName.length>3 &&
             (
             filtersData.length>0 ?(
             filtersData.map((item,indx)=>{
              return(
                <div key={indx}>
                  <SeacheItems
                  id={item.id}
                  imgurl={item.data.imgurl} name={item.data.name} type={item.data.type}
                  rating={item.data.rating} discount={item.data.discount} price={item.data.price}
                  numofpeople={item.data.numofpeople}  minites={item.data.minites}
                  cuponcode={item.data.cuponcode}  freedelivery={item.data.freedelivery}
                  promoted={item.data.promoted}  />
                  </div>
              )
             }))
             
             :`No match found for "${imgSearchName}".   Try Other or Please check the spelling
             `)}
            </div>

          </div>

        </div>
    </div>
  )
}

export default Search