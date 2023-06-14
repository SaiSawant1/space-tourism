import React from "react";

const DesOptions = ({handleChange}:{handleChange: (index: number) => void}) => {
  return (
    <div className="flex w-full ">
      <ul className="flex w-full text-sm justify-between text-white items-center px-6">
        <li onClick={()=>handleChange(0)} className="barlow">MOON</li>
        <li onClick={()=>handleChange(1)} className="barlow">MARS</li>
        <li onClick={()=>handleChange(2)} className="barlow">EUROPA</li>
        <li onClick={()=>handleChange(3)} className="barlow">TITAN</li>
      </ul>
    </div>
  );
};

export default DesOptions;
