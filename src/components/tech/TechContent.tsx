

const TechContent = () => {
  return (
    <div className="h-full w-full my-5 flex flex-col content__center">
      <div className="w-full h-full flex content__center">
        <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          1
        </span>
        <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          2
        </span>
        <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          3
        </span>
        <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">
          4
        </span>
      </div>
      <div className="flex flex-col content__center my-10">
        <h2 className="text-gray-500">THE TERMINOLOGY...</h2>
        <h1 className="text-yellow-500 text-3xl my-4">LAUNCH VEHICLE</h1>
        <p className="text-p-purple barlow text-center px-10">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth&apos;s surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it&apos;s quite an awe-inspiring sight
          on the launch.
        </p>
      </div>
    </div>
  );
};

export default TechContent;
