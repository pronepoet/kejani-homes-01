import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Navbar = () => {
  return (
    <div>
        <nav class="relative container mx-auto p-6">
          <div class="flex items-center justify-between" >
            <div class="pt-2">
              {/* <img src="../public/Logo.png" alt="kejani-logo"/> */}
              <Image   src="/../public/Logo.png" // Path to your image in the public directory
        alt="My Image"
        width={50} // Specify the width
        height={50} />

            </div>
            <div class="hidden md:flex space-x-6">
          <a href="/" class="hover:text-darkGrayishBlue">Home</a>
          <a href="#" class="hover:text-darkGrayishBlue">About</a>
          <a href="#" class="hover:text-darkGrayishBlue">Listing</a>
          <a href="/login" class="hover:text-darkGrayishBlue">Login</a>
          </div>
          </div>
      </nav>
</div>
  
  )
}
