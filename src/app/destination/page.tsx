import { Navbar } from "@/components";
import DesContent from "@/components/destination/DesContent";
import DesOptions from "@/components/destination/DesOptions";
import MoonImage from "@/components/destination/MoonImage";
import H1 from "@/utils/H1";
import H5 from "@/utils/H5";
import Image from "next/image";
import TravelInfo from "./TravelInfo";

export default function Home() {
  return (
    <div className="w-full h-full  flex flex-col p-6 bg-no-repeat bg-cover bg-background-des-m layout_des-tablet layout_des-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-20 tablet:justify-evenly grow  ">
        <div className="w-full text-center  tracking-widest">
          <span className="text-slate-700 text-xl mx-2 font-bold">01</span>
          <h2 className="text-p-white text-l barlow inline">
            PICK YOUR DESTINATION
          </h2>
          <MoonImage />
          <DesOptions />
          <DesContent />
          <hr className="w-full h-1 text-white my-8" />
          <TravelInfo />
        </div>
      </main>
    </div>
  );
}
