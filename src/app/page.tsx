import { ContentHome, Explore } from '@/components'


export default function Home() {
  return (
    <main className='flex flex-col justify-between grow '>
      <ContentHome/>
      <Explore/>
    </main>
  )
}
