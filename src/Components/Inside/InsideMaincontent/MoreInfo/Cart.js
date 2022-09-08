import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { db } from '../../../../Firebase'
import { SelectLoginUserInfo } from '../../../Redux_toolkit/Redux_Slice'
import CityHeader from '../CitiesInfo/CityHeader'
import './Cart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Cart = () => {

  let [cartItems,setCartItems]=useState([])
  let selectLoginUserInfo=useSelector(SelectLoginUserInfo)

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


// for (let i=0;i<cartItems.length;i++){
  // // console.log(cartItems[i])
 
  //    setToralPrice(totalprice+(parseInt((cartItems[i].data.price))*(cartItems[i].data.number)))
    

  // }
  // console.log((item.data.price))



  let [totalprice,setToralPrice]=useState(0)

  let total=0;

  useEffect(()=>{
   
  cartItems.map((item)=>{
    // debugger
    total+=parseInt( item.data.price)* parseInt(item.data.number)
  // setToralPrice(total)
  
  })
  setToralPrice(total)
  },[cartItems])




let handleSubstractbtn=({id,number})=>{
  let num=number-1
  if(num===0){
    db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).delete()
  }

  else{
  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).update({
    number:num
  })}

}

let handleAdditionbtn=({id,number})=>{
  let num=number+1

  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').doc(id).update({
    number:num
  })
}

  return (
    <div className='Cart'>
      <div className='Cart_inside'>

     <div className='City_inside_header'>
        <CityHeader/>
        {/* <Header1/> */}
        </div>
  

              
              {cartItems.length===0?
        <div className='Cart_inside_section1'>

          <div className='Cart_inside_section1_img'
          ></div>

          <div className='Cart_inside_section1_downpart'>
          <h2> Your cart is empty</h2> 
<small> You can go to home page to view more restaurants</small>
<br/>
<Link to='/'>
<button>


SEE RESTAURANTS NEAR YOU
</button>
</Link>

</div>

        </div>:
        <div className='Cart_inside_carts'>
          <div className='Cart_inside_carts_inside'>
             
             <div className='Cart_inside_carts_inside_number'>
            <span> <b>

            {cartItems.length} 

            </b>
              </span>  ITEMS IN THE CART
              </div>
 
          <div className='Cart_inside_carts_inside_maping'>

            {cartItems.map((items)=>{
              return(
                <div key={items.id} className='Cart_inside_carts_inside_mapinside'>

<div className='Cart_inside_carts_inside_mapinside_namesdiv'>
<span>{items.data.name}</span>
<span>{items.data.type}</span>


</div>
<div className='Cart_inside_carts_inside_mapinside_numbersdiv'>

  <button
  onClick={()=> handleSubstractbtn({
    id:(items.id),
    number:(items.data.number)

  })}
  >
  <RemoveIcon /> 
  </button>
  <button>{items.data.number}</button>
  <button
  onClick={()=> handleAdditionbtn({
    id:(items.id),
    number:(items.data.number)

  })}
  >

    <AddIcon/> 
  </button>


</div>
<div className='Cart_inside_carts_inside_mapinside_pricediv'>

₹ {(items.data.price*items.data.number)}
</div>

                  </div>
              )
            })}
            </div>


           <div className='Cart_inside_carts_inside_totalprice_div'>
            <div className='Cart_inside_carts_inside_totalprice'>
              <span>TO PAY</span>
            <span>₹  {totalprice} </span>
              </div>
           </div>
            </div>

          </div>
        
        }
      </div>

      {/* Cart */}
    </div>
  )
}

export default Cart