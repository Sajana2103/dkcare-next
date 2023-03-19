import React, { useEffect,useRef } from "react";
import { useThrottledCallback } from "use-debounce";
import gsap from "gsap";
import Link from "next/link";

const Navigation = () => {
  const menuRef = useRef()
  let open = false
  let menuTl 
 
 
  
  useEffect(() => {
    if(menuRef.current){
      
    }
  },[menuRef.current])

  const openMenu = () => {
console.log(menuTl)
    if(!menuTl){

      menuTl = gsap.timeline({defaults:{duration:0.5,ease:'Power2.in'}})
      console.log('navigation runs')
        menuTl
        .pause()
        .fromTo(menuRef.current,{display:'none'},{display:'block'})
        .fromTo(menuRef.current,{xPercent:-100},{xPercent:0})
        .to('.menu-text',{color:'white'},'<')
    
    }
   
    if(open === false){
      menuTl.play(0)
      open = true
      console.log('menu open',open)
    }
    else {
      menuTl.reverse()
      open = false
      console.log('menu open',open)
    }
  }
  const throttledClick = useThrottledCallback(openMenu,1000,{trailing:false})
  return(
    <div>
      <div className="navigation-main blue">

        <div><img id="logo" src="logo.png"/></div>
      <div onClick={throttledClick} className="menu-icon" ><img className="icons" src="menu.png"/>
      <h3 className="menu-text">
        Menu
        </h3>
        </div>
        <div className="empty"></div>
      <div>&</div>
      </div>
    <div ref={menuRef} id="menu" className="blue-gr2">
      <div id="menu-container" >
        <div className="menu-items " >

        <Link  target="_blank" href="/expertise">
        <h2 className="">Expertise</h2>
        </Link>
        <h2 className="">Menu Item</h2>
        <h2 className="">Menu Item</h2>
        <h2 className="">Menu Item</h2>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navigation