'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Photos() {
    
useEffect(() => {

    gsap.to("body", {
        backgroundColor: "#889fb5", // warna saat berubah
        duration: 1,
        scrollTrigger: {
          trigger: ".section-photos",
          start: "bottom bottom", // saat bagian bawah section menyentuh bagian bawah viewport
          end: "bottom+=100 top", // scroll 100px setelah keluar viewport
          scrub: true, // transisi halus
        },
      });

}
, []); // Dependency array to run effect only once

  return (
    <section className="section-photos">
      <div className="container-fluid">
          <div className="d-flex justify-content-start flex-column photo-wrapper">
                <div className="photo-item">
                    <img src="/assets/img/519x788.jpg" height="600px" alt="Photo 1" />
                </div>
                <div className="photo-item ">
                    <img src="/assets/img/816x459.jpg" height="300px" alt="Photo 1" />
                </div>
                <div className="photo-item">
                    <img src="/assets/img/708x531.jpg" height="300px" alt="Photo 1" />
                </div>
                <div className="photo-item">
                    <img src="/assets/img/526x788.jpg" height="600px" alt="Photo 1" />
                </div>
            </div>
      </div>
    </section>
  )
}
