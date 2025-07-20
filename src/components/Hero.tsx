'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react'
import animationDataMobile from '@/assets/animations/lottie-428x450.json'
import animationData from '@/assets/animations/lottie-1366x350.json'

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false) 

  // ------ Split First ------
  const splitWords = (text: string) => {
    return text.split(' ').map((word, idx) => (
      <span key={idx} className="word">
        {word}&nbsp;
      </span>
    ))
  }

  // ------ Check if Mobile Device ------
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // ------ Animation for Hero Section ------
  useEffect(() => {
    const words = gsap.utils.toArray('.word') as HTMLElement[]

    gsap.fromTo(
      words,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.3,
      }
    )

    gsap.to('.text-area', {
      y: -220,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-about',
        start: 'top bottom', 
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
    
  }, [])

  return (
    <section className="section-hero" ref={heroRef}>
        <div className="container-fluid hero-contain " >
            <div className="text-area">
                <div className="text-wrapper">
                    <h1 className="text-bolder">{splitWords('60 YEARS OF')}</h1>
                    <h1 className="main-color">{splitWords('BUILDING ICONS,')}</h1>
                    <h1>{splitWords('SHAPING SKYLINES')}</h1>
                </div>
            </div>
            <div className="lottie-wrapper">
                <Lottie animationData={isMobile ? animationDataMobile : animationData} loop />
            </div>
        </div>
    </section>
  )
}
