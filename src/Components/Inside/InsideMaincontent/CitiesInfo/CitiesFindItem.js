import React from 'react'
import { Link } from 'react-router-dom'
import './CitiesFindItem.css'

const CitiesFindItem = () => {

  let locations=[
  'Howrah',
'South Kolkata',
'Rajarhat',
'Burrabazar',
'North Dumdum',
'Chinar Park',
'Kestopur',
'Kidderpore',
'Salt Lake',
'Ruby Area',
'Santoshpur',
'Bally',
'Central Kolkata',
'Garia',
'Tangra',
'Esplanade',
'Kankurgachi',
'Sector V Salt Lake',
'Naktala',
'Behala',
'Alipore',
'Lake Town',
'Dumdum',
'Jadavpur',
'Thakurpukur',
'Hatibagan']

// let arloc=locations.split(' ')
// console.log(locations)
  return (
    <div
    className='CitiesFindItem'
    >
      <div className='CitiesFindItem_inside'>
      <h2>Where might we find you?</h2>

      <div className='CitiesFindItem_inside_locations'>
        {locations?.map((item,indx)=>{
          return(
            <span key={indx}>
              <Link to='inside'>
              {item}
              </Link>

            </span>
          )
        })}
      </div>
      </div>
      
      </div>
  )
}

export default CitiesFindItem