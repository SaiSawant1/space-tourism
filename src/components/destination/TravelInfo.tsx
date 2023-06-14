import React from 'react'

const TravelInfo = ({AvgDistance, EstTravelTime}:{AvgDistance:string, EstTravelTime:string}) => {
  return (
    <div className="text-white w-full gap-8 my-3 flex flex-col py-1">
            <div >
              <p className="text-gray-700 mb-3 font-semibold barlow">AVG. Distance</p>
              <h2 className="text-4xl font-bold">{AvgDistance}</h2>
            </div>
            <div>
              <p className="text-gray-700 mb-3 font-semibold barlow">EST. Travel Time</p>
              <h2 className="text-4xl font-bold">{EstTravelTime}</h2>
            </div>
          </div>
        
  )
}

export default TravelInfo