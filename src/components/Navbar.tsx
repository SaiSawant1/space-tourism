'use client'
import Image from 'next/image'
import React from 'react'
import ToggleMenu from './ToggleMenu'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className='h-10 tablet:h-24 w-full relative flex justify-between items-center '>
        <Image src={`/shared/logo.svg`} alt='logo' width={40} height={40} className='object-contain cursor-pointer'/>
        <div className='flex bg-p-black h-full w-1/2'>
        </div>
        <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={`/shared/icon-${isMenuOpen ? 'close' : 'hamburger'}.svg`} alt='logo' width={24} height={21} className='object-contain tablet:hidden cursor-pointer z-20'/>
        {isMenuOpen && <ToggleMenu />}
    </nav>
  )
}

export default Navbar