"use client"
import React, { useRef } from 'react'
import LandingPage from './landing-page'
import LandingForm from './landing-form'
import LandingAbout from './landing-about'

const LandingMain = () => {
    const formRef = useRef<HTMLDivElement>(null);
  
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='flex flex-col'>
      <LandingPage handleScrollToForm={handleScrollToForm} />
      <LandingForm ref={formRef}/>
      <LandingAbout/>
    </div>
  )
}

export default LandingMain
