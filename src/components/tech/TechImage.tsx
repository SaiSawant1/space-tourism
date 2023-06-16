import Image from "next/image";
import React from "react";

const TechImage = ({
  current,
}: {
  current: { tech: string; text: string; portrait: string; landscape: string },
  
}) => {
  return (
    <div className="w-full my-6">
      <Image
        src={current.landscape}
        alt="launch vehicle"
        width={375}
        height={170}
        className="object-contain w-full"
      />
    </div>
  );
};

export default TechImage;
