import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import './Dashboard_users.css'
import Dashboard_users_data from './Dashboard_users_data'

const Dashboard_users = () => {

  let [userData,setUserData]=useState([])

  useEffect(()=>{

db.collection('user').onSnapshot((data)=>{
  setUserData((data.docs.map((item)=>({
    
      id:item.id,
      data:item.data()
    
  }))))

})

  },[])

  // console.log(userData)

  return (
    <div className='Dashboard_users'>


<div className='Dashboard_users_inside'>


<div className='Dashboard_users_inside_names'> 

    <div>Email</div>
    <div>phoneNumber</div>
    <div>Name</div>
</div>

    <div className='Dashboard_users_inside_map'>

  {userData.map((data)=>{
    return(
      <div 
      key={data.id}
       className='Dashboard_users_inside_insideMap'>

        {/* <div>{data.data.email}</div>
        <div>{data.data.phoneNumber}</div>
        <div>{data.data.name}</div> */}

        <Dashboard_users_data 
        email={data.data.email}
        phoneNumber={data.data.phoneNumber}
        name={data.data.name}
        id={data.id}
        
        />


        </div>
    )
  })}


</div>
</div>
    </div>
  )
}

export default Dashboard_users