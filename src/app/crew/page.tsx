import { Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full desktop:h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-crew-m layout_crew-tablet layout_crew-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-6 tablet:justify-evenly grow">
        <div className="flex content__center">
          <span className="text-slate-700 mx-3  text-xl font-bold">02</span>
          <h2 className="text-p-white text-lg barlow inline">MEET YOUR CREW</h2>
        </div>
        <div className="flex content__center mt-6">
          <Image alt="crew" src='/crew/image-douglas-hurley.png' width={177} height={222} />
        </div>
        <hr className="w-full h-1 text-white" />
        <div className="flex flex-col content__center my-9">
          <div className="flex content__center">
            <span className="h-4 w-4 rounded-[50%] mx-3 bg-slate-500"></span>
            <span className="h-4 w-4 rounded-[50%] mx-3 bg-slate-500"></span>
            <span className="h-4 w-4 rounded-[50%] mx-3 bg-slate-500"></span>
            <span className="h-4 w-4 rounded-[50%] mx-3 bg-slate-500"></span>
          </div>
          <div className="flex content__center flex-col">
            <h2 className="text-gray-800 my-4 font-bold">COMMANDER</h2>
            <h1 className="text-p-white text-2xl">DOUGLAS HURLEY</h1>
            <p className="text-p-purple text-center my-4">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
