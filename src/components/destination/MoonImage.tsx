import Image from 'next/image'
const MoonImage = () => {
  return (
    <div className="flex content__center my-7 w-full">
            <Image
              src="/destination/image-moon.png"
              width={170}
              height={170}
              className=" object-contain"
              alt="journey"
            />
          </div>
  )
}

export default MoonImage