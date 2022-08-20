import React from 'react'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import './FirstPage.css'

const FirstPage = () => {
  return (
    <div className='FirstPage'>
        <div className='FirstPage_inside'>
            <div className='FirstPage_inside_Firstsection'>
                <FirstSection/>
            </div>
            <div className='FirstPage_inside_SecondSection'>
                <SecondSection/>
            </div>
            <div className='FirstPage_inside_ThirdSection'>
                <ThirdSection/>
            </div>
            {/* <div></div> */}
        </div>
    </div>
  )
}

export default FirstPage