import React from 'react'
import { useSelector } from 'react-redux'
import { SelectedItemInfo } from '../../Redux_toolkit/Redux_Slice'
import Header1 from '../Header/Header1'
import './SelectedItem.css'
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const SelectedItem = () => {

    let selectedItemInfo=useSelector(SelectedItemInfo)
    console.log(selectedItemInfo.cuponcode)
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
              Info about Cart
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

      </div>
    </div>
  )
}

export default SelectedItem
