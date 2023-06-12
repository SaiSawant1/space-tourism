import { ContentHome, Explore } from '@/components'


export default function Home() {
  return (
    <main className='flex flex-col mt-12 tablet:mt-24  justify-between grow  '>
      <ContentHome/>
      <Explore/>
    </main>
  )
}
