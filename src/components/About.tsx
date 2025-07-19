'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    
useEffect(() => {
    const textItems = document.querySelectorAll('.section-about .text-wrapper > *')

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
                once: true, // supaya cuma sekali jalan
            }
        }
    )


    ScrollTrigger.create({
        trigger: '.section-about',
        start: 'center center',
        endTrigger: '.section-milestone',
        end: 'center center',
        pin: '.section-about .text-wrapper',
    });
      
      // GSAP: Text slide animation on scroll
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

      // GSAP: Shape fade-in on scroll
      gsap.fromTo(
        '.shape-appearance',
        {
          opacity: 0,
          visibility: 'hidden',
        },
        {
          opacity: 1,
          visibility: 'visible',
          duration: .5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-milestone',
            start: 'top center',
            end: 'top center',
            scrub: true,
          },
        }
      );

}
, []); 

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
