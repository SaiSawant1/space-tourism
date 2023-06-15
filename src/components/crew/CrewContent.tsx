import React from "react";

interface Crew {
    designation: string;
    name: string;
    image: string;
    text: string;
}
const CrewContent = ({crew}:{crew :Crew}) => {
  return (
    <div className="flex content__center flex-col">
      <h2 className="text-gray-800 my-4 text-lg font-bold">{crew.designation}</h2>
      <h1 className="text-p-white text-2xl">{crew.name}</h1>
      <p className="text-p-purple barlow text-center my-4">
        {crew.text}
      </p>
    </div>
  );
};

export default CrewContent;
