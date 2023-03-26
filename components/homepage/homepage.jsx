import React, { useEffect, useRef, useState } from "react";
import Evolution from "./evolution.jsx";
import Expertise from "./expertise.jsx";
import Covid from "./covid.jsx";
import Services from "./services.jsx";
import Stories from "./stories.jsx";
import Technologies from "./technologies.jsx";
import Footer from "./footer.jsx";
import { useThrottledCallback } from "use-debounce";
import EvolutionCom from "./evolution-component.jsx";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import gsap from "gsap";

const HomePage = ({ size, setPageName, openModal, backToHeroDesktop, backToHero }) => {
  console.log('GSAP at Home',gsap)
  let scrollSmooth = ScrollSmoother.get()
  const [homeLoaded, setHomeLoaded] = useState(false)
  const [pixelRatio, setPixelRatio] = useState(1)
  console.log(scrollSmooth)
  const homeRef = useRef()
  let footer
  let atags
  let scrollPositions = []
  let scrollNames = []
  let scrollItems = [{ name: 'top', position: 0 }]
  // let bodyHeight = document.body.scrollHeight
  let homepageH = 0
  let mainSections = []
  let mainSectionsPositions = []

  const checkPosition = () => {
    if (homepageH !== 0 && !homeLoaded) {
      setTimeout(() => {
        setHomeLoaded(true)
      }, 1000);
    }

    let previous
    let next
    let current
    let name
    let hash
    // for (let p = 1; p < scrollItems.length - 1; p++) {
    //   previous = scrollItems[p - 1].position
    //   next = scrollItems[p + 1].position
    //   current = scrollItems[p].position
    //   if (p > 0 && p < scrollItems.length - 1 && atags[p-1]) hash = atags[p - 1].hash

    //   if (scrollY > current && scrollY < next && scrollY > previous) {
    //     name = scrollItems[p].name
    //   }
    //   if (name === hash) {
    //     atags[p - 1].style.color = '#ed7036'
    //   } else atags[p - 1].style.color = '#1e4d8c'
    // }

  }
  const posHandler = useThrottledCallback(checkPosition, 500)
  useEffect(() => {
    if (homeRef.current) {
      homepageH = document.querySelector('#homepage')
      setPixelRatio(window.devicePixelRatio)
      if (pixelRatio === 1) {

        // atags = document.querySelectorAll('.a-tags')
        // for (let a = 0; a < atags.length; a++) {
        //   let hash = atags[a].hash
        //   scrollNames.push(hash)
        //   let ele = document.querySelector(hash).getBoundingClientRect().top
        //   scrollPositions.push(ele)
        //   let item = { name: hash, position: ele }
        //   scrollItems.push(item)
        // }
      }
      // scrollItems.push({ name: 'bottom', bodyHeight })
      window.addEventListener('scroll', posHandler)


    }
  }, [homeLoaded])
  return (

    <div ref={homeRef} id="homepage"  >

      {
        pixelRatio < 2 &&
        <div id="anchors">
          <div className="flex wrap  bold blue" style={{ gap: '0.2rem' }} >

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
        <Services />
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