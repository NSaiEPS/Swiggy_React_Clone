import React, { useState } from 'react'
import './Items.css'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { selectItemInfoAction } from '../../Redux_toolkit/Redux_Slice';
import { useDispatch } from 'react-redux';
import Dashboard_Items from '../../Dashboard/Dashboard_Items';
import { toast } from 'react-toastify'
import { db } from '../../../Firebase';
import { Input_Selectors } from '../../Dashboard/Input_Selectors';


const Items = ({id,imgurl,name,type,rating,discount,price,
   numofpeople,minites,cuponcode,freedelivery,promoted,index,dashboard}) => {

   
// console.log(typeof(name))
// let ratingreq=rating;
// ratingreq= (parseFloat(ratingreq))

let splitName=name.split(' ')
// console.log(splitName)
let reqName=splitName.join('-')
// console.log(reqName)
let dispatch=useDispatch()

let handleGoItemPage=()=>{
   dispatch(
      selectItemInfoAction(

   {id,imgurl,name,type,rating,discount,reqName
      ,price,numofpeople,minites,cuponcode,freedelivery,promoted,index
    
    
    }

      )


    

   )

   dispatch({
    type:'selectItemInfoAction',
    payload:{
        id,imgurl,name,type,rating,discount,reqName
        ,price,numofpeople,minites,cuponcode,freedelivery,promoted,index
      
      
    }
   })

   window.scrollTo(0,0)
}




// For editing

let [inputval,setInputVal]=useState({
   form:false,
   imgurl:imgurl,
   name:name,
   type:type,
   rating:rating,
   discount:discount,
   price:price,
   numofpeople:numofpeople,
   minites:minites,
   cuponcode:cuponcode,
   freedelivery:freedelivery,
   promoted:promoted

})

let [onfocus,setOnFocus]=useState({
   imgurl:false,
       name:false,
   type:false,
   rating:false,
   discount:false,
   price:false,
   numofpeople:false,
   minites:false,
   cuponcode:false,
   freedelivery:false,
   promoted:false

})

let handleEdit=()=>{
   setInputVal({
      ...inputval,
      form:true
  })
  // document.body.style.scrool=''
document.body.style.overflow = "hidden";

}

// let handleAddItem=()=>{


// }

let handleInputChange=(e)=>{
   let nam=e.target.name;
   let val=e.target.value;

   setInputVal({
       ...inputval,
       [nam]:val
   })




}

let handleEraceForm=()=>{
   setInputVal({
       ...inputval,
       form:false,
       imgurl:'',
       name:'',
       type:'',
       rating:1,
       discount:1,
       price:1,
       numofpeople:1,
       minites:1,
       cuponcode:'',
       freedelivery:'',
       promoted:''
   })
 document.body.style.overflowY = "scroll";

}


let handlefocus=(e)=>{
   let nam=e.target.name;
   setOnFocus({
       onfocus,
       [nam]:true
   })

}

let handleBlur=(e)=>{
   let nam=e.target.name;
   setOnFocus({
       onfocus,
       [nam]:false
   })
}





let handleSelection=(e)=>{
// console.log(e.target.value)
let nam=e.target.name
let val=e.target.value
setInputVal({
   ...inputval,
   [nam]:val
})

}

let handleSubmitForm=(e)=>{
e.preventDefault()

setInputVal({
   ...inputval,
   form:false,
   imgurl:'',
   name:'',
   type:'',
   rating:1,
   discount:1,
   price:1,
   numofpeople:1,
   minites:1,
   cuponcode:'',
   freedelivery:'',
   promoted:''
})




// console.log(e)

db.collection('items').doc(id).update({

imgurl:inputval.imgurl,
name:inputval.name,
type:inputval.type,
rating:inputval.rating,
discount:inputval.discount,
price:inputval.price,
numofpeople:inputval.numofpeople,
minites:inputval.minites,
cuponcode:inputval.cuponcode,
freedelivery:inputval.freedelivery,
promoted:inputval.promoted


})

toast.success(`Items editted successfully`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
// pauseOnHover: true,
draggable: true,
progress: undefined,
})
document.body.style.overflowY = "scroll";

}

  return (
  <div className='Items'
  onClick={handleGoItemPage}
  >
   <Link to={!dashboard && `restaurants/${reqName}`}
   
   >
    <div className='Items_inside'>
{/* {name} */}


 <div>
    <img src={imgurl}
    className='Items_inside_IMG'
    alt='img.pmg'/>
 </div>


 <div className='Items_inside_names_div'>
    <span>{name}</span> <br/>
    <small>{type}</small>
 </div>


 <div className='Items_inside_rating_div_'>
<button

className={parseFloat(rating)>=4.5 ? 'Items_inside_rating_div_GoldBtn':
(parseFloat(rating)<4.5 && parseFloat(rating)>=3.5)? '':
(parseFloat(rating)<3.5 && parseFloat(rating)>=2.5)?'Items_inside_rating_div_Avgbtn':
parseFloat(rating)<2.5 && 'Items_inside_rating_div_BelowAvgbtn'
}
>
    <StarIcon className='Items_inside_rating_div_StarIcon'/>
    {parseFloat(rating)!==0 ? `${rating}`:'__'}


 </button>
<span>{minites} MINS</span>
<span>₹ {price} for {numofpeople}</span>

 </div>

 {parseInt(discount)!==0 &&
 <div className='Items_inside_offers_div_'>
  
     {cuponcode?
    (`${parseInt(discount)} % off | Use ${cuponcode} `)
:
(`${parseInt(discount)} % off on all orders `)}

 </div>}
 {freedelivery==='true' &&
 
 <div className='Items_inside_freedilivery_div_'>
   FREE DELIVERY
 </div>
 }


 <div className='Items_inside_quickview_div_'>
   {dashboard ? 
   
   <span onClick={handleEdit}>
      Edit
   </span>
   // 'Edit'
   :
   
    'QUICK VIEW' }
 </div>


{promoted==='true' && 
 <div
 className='Items_inside_promoted_div_'
 >
    <span>PROMOTED</span>
 </div>
}
    </div>
    </Link>




{/* For editing the Items */}

      <div className='Items_ForDashBoard_Editing'>

{
    inputval.form &&

       <div className='Dashboard_Items_addItemForm'>
        <form className='Dashboard_Items_addItemForm_form'
        onSubmit={handleSubmitForm}
        >

        
            <div className='Dashboard_Items_addItemForm_div'>
                <input name='imgurl' value={inputval.imgurl}
                onChange={handleInputChange} required
                onFocus={handlefocus} onBlur={handleBlur}
                type='url'
                />
                <span
                className= {(onfocus.imgurl || inputval.imgurl) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}
                
                >Enter image url</span>
            </div>


            <div className='Dashboard_Items_addItemForm_div'>
                <input name='name' value={inputval.name}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}

                />
                <span
                className= {(onfocus.name || inputval.name) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter name of resiepe</span>
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='type' value={inputval.type}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur} multiple

                />
                <span
                className= {(onfocus.type || inputval.type) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter type of resiepe</span>


                <select  
                 name='type' onChange={handleSelection}
                                className='DashBoard_items_selection'>
            {Input_Selectors.typeofResipe.map((item,indx)=>{
                return(
                <option  
                key={indx}>{item}</option>)

            })}
               
              
           </select>



            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='rating' value={inputval.rating}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                type='number'

                />
                <span
                className= {(onfocus.rating || inputval.rating)?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter rating of resiepe {`"<=5"`}</span>
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='discount' value={inputval.discount}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                type='number'

                />
                <span
                className= {(onfocus.discount || inputval.discount) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter discount of resiepe( in %)</span>
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='price' value={inputval.price}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                type='number'

                />
                <span
                className= {(onfocus.price || inputval.price) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter price of resiepe (in rupee)</span>
            </div>


            <div className='Dashboard_Items_addItemForm_div'>
                <input name='numofpeople' value={inputval.numofpeople}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                type='number'

                />
                <span
                className= {(onfocus.numofpeople || inputval.numofpeople) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter num of people can eat the resiepe (in num)</span>
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='minites' value={inputval.minites}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                type='number'

                />
                <span
                className= {(onfocus.minites ||inputval.minites) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter the minites to diliver resiepe in Mins</span>
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='cuponcode' value={inputval.cuponcode}
                onChange={handleInputChange}  
                onFocus={handlefocus}  onBlur={handleBlur}

                />
                <span
                className= {(onfocus.cuponcode || inputval.cuponcode)  ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                >Enter the cuponcode of resiepe(not mandatory) </span>
            </div>
      

      <div className='Dashboard_Items_addItemForm_div'>
                <input name='freedelivery' value={inputval.freedelivery}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                // type='bool'

                />
                <span
                className= {(onfocus.freedelivery || inputval.freedelivery) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                > Is it freedelivery?  </span>
          
           <select  name='freedelivery' onChange={handleSelection}className='DashBoard_items_selection'>
            {Input_Selectors.bool.map((item,indx)=>{
                return(
                <option key={indx}>{item}</option>)

            })}
               
              
           </select>
           
            </div>

            <div className='Dashboard_Items_addItemForm_div'>
                <input name='promoted' value={inputval.promoted}
                onChange={handleInputChange}  required
                onFocus={handlefocus}  onBlur={handleBlur}
                // type='bool'

                />
                <span
                className= {(onfocus.promoted || inputval.promoted) ?'Dashboard_Items_addItemForm_div_span_focus' :'Dashboard_Items_addItemForm_div_span'}

                
                > Is it promoted?  </span>
          
           <select  name='promoted' onChange={handleSelection}className='DashBoard_items_selection'>
            {Input_Selectors.bool.map((item,indx)=>{
                return(
                <option key={indx}>{item}</option>)

            })}
               
              
           </select>
           
            </div>


        <button className='Dashboard_Items_addItemForm_form_submitbtn'
        type='submit'
        >
            Sumbit
        </button>









        <button
        onClick={handleEraceForm}
        className='Dsashboard_items_form_cancel_btn'
        >X</button>
        </form>

       </div>}



       </div>








  </div>
  )

}

export default Items