import { Navbar } from "@/components";
import TechContent from "@/components/tech/TechContent";
import TechImage from "@/components/tech/TechImage";


export default function Home() {
  return (
    <div className="w-full h-full desktop:h-screen flex flex-col  bg-no-repeat bg-cover bg-background-tech-m layout_tech-tablet layout_tech-desktop ">
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
          <TechImage />
          <TechContent />
        </div>
      </main>
    </div>
  );
}
