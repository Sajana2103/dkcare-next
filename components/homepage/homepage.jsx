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

const HomePage = ({ size,setPageName,openModal,backToHeroDesktop,backToHero }) => {

  const [homeLoaded, setHomeLoaded] = useState(false)
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
      let expertiseA = document.querySelector('#expertise-anchor')
      atags = document.querySelectorAll('.a-tags')
      for (let a = 0; a < atags.length; a++) {
        let hash = atags[a].hash
        scrollNames.push(hash)
        let ele = document.querySelector(hash).getBoundingClientRect().top
        scrollPositions.push(ele)
        let item = { name: hash, position: ele }
        scrollItems.push(item)
      }
      // scrollItems.push({ name: 'bottom', bodyHeight })
      window.addEventListener('scroll', posHandler)

      
    }
  }, [homeLoaded])

  return (
    
    <div ref={homeRef} id="homepage"  >
      
        
      <div id="anchors">
        <div className="flex wrap  bold blue" style={{ gap: '0.2rem' }} >

          <a className="a-tags" href="#expertise-anchor" >Expertise</a>
          <a className="a-tags" href="#services-anchor">Services</a>
          <a className="a-tags" href="#technologies-anchor" >Technologies</a>
          <a className="a-tags" href="#evolution-anchor">Evolution</a>
          <a className="a-tags" href="#customers-anchor">Customers</a>
          <a className="a-tags" href="#covid-anchor">Covid</a>
          <a className="a-tags" href="#footer-anchor">Footer</a>
        </div>
      </div> : <></>
      
    
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
      <Footer setPageName={setPageName} openModal={openModal}/>
      </div>
      </div>
    
  )
}
export default HomePage