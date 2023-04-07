import React, { useEffect, useRef, useState } from "react";
import Evolution from "./evolution.jsx";
import Expertise from "./expertise.jsx";
import Covid from "./covid.jsx";
import Services from "./services.jsx";
import Stories from "./stories.jsx";
import Technologies from "./technologies.jsx";
import Footer from "./footer.jsx";
import { useThrottledCallback } from "use-debounce";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import gsap from "gsap";

const HomePage = ({ size, setPageName, openModal, backToHeroDesktop, backToHero }) => {
  // console.log('GSAP at Home',gsap)
  let scrollSmooth = ScrollSmoother.get()
  const [homeLoaded, setHomeLoaded] = useState(false)
  const [pixelRatio, setPixelRatio] = useState(1)
  const homeRef = useRef()
  let homepageH = useRef()

  function setupSplits() {
    let quotes = document.querySelectorAll('.split-text')
    let lineWrapper = document.querySelectorAll('.bd-line-wrapper')
    let lines = document.querySelectorAll('.bd-line')
    console.log('split text',quotes)
    if(lineWrapper){
      lineWrapper.forEach((line,idx) =>{
       let currentIdx = idx*2
          gsap.from(lines[currentIdx], {
            scaleX: 0,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });
          gsap.from(lines[currentIdx+1], {
            scaleX: 0,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });
        
      })
    }   
    quotes.forEach(quote => {
      console.log('split text',quote)

      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }
      quote.split = new SplitText(quote, {
        type: "lines,words",
        linesClass: "split-line"
      });
      // Set up the anim
      quote.anim = gsap.from(quote.split.words, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "restart pause resume reverse",
          start: "top 70%",
        },
        duration: 0.6,
        ease: "circ.out",
        y: 150,
        stagger: 0.1,
      });
    });
  }
  const checkPosition = () => {
    if (homepageH.current !== 0 && !homeLoaded) {
      setTimeout(() => {
        setHomeLoaded(true)
        setPageName({ pageName: 'back-hero', location: 'home' })
      }, 1000);
    }
  }
  const posHandler = useThrottledCallback(checkPosition, 500)
  useEffect(() => {
    if (homeRef.current) {
      gsap.registerPlugin(ScrollTrigger,SplitText)

      setupSplits() 
      homepageH.current = document.querySelector('#homepage')
      setPixelRatio(window.devicePixelRatio)
      window.addEventListener('scroll', posHandler)

    }
  }, [homeLoaded])
  return (

    <div ref={homeRef} id="homepage"  >

      {
        pixelRatio < 2 &&
        <div id="anchors">
          <div id="anchors-con" className="flex wrap  bold blue">

            <span className="a-tags-home" onClick={() => {scrollSmooth.scrollTo('#expertise',0.2,'top -150px')}} >Expertise</span>
            <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#services',0.2,'top -150px')}}>Services</span>
            <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#technologies',0.2,'top -20px')}}>Technologies</span>
            <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#evolution',0.2,'top top')}}>Evolution</span>
            <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#customers',0.2,'top top')}}>Customers</span>
            <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#covid',0.2,'top top')}}>Covid</span>
            {/* <span className="a-tags-home"  onClick={() => {scrollSmooth.scrollTo('#footer',3,'top top')}}>Footer</span> */}
          </div>
        </div>
      }



      <div className="smooth-content" >

        <div className="main-section" id="back-hero" onClick={backToHeroDesktop}>
          <h2 className='cen' >
            Click to get back or scroll down for more.
          </h2>
        </div>


        <Expertise setPageName={setPageName} openModal={openModal} />
        <Services setPageName={setPageName} openModal={openModal} />
        <Technologies />
        <Evolution size={size} home={homeRef} homeLoaded={homeLoaded} />
        <Stories />
        <Covid />
        <Footer setPageName={setPageName} openModal={openModal} />
      </div>

    </div>

  )
}
export default HomePage