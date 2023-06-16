const TechContent = ({
  current,
  changeCurrentInfo
}: {
  current: { tech: string; text: string; portrait: string; landscape: string },
  changeCurrentInfo: (index: number) => void,

}) => {
  return (
    <div className="h-full w-full my-5 flex flex-col content__center">
      <div className="w-full h-full flex content__center">
        <span onClick={() => changeCurrentInfo(0)} className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          1
        </span>
        <span onClick={() => changeCurrentInfo(1)} className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          2
        </span>
        <span onClick={() => changeCurrentInfo(2)} className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          3
        </span>
      </div>
      <div className="flex flex-col content__center my-10">
        <h2 className="text-gray-500">THE TERMINOLOGY...</h2>
        <h1 className="text-yellow-500 text-3xl my-4">{current.tech}</h1>
        <p className="text-p-purple barlow text-center px-10">
          {current.text}
        </p>
      </div>
    </div>
  );
};

export default TechContent;
