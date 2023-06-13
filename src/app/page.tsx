import { ContentHome, Explore, Navbar } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-screen  flex flex-col p-6 bg-no-repeat bg-cover bg-background-home-m layout_home-tablet layout_home-desktop">
      <Navbar />
      <main className="flex flex-col mt-12 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-20 tablet:justify-evenly justify-evenly grow  ">
        <ContentHome />
        <Explore />
      </main>
    </div>
  );
}
