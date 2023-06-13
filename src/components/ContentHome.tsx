import H1 from "@/utils/H1";
import H5 from "@/utils/H5";
import React from "react";

const ContentHome = () => {
  return (
    <div className="tablet:mx-auto w-full tablet:w-[450px] tablet:max-h-80 desktop:m-0 content_wrapper text-center flex flex-col content__center">
      <H5>SO, YOU WANT TO TRAVEL TO</H5>
      <H1>SPACE</H1>
      <p className="text-p-purple barlow font-[15px]">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
};

export default ContentHome;
