import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Button = ({name}) => {
  const btnRef = useRef()
  let blkButton
  // const btnTl = new gsap.timeline({paused:true,
  //   defaults:{duration:0.3,ease:'Power4.in'},
  // })
  
  const btnOnHover = () => {
    console.log('hover')
    btnTl.play(0)
  }
  return (
    <div >

    <div ref={btnRef} className="btn-black-pd" >
    <div    className="btn-black" >
      <div className="grid">
        <div className="round-right-arrow">
          {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
            <line fill="none" stroke="#ed7036" stroke-width="2" stroke-miterlimit="11" x1="26" y1="16" x2="8" y2="16" />
            <polyline fill="none" stroke="#ed7036" stroke-width="2" stroke-miterlimit="10" points="18,7.5 26.5,16 18,24.5 " />
          </svg> */}
        </div>
        <p className="semi-bold btn-text" >{name}</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Button