'use client'
import React from "react";
import CrewImage from "./CrewImage";
import CrewOptions from "./CrewOptions";
import CrewContent from "./CrewContent";
import { CrewInfo } from "../../../constant/desInfo";

const CrewPage = () => {
    const crewArray= CrewInfo
    const [currentMember, setCurrentMember] = React.useState(crewArray[0]);
    const changeMember = (index: number) => {
        setCurrentMember(crewArray[index]);
    }
    return (
    <div className="flex flex-col tablet:flex-col-reverse tablet:h-full desktop:flex-row-reverse desktop:h-fit desktop:gap-36 desktop:px-24">
      <CrewImage image={currentMember.image} />
      <hr className="w-full h-1 text-white tablet:hidden" />
      <div className="flex flex-col content__center my-9  desktop:h-full desktop:justify-between desktop:my-auto desktop:w-1/2 ">
        <CrewOptions changeMember={changeMember} designation={currentMember.designation} />
        <CrewContent crew={currentMember} />
      </div>
    </div>
  );
};

export default CrewPage;
