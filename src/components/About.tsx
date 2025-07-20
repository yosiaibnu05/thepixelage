'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    
const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768 
}
  
useEffect(() => {
  if (typeof window === 'undefined') return;

  const mobile = isMobile();

  const textItems = document.querySelectorAll('.section-about .text-wrapper > *');

  gsap.fromTo(
    textItems,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section-about',
        start: 'top 50%',
        toggleActions: 'play none none none',
        once: true,
      }
    }
  );

  if (!mobile) {
      ScrollTrigger.create({
        trigger: '.section-about',
        start: 'center center',
        endTrigger: '.section-milestone',
        end: 'center center',
        pin: '.section-about .text-wrapper',
      }
  );  

    gsap.fromTo(
      '.section-about .text-wrapper',
      {
        xPercent: 0,
      },
      {
        x: -300,
        duration: 5.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-photos',
          start: 'bottom 50%',
          end: 'center center',
          scrub: 2,
          pin: true,
        },
      }
    );
  }

  gsap.fromTo(
    '.shape-appearance',
    {
      opacity: 0,
      ease: 'power3.out',
      duration: 2.5,
    },
    {
      opacity: 1,
      visibility: 'visible',
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section-milestone',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    }
  );
}, []);

  return (
    <section className="section-about d-flex flex-column align-items-center justify-content-center">
        <div className="text-wrapper">
            <span>Honoring Our</span>
            <h1>Heritage,</h1>
            <span>Shaping Our</span>
            <h1>Legacy</h1>
            <a href="" className="btn btn-theme shape-appearance">
                <i className="shape" />
                Trace Our Milestones
            </a>
        </div>
    </section>
  )
}
