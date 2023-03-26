import React, { useEffect, useRef, useState } from "react";
import  ReactDOM from "react-dom";
import PressRelease from "./moda-content/press-release";
import ExpertiseComponent from "./pages/expertise-component";
import Contact from "./pages/contact";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';


const Modal = ({modalOpen,pageName,openModal,setModalOpen}) => {
  const modalRef = useRef()

  // gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
  //   let smoothScroll = ScrollSmoother.create({
  //     wrapper:'modal-wrapper',
  //     content:'.modal',
  //     smooth:2
  //   })

if(!modalOpen) return null


let page 
switch (pageName.pageName){
  case 'press-release':
    page = <PressRelease/>
    break;
  case 'contact':
    page = <ExpertiseComponent />
    break;
    default : <div></div>
}
console.log(page,modalOpen)
  return ReactDOM.createPortal(
    <div className="modal-wrapper" id="modal-black-area" onClick={(e) => {
      console.log('Modal component pagename: ',e)
      if(e.target.id==='modal-black-area'){

        if(pageName.location==='home')openModal()
        else setModalOpen(false)
      }
    }}>
      <div  ref={modalRef} className="modal ">

      {page}
      </div>
    </div>
  ,document.getElementById('portal'))
}
export default Modal