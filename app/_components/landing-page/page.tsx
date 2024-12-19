import React from 'react'
import LandingPage from './landing-page'
import LandingForm from './landing-form'
import LandingAbout from './landing-about'

const LandingMain = () => {
  return (
    <div className='flex flex-col'>
      <LandingPage/>
      <LandingForm/>
      <LandingAbout/>
    </div>
  )
}

export default LandingMain
