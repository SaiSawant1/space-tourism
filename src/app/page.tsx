import { ContentHome, Explore } from '@/components'


export default function Home() {
  return (
    <main className='flex flex-col mt-12 tablet:mt-20 tablet:justify-evenly justify-between grow  '>
      <ContentHome/>
      <Explore/>
    </main>
  )
}
