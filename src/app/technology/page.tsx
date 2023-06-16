import { Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen desktop:h-screen flex flex-col  bg-no-repeat bg-cover bg-background-tech-m layout_tech-tablet layout_tech-desktop ">
      <div className="p-6">
        <Navbar />
      </div>
      <main className="flex flex-col mt-6  desktop:flex-col  default:m-0 tablet:mt-12  grow desktop:grow-0">
        <div className="flex content__center tablet:justify-start desktop:justify-start">
          <span className="text-slate-700 mx-3  text-xl font-bold tablet:text-4xl">
            03
          </span>
          <h2 className="text-p-white text-lg barlow inline tablet:text-3xl">
            SPACE LAUNCH 101
          </h2>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="w-full my-6">
            <Image
              src="/technology/image-launch-vehicle-landscape.jpg"
              alt="launch vehicle"
              width={375}
              height={170}
              className="object-contain w-full"
            />
          </div>
          <div className="h-full w-full flex flex-col content__center">
            <div className="w-full h-full flex content__center">
              <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">1</span>
              <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">2</span>
              <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">3</span>
              <span className="w-10 h-10 mx-3 flex content__center border-gray-400 border-2 text-white rounded-[50%]">4</span>
            </div>
            <div className="flex flex-col content__center  placeholder-cyan-700">
              <h2 className="text-gray-500">THE TERMINOLOGY...</h2>
              <h1 className="text-yellow-500 text-3xl my-4">
              LAUNCH VEHICLE
              </h1>
              <p className="text-p-purple barlow text-center px-7">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
