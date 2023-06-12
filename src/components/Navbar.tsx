'use client'
import Image from 'next/image'
import React from 'react'
import ToggleMenu from './ToggleMenu'
import Link from 'next/link'
const Navbar = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className='h-10 tablet:h-24 w-full relative flex justify-between items-center '>
        <Image src={`/shared/logo.svg`} alt='logo' width={40} height={40} className='object-contain cursor-pointer'/>
        <div className='tablet:flex hidden  bg-black h-full w-2/3'>
          <ul className='justify-between items-center   flex text-p-white h-full w-full px-11'>
            <div className='relative'><Link href='/'><li className='barlow font-thin'>HOME</li></Link><span className='absolute h-1 -bottom-10 bg-white w-full '></span></div>
            <div><Link href='/destination'><li className='barlow'>DESTINATION</li><span></span></Link></div>
            <div><Link href='/crew'><li className='barlow'>CREW</li></Link><span></span></div>
            <div><Link href='/technology'><li className='barlow'>TECHNOLOGY</li><span></span></Link></div>
          </ul>
        </div>
        <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={`/shared/icon-${isMenuOpen ? 'close' : 'hamburger'}.svg`} alt='logo' width={24} height={21} className='object-contain tablet:hidden cursor-pointer z-20'/>
        {isMenuOpen && <ToggleMenu />}
    </nav>
  )
}

export default Navbar