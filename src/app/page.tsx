import { ContentHome, Explore } from '@/components'


export default function Home() {
  return (
    <main className='flex flex-col mt-12 desktop:flex-row desktop:justify-between desktop:px-40 desktop:items-center  tablet:mt-2 tablet:justify-evenly justify-evenly grow  '>
      <ContentHome/>
      <Explore/>
    </main>
  )
}
