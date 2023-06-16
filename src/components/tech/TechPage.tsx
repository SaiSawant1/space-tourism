'use client';
import React from "react";
import TechImage from "./TechImage";
import TechContent from "./TechContent";
import { TechInfo } from "../../../constant/desInfo";
const TechPage = () => {
    const [currentInfo, setCurrentInfo] = React.useState(TechInfo[0]);
    const changeCurrentInfo = (index:number) => {
        setCurrentInfo(TechInfo[index]);
    }
  return (
    <div className="flex flex-col w-full h-full desktop:flex-row-reverse desktop:pl-12 desktop:justify-between">
      <TechImage  current={currentInfo} />
      <TechContent changeCurrentInfo={changeCurrentInfo} current={currentInfo} />
    </div>
  );
};

export default TechPage;
