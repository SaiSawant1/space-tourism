import { ContentHome, Explore } from '@/components'


export default function Home() {
  return (
    <main className='flex flex-col mt-12 desktop:flex-row desktop:justify-evenly desktop:items-center default:m-0 tablet:mt-20 tablet:justify-evenly justify-evenly grow  '>
      <ContentHome/>
      <Explore/>
    </main>
  )
}
