import React, { useEffect, useState } from 'react'
import Dashboard_Items from './Dashboard_Items'
import Dashboard_users from './Dashboard_users'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Header2 from '../Inside/Header/Header2'
import Items from '../Inside/Items/Items'
import { db } from '../../Firebase'

const Dashboard = () => {
  let [items,setItems]=useState([])

    let [adminselet,setAdminselect]=useState({
        items:true,
        users:false
    })


    let handleselect=(e)=>{
  let nam=e.target.name
  setAdminselect({
    ...adminselet,
    [nam]:true
  })

  if(nam==='items'){
    setAdminselect({
        ...adminselet,
        items:true,
        users:false
      })
  }

  if(nam==='users'){
    setAdminselect({
        ...adminselet,
        items:false,
        users:true
      })
  }
    }


    useEffect (()=>{
   
      db.collection('items').onSnapshot((item)=>{
        setItems((item.docs.map((data)=>({
          id:data.id,
          data:data.data()
    
        }))))
    
      })

    
    
    },[])

  return (
    <div className='Dashboard'
    >


        <div className='Dashboard_inside'>

            <div className='Dashboard_inside_adminselectbtn'>

                <button name='items'
                onClick={handleselect}

                className={adminselet.items && 'btnselected'}
                
                >Items</button>
                <button
                onClick={handleselect}
                className={adminselet.users && 'btnselected'}


                name='users'
                >users</button>

                
                 <button className='Dashboard_inside_gobackBtn'
      //  onClick={handleGobackbtn}
       >
        <Link to='/' 
        className='Dashboard_inside_gobackBtn_link'>
        Back
        </Link>
       
       
       
       
        </button>

            </div>

            <div className='Dashboard_inside_adminselectbtn_display'>
                {adminselet.items?
            <Dashboard_Items/>:
            adminselet.users?
            <Dashboard_users/>:'select any'    
            }

            </div>

       
      

        <div className='DashBoard_item_render'>
          <Header2/>

          <div className='App_Maincontent_inside_items_map_inside'>

      { items?.map((item,indx)=>{
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
 })}
       </div>
        </div>

        </div>

    </div>
  )
}

export default Dashboard