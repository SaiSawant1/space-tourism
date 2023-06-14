'use client'
import React, { useEffect } from 'react'
import DesContent from "@/components/destination/DesContent";
import DesOptions from "@/components/destination/DesOptions";
import MoonImage from "@/components/destination/MoonImage";
import TravelInfo from '@/components/destination/TravelInfo'; 
import { desInfo } from '../../../constant/desInfo';
const DesPage = () => {
    const destinationInfo:DestinationConstants=desInfo
    const [currentInfoIndex, setCurrentInfoIndex] = React.useState(0)
    const currentInfo=destinationInfo[currentInfoIndex]

    const handleChange = (index:number) => {
        setCurrentInfoIndex(index)
    }
    
  return (
    <div className="w-full text-center  tracking-widest">
          <span className="text-slate-700 text-xl mx-2 font-bold">01</span>
          <h2 className="text-p-white text-l barlow inline">
            PICK YOUR DESTINATION
          </h2>
          <MoonImage title={currentInfo.title} />
          <DesOptions handleChange={handleChange} title={currentInfo.title} />
          <DesContent content={currentInfo.content} title={currentInfo.title} />
          <hr className="w-full h-1 text-white my-8" />
          <TravelInfo AvgDistance={currentInfo.AvgDistance} EstTravelTime={currentInfo.EstTravelTime} />
        </div>
  )
}

export default DesPage