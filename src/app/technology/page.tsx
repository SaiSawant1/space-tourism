import { Navbar } from "@/components";


export default function Home() {
  return (
    <div className="w-full h-full desktop:h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-tech-m layout_tech-tablet layout_tech-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6  desktop:flex-col  default:m-0 tablet:mt-12  grow desktop:grow-0">
        <div className="flex content__center tablet:justify-start desktop:justify-start">
          <span className="text-slate-700 mx-3  text-xl font-bold tablet:text-4xl">03</span>
          <h2 className="text-p-white text-lg barlow inline tablet:text-3xl">SPACE LAUNCH 101</h2>
        </div>
      </main>
    </div>
  );
}
