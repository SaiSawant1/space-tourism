import React from 'react'
import Link from 'next/link'
const ToggleMenu = () => {
  return (
    <div className='fixed tablet:hidden toggle_menu menu top-0 px-8 bottom-0 right-0 left-1/3 z-40 text-p-white'>
        <ul className='my-32 text-sm '>
            <Link href='/'>
            <li className='my-6 barlow  cursor-pointer'>
               <span className='font-extrabold mr-3'>00</span> HOME 
            </li></Link>
            <Link href='/destination'><li className='my-6 barlow cursor-pointer'>
               <span className='font-extrabold mr-3'>01</span> DESTINATION
            </li></Link>
            <Link href='/crew'><li className='my-6 barlow cursor-pointer'>
               <span className='font-extrabold mr-3'>02</span> CREW
            </li>
            </Link>
            <Link href='/technology'>
            <li className='my-6 barlow cursor-pointer'>
               <span className='font-extrabold mr-3'>03</span> TECHNOLOGY
            </li></Link>
        </ul>
    </div>
  )
}

export default ToggleMenu