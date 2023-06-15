import Image from 'next/image'
import React from 'react'

const CrewImage = ({image}:{image:string}) => {
  return (
    <div className="flex content__center mt-6">
          <Image alt="crew" src={image} width={177} height={222} />
        </div>
  )
}

export default CrewImage