import React from "react";

const CrewOptions = ({changeMember,designation}:{changeMember:(index: number) => void,designation:string}) => {
  return (
    <div className="flex content__center">
        <span onClick={()=>changeMember(0)} className={`h-4 w-4 rounded-[50%] mx-3 ${designation==="COMMANDER"?"bg-white":"bg-slate-500"}`}></span>
      <span onClick={()=>changeMember(1)} className={`h-4 w-4 rounded-[50%] mx-3 ${designation==="MISSION SPECIALIST"?"bg-white":"bg-slate-500"}`}></span>
      <span onClick={()=>changeMember(2)} className={`h-4 w-4 rounded-[50%] mx-3 ${designation==="PILOT"?"bg-white":"bg-slate-500"}`}></span>
      <span onClick={()=>changeMember(3)} className={`h-4 w-4 rounded-[50%] mx-3 ${designation==="FLIGHT ENGINEER"?"bg-white":"bg-slate-500"}`}></span>
    </div>
  );
};

export default CrewOptions;
