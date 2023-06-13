import {  Navbar } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-screen -z-10 flex flex-col p-6 bg-no-repeat bg-cover bg-background-des-m layout_des-tablet layout_des-desktop ">
      <Navbar />
      <main className="flex flex-col mt-12 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-20 tablet:justify-evenly justify-evenly grow  ">
        
      </main>
    </div>
  );
}
