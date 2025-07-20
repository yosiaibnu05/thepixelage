'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.section-footer',
            start: 'bottom bottom',
            end: '+=700',
            pin: true,
            scrub: true,
          },
        })
    

        // ------ Video Animation ------
        // The Tricky part, is to make the video scale and fade in
        tl.fromTo(
          '.section-footer .video-wrapper',
          {
            y: 400,
            scale: 0,
            opacity: 0.5,
          },
          {
            y: 0,
            scale: 0.5,
            opacity: 1,
            duration: 5.5,
            ease: 'circ.out',
          }
        )
    
        // ------ Footer Text Animation ------
        tl.fromTo(
          '.section-footer .footer-text',
          {
            y: 200,
            opacity: 0.4,
          },
          {
            y: 0,
            opacity: 1,
            duration: 5.5,
            ease: 'circ.out',
          },
          '<' // same time as the previous animation
        )
       
        // ------ Scale Video to Full Size ------
        tl.to(
          '.section-footer .video-wrapper',
          {
            scale: 1,
            duration: 5.5,
            ease: 'circ.out',
          },  
        )
        
      })
    
      // Cleanup function to revert the context
      return () => ctx.revert()
    }, [])
  

  return (
    <section className="section-footer ">
        <div className="footer-inner">
            <div className="video-wrapper">
                <video preload="auto" muted autoPlay loop playsInline>
                    <source src="/assets/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
            </div>
            <div className="footer-text-wrapper">
                <div className="footer-text d-flex flex-column align-items-center justify-content-center mt-5 text-wrapper">
                    <h2>
                        Celebrate <span className="text-bold">With Us</span>
                    </h2>
                    <a href="#" className="btn btn-theme shape-appearance light">
                        <i className="shape" />
                        Watch Our Celebration
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
