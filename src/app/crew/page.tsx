import { Navbar } from "@/components";
import Image from "next/image";
import CrewImage from "@/components/crew/crewImage";
import CrewOptions from "@/components/crew/CrewOptions";
import CrewContent from "@/components/crew/CrewContent";
import CrewPage from "@/components/crew/CrewPage";
export default function Home() {
  return (
    <div className="w-full h-full desktop:h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-crew-m layout_crew-tablet layout_crew-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-6 tablet:justify-evenly grow">
        <div className="flex content__center">
          <span className="text-slate-700 mx-3  text-xl font-bold">02</span>
          <h2 className="text-p-white text-lg barlow inline">MEET YOUR CREW</h2>
        </div>
        <CrewPage />
      </main>
    </div>
  );
}
