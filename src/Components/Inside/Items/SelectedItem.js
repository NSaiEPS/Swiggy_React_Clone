import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logininfoAction, SelectedItemInfo, SelectLoginUserInfo } from '../../Redux_toolkit/Redux_Slice'
import Header1 from '../Header/Header1'
import './SelectedItem.css'
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../../../Firebase'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import RemoveIcon from '@mui/icons-material/Remove';

const SelectedItem = () => {

    let selectedItemInfo=useSelector(SelectedItemInfo)
let selectLoginUserInfo=useSelector(SelectLoginUserInfo)
console.log(selectedItemInfo.id)

    let [cartnumb,setCartNumb]=useState(0)
    let dispatch=useDispatch()


    let handleAddToCard=()=>{
      if(Array.isArray(selectLoginUserInfo)){
      dispatch(
        logininfoAction(
          {name:'login',
           status:true,
        }
        )
      )}
      else {
      setCartNumb(cartnumb+1)
    
      db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').add({
        bookerid:(selectLoginUserInfo.id),
        itemid:(selectedItemInfo.id),
        number:1,
        type:(selectedItemInfo.type),
        name:((selectedItemInfo.name)),
        price:((selectedItemInfo.price)),
        discount:((selectedItemInfo.discount)),
        peopleNum:((selectedItemInfo.numofpeople)),
        freedelivery:((selectedItemInfo.freedelivery))
      })
    }
    }
let handleDeletenum=({id,num})=>{
  
  let number=num-1
  if(number===0){
    db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).delete()
  }

  else{
  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).update({
    number:number
  })}




}
let handleAddnum=({id,num})=>{

  let reqnum=num+1;
  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).update({
  number:reqnum
  })


}





let handleFavouriteClick=()=>{
  if(Array.isArray(selectLoginUserInfo)){
    dispatch(
      logininfoAction(
        {name:'login',
         status:true,
      }
      )
    )}
    else {
    alert('added to favorite')


  
  }
}

let [cartItems,setCartItems]=useState([])

let getCartData=()=>{
  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').onSnapshot((data)=>{
    setCartItems((data.docs.map((item)=>({
      id:item.id,
data:item.data()



    }))))
  })
}
useEffect(()=>{
  getCartData()

},[])

// console.log(cartItems)
let [cartItemId,setcartItemid]=useState([])
let [itemAdded,setItemAdded]=useState(false)
let [totalprice,setToralPrice]=useState(0)

useEffect(()=>{
cartItems.map((item)=>{
  // console.log((item.data.itemid))
  let id=(item.data.itemid)
  // if(!cartItemId.includes(id)){
  // setcartItemid([
  //   ...cartItemId,
  //   id
  // ])}

  if(id===(selectedItemInfo.id)){
    setItemAdded(true)

  }
})



// for (let i=0;i<cartItems.length;i++){
//   console.log(cartItems[i])
  
//      setToralPrice(totalprice+(parseInt((cartItems[i].data.price))*(cartItems[i].data.number)))
    
  
//   }

let price=0;
cartItems.forEach((items)=>{
  price+=parseInt(items.data.price)*parseInt(items.data.number)
})

setToralPrice(price
  )

},[cartItems])

// console.log(itemAdded)
// useEffect(()=>{
// //   cartItems.forEach((item)=>{
// // console.log((item.data.price))

// //     setToralPrice(totalprice+(parseInt((item.data.price))*(item.data.number)))
// //   })

// for (let i=0;i<cartItems.length;i++){
// console.log(cartItems[i])

//    setToralPrice(totalprice+(parseInt((cartItems[i].data.price))*(cartItems[i].data.number)))
  

// }

// },[cartItems])

