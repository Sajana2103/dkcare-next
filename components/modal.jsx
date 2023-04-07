import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PressRelease from "./moda-content/press-release";
import ExpertiseComponent from "./pages/expertise/expertise-component";
import Contact from "./pages/contact";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { SplitText } from 'gsap/dist/SplitText';

import ServicesComponent from "./pages/services/services-component";


const Modal = ({ modalOpen, pageName, openModal, setModalOpen }) => {
  const modalRef = useRef()
  const modalWrapperRef = useRef()
  const modalTl = useRef()
  let splitTextTl = useRef()
  let splitText = useRef()

  function kill(){
    if(splitText.current){

      splitTextTl.current.clear().time(0);
      splitText.current.revert();
    }
  }

  function setupSplits(isOpen) {
    let modal = document.querySelector('#modal-content')
    let quotes = modal.querySelectorAll('.split-text')
    let lineWrapper = modal.querySelectorAll('.bd-line-wrapper')
    let lines = modal.querySelectorAll('.bd-line')
    console.log(quotes,'Modal quotes')
    quotes.forEach(quote => {
      splitTextTl.current = gsap.timeline()
      splitText.current = new SplitText(quote,{type:'words'})
    })
    quotes.forEach(quote => {
      // kill()
      splitText.current.split({type:'lines,words', linesClass: "split-line"})
      console.log(splitText)
      splitTextTl.current.from(splitText.current.words, {
        scrollTrigger: {
          scroller:modal,
          trigger: quote,
          toggleActions: "restart reset resume reverse",
          start: "top 75%",
        },
        duration: 0.6,
        ease: "circ.out",
        y: 150,
        stagger: 0.1,
      });
    }) 
    if(lineWrapper){
      lineWrapper.forEach((line,idx) =>{
       let currentIdx = idx*2
          gsap.from(lines[currentIdx], {
            scaleX: 0,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              scroller:modal,
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
              scroller:modal,
              trigger: lineWrapper[idx],
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });
        
      })
    }   
    // quotes.forEach(quote => {
    //   // Reset if needed
    //   console.log(quote)
    //   if (quote.anim) {
    //     console.log(quote.anim,pageName.pageName)
    //     // return
    //     quote.scrollTrigger.revert()
    //     quote.revert();
    //     // quote.anim.progress(1).kill();
    //   } 

    //     quote = new SplitText(quote, {
    //       type: "lines,words",
    //       linesClass: "split-line"
    //     });
    //     // Set up the anim
    //     quote.anim = gsap.from(quote.split.words, {
    //       scrollTrigger: {
    //         scroller:modal,
    //         trigger: quote,
    //         toggleActions: "restart reset resume reverse",
    //         start: "top 75%",
    //       },
    //       duration: 0.6,
    //       ease: "circ.out",
    //       y: 150,
    //       stagger: 0.1,
    //     });
      
      
    // });
  }
  useEffect(() => {
    if(modalWrapperRef.current){
      gsap.registerPlugin(ScrollTrigger,SplitText,ScrollToPlugin)
      modalRef.current = document.querySelector('#modal-content')
      if(modalOpen ){
        setupSplits()
        console.log('modal open modalcomp',modalRef.current)
      } else{
        console.log('modal open modalcomp',modalOpen)
      }
    }
  },[modalOpen,pageName.pageName])
  if (!modalTl.current && modalOpen) {
    modalTl.current = gsap.timeline({ defaults: { duration: 0.4, ease: 'Power4.easeIn' } })
    modalTl.current
    .pause()
    .fromTo('#portal', { display: 'none' }, { display: 'block', duration: 0 })
    .fromTo('.modal-wrapper', { opacity: 0 }, { opacity: 1 })
  }
  if (!modalOpen && modalTl.current) {
    modalTl.current.reverse()
    // return null
  } else if (modalOpen && modalTl.current) {

    modalTl.current.play(0)
    gsap.to(modalRef.current,{scrollTo:0})
  }

  let page
  switch (pageName.pageName) {
    case 'press-release':
      page = <PressRelease />
      break;
    case 'contact':
      page = <ExpertiseComponent />
      break;
    case 'services':
      page = <ServicesComponent />
      break;
    default: <div></div>
  }
  console.log(page, modalOpen)
  return ReactDOM.createPortal(
    <div ref={modalWrapperRef} className="modal-wrapper" id="modal-black-area" onClick={(e) => {
      console.log('Modal component pagename: ', e)
      if (e.target.id === 'modal-black-area') {

        if (pageName.location === 'home') openModal()
        else setModalOpen(false)
      }
    }}>
      <div className="modal-container">

        <div ref={modalRef} className="modal" id="modal-content">

          {page}
        </div>
      </div>
    </div>
    , document.getElementById('portal'))
}
export default Modal