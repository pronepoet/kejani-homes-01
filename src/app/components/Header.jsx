import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <>
    <div className='font-3xl text-center'>
    <div className='image1'>
      
    <Image
        src="/../public/house.jpg" // Path to your image in the public directory
        alt="My Image"
        width={1080} // Specify the width
        height={700} // Specify the height
      />
    </div>
 
        <h1>We provide the <span className='header_span'>best</span> house to be your <span className='header_span'>home</span></h1>
        </div>
  </>
  )
}