console.log(totalprice)


  return (
    <div className='SelectedItem'>
      

      <div className='SelectedItem_Inside'>
        <div className='SelectedItem_Inside_Header'>
            <Header1/>

        </div>
        <div className='SelectedItem_Inside_locationIndicator'>
  <span>Home</span>
        </div>



        <div className='SelectedItem_Inside_mainContent'>
            <div className='SelectedItem_Inside_mainContent_Inside'>
            
            <div className='SelectedItem_Inside_mainContent_Inside_imgpart'>
                <img src={selectedItemInfo?.imgurl} alt='img'/>
            </div>


            <div className='SelectedItem_Inside_mainContent_Inside_infoPart'>
            <div className='SelectedItem_Inside_mainContent_Inside_infoPart_inside'>
           <div className='SelectedItem_Inside_mainContent_Inside_infoPart_Name'>
            <span>{selectedItemInfo?.name}</span> <br/>
            <span>{selectedItemInfo?.type}</span>
            
           </div>
           <div className='SelectedItem_Inside_mainContent_Inside_infoPart_moreInfo'>
             
             <div>
                <span> 
                    <StarIcon/>
                    {selectedItemInfo?.rating} </span> <br/>
                <span>Rating</span>
                </div>

                <div>
                <span>{selectedItemInfo?.minites} mins</span> <br/>
                <span>Delivery Time</span>
                </div>


                <div>
                <span>₹ {selectedItemInfo?.price} </span> <br/>
                <span>Cost for {selectedItemInfo?.numofpeople}</span>
                </div>

           </div>

            </div>
            <div className='SelectesItem_InfoaboutCart'>
              <div>
              {/* {!cartItemId.includes((selectedItemInfo.id))? */}
              {!itemAdded?
              <button className='SelectesItem_InfoaboutCart_btnADD'
              
              onClick={handleAddToCard}
              >ADD</button>:
              <button className='SelectesItem_InfoaboutCart_btnADD_more'>
                
                 ADDED
              </button>  }
              </div>
              <div>
              <button className='SelectesItem_InfoaboutCart_btnFavorite'
              onClick={handleFavouriteClick}
              >
                 <FavoriteBorderIcon/> Favourite</button>
              </div>
              

              
            </div>
            </div>


            <div className='SelectedItem_Inside_mainContent_Inside_offerpart'>


{selectedItemInfo?.discount!=='0' &&

<div>
<LocalOfferIcon
className='SelectedItem_Inside_mainContent_Inside_offerpart_icon'

/> {selectedItemInfo?.discount} % off
{selectedItemInfo?.cuponcode ? ` Use cupon code ${selectedItemInfo?.cuponcode}`:
` on all orders`
}
</div>
}

{selectedItemInfo?.freedelivery==="true"  &&
<div>
<LocalOfferIcon
className='SelectedItem_Inside_mainContent_Inside_offerpart_icon'

/>   Free Delivery
  </div>
}
  <div className='SelectedItem_Inside_mainContent_Inside_offerpart_showOff'>
  OFFER
  </div>
            </div>


                </div>
    

        </div>

        {/* <div className='SelectedItem_Inside_cart'> */}

        

        <div className='SelectedItem_Inside_cart_info'>
        {cartItems.length===0 ?
          <>
           
           <h1>Cart Empty</h1>
           <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2' alt='img'/>
        <br/>
        <h4>Good food is always cooking! Go ahead, order some yummy items from the menu.</h4></>
        
        :
      //  Map if have the cart
       
       <div className='SelectedItem_Inside_cart_info_items'>
           <h1>Cart </h1>
           <span>{cartItems.length}  ITEMS</span>
  <div className='SelectedItem_Inside_cart_info_items_mapDiv'>
        {cartItems.map((item,indx)=>{
          return(
            <div key={item.id}
            className='SelectedItem_Inside_cart_info_items_map'
            >
               <div className='SelectedItem_Inside_cart_info_items_map_names'>
              <span>{item.data.name}</span>   
              <span>{item.data.type}</span>
                
               </div>
               <div>
               <button className='SelectesItem_InfoaboutCart_btnADD_more'>

<span
className='SelectesItem_InfoaboutCart_subshow'
>
  <RemoveIcon
onClick={ ()=>{ handleDeletenum(
  {
    id:item.id,
    num:item.data.number
  }
)}}
  />
  </span> 

<span
className='SelectesItem_InfoaboutCart_numbershow'

>{(item.data.number)}</span> 


<span
className='SelectesItem_InfoaboutCart_Addshow'

>
  <AddIcon
  
onClick={()=>{ handleAddnum(
  {
    id:item.id,
    num:item.data.number
  }
)}}
/>

</span>
</button> 
               </div>
               <div>₹ {
                (item.data.price)*(item.data.number)
                }</div>

              </div>
          )
          
        })}

</div>

        
        <div className='SelectedItem_Inside_cart_info_SubTotal'>
          <div> 
            <span>Subtotal</span> <br/>
            <small>Extre charges may apply</small>
          </div>
          <div> ₹  {totalprice}</div>
          </div>
          <Link to='/cart'
          onClick={()=>{
            window.scrollTo(0,0)
          }}
          >
        <div className='SelectedItem_Inside_cart_info_checkout'>
          CHECKOUT   
          <ArrowRightAltIcon/> 
         
          {/* <RemoveIcon/><ArrowForwardIosIcon/> */}
          </div>
          </Link>
          </div>
        
        
        
        }
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default SelectedItem
