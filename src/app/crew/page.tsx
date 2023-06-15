import { Navbar } from "@/components";
import CrewPage from "@/components/crew/CrewPage";
export default function Home() {
  return (
    <div className="w-full h-screen desktop:h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-crew-m layout_crew-tablet layout_crew-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6  desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-12  grow">
        <div className="flex content__center tablet:justify-start">
          <span className="text-slate-700 mx-3  text-xl font-bold tablet:text-4xl">02</span>
          <h2 className="text-p-white text-lg barlow inline tablet:text-3xl">MEET YOUR CREW</h2>
        </div>
        <CrewPage />
      </main>
    </div>
  );
}
