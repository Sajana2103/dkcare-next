import React, { useEffect, useRef, useState } from "react";
import DesktopContent from "./content-desktop";
import Content from "./content";
import Modal from "./modal";
import HomePage from "./homepage/homepage";
import Navigation from './navigation'
import gsap from "gsap";

const ContentContainer = ({ backToHero,backToHeroDesktop,isLoaded}) => {
  const contentRef = useRef()
  const [pageName, setPageName] = useState({
    location:'hero',
    pageName:'hero-section'
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [size,setSize] = useState({width:0,height:0,pixels:1})
  let isMobile 
  useEffect(() => {
    if(contentRef.current,isLoaded){
      console.log('conent container use effect',size,window.devicePixelRatio)
      isMobile = window.devicePixelRatio > 2
      setSize({width:window.innerWidth,height:window.innerHeight,pixels:window.devicePixelRatio})

    }
  },[contentRef.current,isLoaded])

  const modalTL = gsap.timeline({defaults:{duration:0.5,ease:'Power1.in'}})
const openModal = (page) => {
  if(page === 'home' || pageName.location === 'home'){
    
    
    if(modalOpen === true ){
      console.log('close modal',modalOpen)
      modalTL.fromTo('body',{overflowY:"hidden"}, {overflowY:"scroll"})
      // .fromTo('.modal-wrapper',{opacity:0,xPercent:100},{opacity:1,xPercent:0})
      
      setModalOpen(false)
      
    } else {
      console.log('open modal',modalOpen)
      modalTL.fromTo('body', {overflowY:"scroll"}, {overflowY:"hidden"})
      
      setModalOpen(true)
    }
  }
  else {
    setModalOpen(!modalOpen)
  }
}
console.log('conent container use effect',size,size.width > 1200,isMobile)

  return (
   
      <div ref={contentRef} >
      <Modal pageName={pageName} openModal={openModal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <Navigation />
      

<DesktopContent setPageName={setPageName} setModalOpen={setModalOpen} />
  
      
      {/* {
        size.pixels > 1 ?
        <Content setPageName={setPageName} setModalOpen={setModalOpen}  />
        : <></>
      } */}

      

      <div id="home-content"  >
      
        <HomePage  size={size} setPageName={setPageName} openModal={openModal} backToHero={backToHero} backToHeroDesktop={backToHeroDesktop}/>
      </div>
      
      </div>
  
  )
}

export default ContentContainer