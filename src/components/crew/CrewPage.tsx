'use client'
import React from "react";
import CrewImage from "./crewImage";
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
    <>
      <CrewImage image={currentMember.image} />
      <hr className="w-full h-1 text-white" />
      <div className="flex flex-col content__center my-9">
        <CrewOptions changeMember={changeMember} designation={currentMember.designation} />
        <CrewContent crew={currentMember} />
      </div>
    </>
  );
};

export default CrewPage;
