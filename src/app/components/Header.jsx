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
 
        <h1>We provide the best house to be your home</h1>
        </div>
  </>
  )
}
