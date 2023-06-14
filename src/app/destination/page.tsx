import { Navbar } from "@/components";
import DesPage from "@/components/destination/DesPage";

export default function Home() {
  return (
    <div className="w-full h-full desktop:h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-des-m layout_des-tablet layout_des-desktop ">
      <Navbar />
      <main className="flex flex-col mt-6 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-6 tablet:justify-evenly grow">
        <DesPage/>
      </main>
    </div>
  );
}
