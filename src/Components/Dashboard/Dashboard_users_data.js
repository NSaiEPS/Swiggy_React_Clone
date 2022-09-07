import React, { useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Dashboard_users_data.css'
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {db} from '../../Firebase'


function Dashboard_users_data({name,id,email,phoneNumber}) {

    let [moreinfo,setMoreinfo]=useState(false)

    let handlemoreinfo=()=>{
        setMoreinfo(!moreinfo)
    }

    let [cartdata,setCartData]=useState([])

    useEffect(()=>{
db.collection('user').doc(id).collection('cart').onSnapshot((data)=>{
    setCartData(data.docs.map((item)=>
        ({
            id:item.id,
            data:item.data()}
        )
    ))

})
   

    },[])

    // console.log(cartdata)
  return (
    <div className='Dashboard_users_data'>

        <div className='Dashboard_users_data_inside'>

      <div>{email}</div>
        <div>{phoneNumber}</div>
        <div>{name}</div>
        <div>more info 
            {moreinfo ?
            <KeyboardArrowUpIcon
            className='Dashboard_users_data_inside_icon'
        onClick={handlemoreinfo}
            />:
            
            <KeyboardArrowDownIcon
        className='Dashboard_users_data_inside_icon'
        onClick={handlemoreinfo}
        /> }
        
        </div>
    </div>


{moreinfo &&
    <div className='Dashboard_users_data_moreinfo'>
        {/* More info about the {name} */}

        {cartdata.map((item)=>{
            return(
                <div 
                key={item.id} 
                className='Dashboard_users_data_moreinfo_mappinginside'
                >
                    <div>
                      <span>{item.data.name}</span>
                      <span>{item.data.type}</span>
                    </div>
                     
                     <div>
                     {item.data.number}
                        </div>

                    <div>
                    <span>₹   {item.data.price}</span>
                       <span>   for{item.data.peopleNum}</span>
                      
                    </div>
                    <div>
                        Total price ₹  {
                            (item.data.price)*(item.data.number)
                        }
                    </div>

                    </div>
            )

        })}


    </div>}
    </div>

  )
}

export default Dashboard_users_data
