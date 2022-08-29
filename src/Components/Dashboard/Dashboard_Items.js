import React, { useState } from 'react'
import './Dashboard_Items.css'

const Dashboard_Items = () => {

    let [inputval,setInputVal]=useState({
        form:false,
        imgurl:'',
        name:'',
        type:'',
        rating:0,
        discount:0,
        price:0,
        numofpeople:0,
        distance:0,
        cuponcode:'',
        freedelivery:false

    })

    let handleAddItem=()=>{
        setInputVal({
            ...inputval,
            form:true
        })

    }

    let handleInputChange=(e)=>{
        let nam=e.target.name;
        let val=e.target.value;

        setInputVal({
            ...inputval,
            [nam]:val
        })




    }
  return (
    <div className='Dashboard_Items'>
        <div className='Dashboard_Items_inside'>
      <button
      className='Dashboard_Items_inside_additem_btn'
      onClick={handleAddItem}
      >Add Item</button>
        </div>
{
    inputval.form &&

       <div className='Dashboard_Items_addItemForm'>
        <form>

        {/* imgurl:'',
        name:'',
        type:'',
        rating:0,
        discount:0,
        price:0,
        numofpeople:0,
        distance:0,
        cuponcode:'',
        freedelivery:false */}
            <div className='Dashboard_Items_addItemForm_div'>
                <input name='imgurl' value={inputval.imgurl}
                onChange={handleInputChange} required
                />
                <span
                className='Dashboard_Items_addItemForm_div_span'
                
                >Enter image url</span>
            </div>


            <div className='Dashboard_Items_addItemForm_div'>
                <input name='name' value={inputval.name}
                onChange={handleInputChange}  required
                />
                <span
                className='Dashboard_Items_addItemForm_div_span'
                
                >Enter name of resiepe</span>
            </div>


        </form>

       </div>}
    </div>
  )
}

export default Dashboard_Items