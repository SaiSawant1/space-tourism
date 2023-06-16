import Image from 'next/image'
import React from 'react'

const TechImage = () => {
  return (
    <div className="w-full my-6">
            <Image
              src="/technology/image-launch-vehicle-landscape.jpg"
              alt="launch vehicle"
              width={375}
              height={170}
              className="object-contain w-full"
            />
          </div>
  )
}

export default TechImage