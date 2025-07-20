'use client'
import useLenis from '@/hook/useLenis'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Photos from '@/components/Photos'
import Milestone from '@/components/Milestone'
import Footer from '@/components/Footer'

export default function SinglePage() {
  useLenis()

  return (
    <main>
      <Hero />
      <About />
      <Photos />
      <Milestone />
      <Footer />
    </main>
  )
}
