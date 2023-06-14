
import React from "react";

const DesOptions = ({handleChange,title}:{handleChange: (index: number) => void,title:string}) => {

  return (
    <div className="flex w-full ">
      <ul className="flex w-full text-lg tablet:text-2xl justify-between text-white items-center px-6 tablet:px-40">
        <li onClick={()=>handleChange(0)} className="barlow relative">MOON <span className={`absolute w-full h-1 ${title==="MOON"?"block":"hidden"} bg-white left-0 -bottom-5`}></span></li>
        <li onClick={()=>handleChange(1)} className="barlow relative">MARS <span className={`absolute w-full h-1 ${title==="MARS"?"block":"hidden"} bg-white left-0 -bottom-5`}></span></li>
        <li onClick={()=>handleChange(2)} className="barlow relative">EUROPA <span className={`absolute w-full h-1 ${title==="EUROPA"?"block":"hidden"} bg-white left-0 -bottom-5`}></span></li>
        <li onClick={()=>handleChange(3)} className="barlow relative">TITAN <span className={`absolute w-full h-1 ${title==="TITAN"?"block":"hidden"} bg-white left-0 -bottom-5`}></span></li>
      </ul>
    </div>
  );
};

export default DesOptions;
