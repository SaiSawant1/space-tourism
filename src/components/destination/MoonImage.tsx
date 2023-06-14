import Image from 'next/image'
import { FC } from 'react'
const MoonImage = ({title}:{title:string}) => {
  return (
    <div className="flex content__center my-7 w-full">
            <Image
              src={`/destination/image-${title.toLowerCase()}.png`}
              width={170}
              height={170}
              className=" object-contain"
              alt="journey"
            />
          </div>
  )
}

export default MoonImage