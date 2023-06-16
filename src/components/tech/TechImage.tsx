import Image from "next/image";
import React from "react";

const TechImage = ({
  current,
}: {
  current: { tech: string; text: string; portrait: string; landscape: string },
  
}) => {
  return (
    <div className="w-full my-6 desktop:flex desktop:justify-end desktop:items-start">
      <Image
        src={current.landscape}
        alt="launch vehicle"
        width={375}
        height={170}
        className="object-contain desktop:hidden w-full tablet:w-full tablet:h-[310px]"
      />
      <Image
        src={current.portrait}
        alt="launch vehicle"
        width={515}
        height={527}
        className="object-contain  hidden desktop:block "
      />
    </div>
  );
};

export default TechImage;
