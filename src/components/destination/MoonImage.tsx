import Image from "next/image";
import { FC } from "react";
import { Suspense } from "react";
import ImageSkeleton from "../ImageSkeleton";
const MoonImage = ({ title }: { title: string }) => {
  return (
    <div className="flex desktop:self-center content__center my-7 w-full desktop:h-full ">
      <Suspense fallback={<ImageSkeleton/>}>
        <Image
          src={`/destination/image-${title.toLowerCase()}.png`}
          className=" object-contain w-[170px] h-[170px] tablet:h-[400px]  tablet:w-[400px] desktop:w-[400px] desktop:h-[400px] "
          alt="journey"
          width={170}
          height={170}
        />
      </Suspense>
    </div>
  );
};

export default MoonImage;
