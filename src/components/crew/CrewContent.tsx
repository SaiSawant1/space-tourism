import React from "react";

interface Crew {
    designation: string;
    name: string;
    image: string;
    text: string;
}
const CrewContent = ({crew}:{crew :Crew}) => {
  return (
    <div className="flex content__center flex-col tablet:px-36">
      <h2 className="text-gray-400 my-4 text-lg font-bold tablet:text-3xl">{crew.designation}</h2>
      <h1 className="text-p-white text-2xl tablet:text-5xl">{crew.name}</h1>
      <p className="text-p-purple barlow text-center my-4 tablet:text-2xl">
        {crew.text}
      </p>
    </div>
  );
};

export default CrewContent;
