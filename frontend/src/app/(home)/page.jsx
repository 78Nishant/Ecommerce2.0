import HeroSection from '@/components/herosection'
import Navbar from '@/components/navbar'
import Productcard from '@/components/productcard'
import React from 'react'


const page = () => {
  return (
    <div className="h-screen overflow-auto bg-[#fffafa]" suppressHydrationWarning={true}>
      <Navbar/>
      <HeroSection/>

      
      <Productcard/>
      <Productcard/>
      <Productcard/>
      
    </div>
  )
}

export default page
