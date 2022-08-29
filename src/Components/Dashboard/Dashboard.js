import React, { useState } from 'react'
import Dashboard_Items from './Dashboard_Items'
import Dashboard_users from './Dashboard_users'
import './Dashboard.css'

const Dashboard = () => {
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

            </div>

            <div className='Dashboard_inside_adminselectbtn_display'>
                {adminselet.items?
            <Dashboard_Items/>:
            adminselet.users?
            <Dashboard_users/>:'select any'    
            }

            </div>


        </div>

    </div>
  )
}

export default Dashboard