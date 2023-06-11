import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-10 w-full relative flex justify-between items-center '>
        <Image src="/shared/logo.svg" alt='logo' width={40} height={40} className='object-contain cursor-pointer'/>
        <Image src="/shared/icon-hamburger.svg" alt='logo' width={24} height={21} className='object-contain cursor-pointer'/>
    </nav>
  )
}

export default Navbar