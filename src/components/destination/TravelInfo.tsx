import React from 'react'

const TravelInfo = ({AvgDistance, EstTravelTime}:{AvgDistance:string, EstTravelTime:string}) => {
  return (
    <div className="text-white w-full gap-8 my-3 flex flex-col py-1 tablet:flex-row tablet:justify-evenly tablet:items-center tablet:my-14">
            <div className='text-center' >
              <p className="text-gray-700 mb-3 font-semibold barlow tablet:mb-6 tablet:text-4xl  desktop:text-base">AVG. Distance</p>
              <h2 className="text-4xl font-bold tablet:text-6xl desktop:text-2xl">{AvgDistance}</h2>
            </div>
            <div className='text-center'>
              <p className="text-gray-700 mb-3 font-semibold barlow tablet:mb-6 tablet:text-4xl desktop:text-base">EST. Travel Time</p>
              <h2 className="text-4xl font-bold tablet:text-6xl desktop:text-2xl">{EstTravelTime}</h2>
            </div>
          </div>
        
  )
}

export default TravelInfo