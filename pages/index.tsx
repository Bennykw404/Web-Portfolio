import { About } from '@/components/HomepageSections/About'
import Contact from '@/components/HomepageSections/Contact'
import { Hero } from '@/components/HomepageSections/Hero'
import { Project } from '@/components/HomepageSections/Project'
import { Skill } from '@/components/HomepageSections/Skill'
import type { NextPage } from 'next'
import { AppLayout } from '../src/layouts/AppLayout'

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </AppLayout>
  )
}

export default Home
