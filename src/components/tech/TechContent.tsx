const TechContent = ({
  current,
  changeCurrentInfo
}: {
  current: { tech: string; text: string; portrait: string; landscape: string },
  changeCurrentInfo: (index: number) => void,

}) => {
  return (
    <div className="h-full w-full my-5 flex flex-col content__center desktop:flex-row">
      <div className="w-full h-full flex content__center desktop:flex-col">
        <span onClick={() => changeCurrentInfo(0)} className={`w-10 h-10 mx-3 tablet:w-14 tablet:h-14 tablet:text-3xl desktop:my-4 flex content__center border-gray-400 border-2 ${current.tech==="LAUNCH VEHICLE"?"bg-p-white text-black": "text-white"}  rounded-[50%]`}>
          1
        </span>
        <span onClick={() => changeCurrentInfo(1)} className={`w-10 h-10 mx-3 tablet:w-14 tablet:h-14 tablet:text-3xl desktop:my-4 flex content__center border-gray-400 border-2 ${current.tech==="SPACEPORT"?"bg-p-white text-black": "text-white"}  rounded-[50%]`}>
          2
        </span>
        <span onClick={() => changeCurrentInfo(2)} className={`w-10 h-10 mx-3 tablet:w-14 tablet:h-14 tablet:text-3xl desktop:my-4 flex content__center border-gray-400 border-2 ${current.tech==="SPACE CAPSULE"?"bg-p-white text-black": "text-white"}  rounded-[50%]`}>
          3
        </span>
      </div>
      <div className="  flex flex-col content__center my-10">
        <h2 className="text-gray-500 tablet:text-3xl">THE TERMINOLOGY...</h2>
        <h1 className="text-yellow-500 text-3xl tablet:text-7xl my-4 desktop:text-5xl ">{current.tech}</h1>
        <p className="text-p-purple barlow text-center px-10 tablet:text-4xl tablet:px-36 desktop:px-16 desktop:text-2xl">
          {current.text}
        </p>
      </div>
    </div>
  );
};

export default TechContent;
