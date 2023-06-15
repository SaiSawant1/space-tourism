import Image from 'next/image'
import React from 'react'

const CrewImage = ({image}:{image:string}) => {
  return (
    <div className="flex content__center mt-6 ">
          <Image alt="crew" src={image} width={177}  height={222} className='tablet:w-[456px]  tablet:h-[532px] object-contain'/>
        </div>
  )
}

export default CrewImage