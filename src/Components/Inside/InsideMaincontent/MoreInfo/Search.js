import React from 'react'
import Header1 from '../../Header/Header1'
import './Search.css'

const Search = () => {
  return (
    <div
    className='Search'
    >

        <div className='Search_inside'>
        <div className='Search_inside_header'>

            <Header1/>
            </div>

            <div className='Search_inside_main'>
                <div className='Search_inside_main_input'>
       <input placeholder='Search for restauramta and food' />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Search