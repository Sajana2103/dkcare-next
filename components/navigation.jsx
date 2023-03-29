import React, { useEffect, useRef, useState } from "react";
import { useThrottledCallback } from "use-debounce";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";


const Navigation = ({ skipHeroDesktop, pageName }) => {

  const [path, setPath] = useState('/')
  const navRef = useRef()
  const menuRef = useRef()
  const iconRef = useRef()
  const imgRef = useRef()
  let open = false
  let menuTl
  let pathRef = useRef()

  useEffect(() => {
    if (navRef.current) {
      setPath(window.location.pathname)
console.log(imgRef)
    }
  }, [path])

  const openMenu = () => {
    console.log(iconRef.current)

    let isDesktop = window.devicePixelRatio < 2

    console.log('menu location', pathRef.current)
    if (!menuTl) {

      menuTl = gsap.timeline({ defaults: { duration: 0.6, ease: 'Power4.easeIn' } })
      console.log('navigation runs')
      if (isDesktop) {
        console.log('desktop menu')

        menuTl
          .pause()

          .fromTo(menuRef.current, { display: 'none' }, { display: 'block', duration: 0 })
          .fromTo('#scroll-skip', { display: path === '/' && pageName.location === 'hero' 
          && isDesktop ? 'flex' : 'none',opacity:1 }, { display: 'none',opacity:0 }, '<')
          .fromTo('#menu-logo', { yPercent: -100 }, { yPercent: 0 }, '<')
          .to('#st1', { duration: 1, rotation: 45, transformOrigin: "40% 0px" }, '<')
          .to('#st2', { duration: 1, rotation: -45, yPercent: -50, transformOrigin: "40%  0px" }, '<')
          .fromTo('#menu-links', { yPercent: 100 }, { yPercent: 0 })
          .to('.menu-text', { color: 'white' }, '<')
          .to('#st1', { stroke: 'white' }, '<')
          .to('#st2', { stroke: 'white' }, '<')
          .fromTo('#menu-contact', { yPercent: -100 }, { yPercent: 0 })



      } else {
        console.log('mobile menu')
        menuTl
          .pause()
          .fromTo(menuRef.current, { display: 'none' }, { display: 'block', duration: 0 })
          .fromTo(menuRef.current, { yPercent: 100 }, { yPercent: 0 })
          .fromTo('#scroll-skip-mobile', { display: path === '/' && pageName.location === 'hero' 
          && !isDesktop ? 'flex' : 'none' }, { display: 'none' }, '<')
          .set(imgRef.current, { attr: { src: '/logo-white.png' } })
          .to('#st1', { duration: 1, rotation: 45, transformOrigin: "40% 0px" }, '<')
          .to('#st2', { duration: 1, rotation: -45, yPercent: -50, transformOrigin: "40%  0px" }, '<')
          .to('#st1', { stroke: 'white' }, '<')
          .to('#st2', { stroke: 'white' }, '<')
          .to('.menu-text', { color: 'white' }, '<')

          .fromTo('#menu-links', { opacity: 0 }, { opacity: 1 })
          .fromTo('#menu-contact', { opacity: 0 }, { opacity: 1 })

      }

    }

    if (open === false) {
      menuTl.play(0)
      open = true
      console.log('menu open', open)
    }
    else {
      menuTl.reverse()
      open = false
      console.log('menu open', open)
    }
  }
  const throttledClick = useThrottledCallback(openMenu, 1000, { trailing: false })
  return (
    <div ref={navRef}>
      <div className="navigation-main blue">

        <Link style={{pointerEvents:path==='/'?'none':''}} target="_self" href="/">
          <Image ref={imgRef} width={300} height={200} alt="Dk Care LLC Logo" id="logo" src="/logo.png" />
          {/* <Image width={300} height={200} alt="Dk Care LLC Logo" id="logo-white" src="/logo-white.png" /> */}

          </Link>
        <div onClick={throttledClick} className="menu-icon " >
          {/* <Image ref={iconRef} width={300} height={200} alt="Dk Care LLC Logo" 
          id="menuicon" className="icons" src="/icons/menuicon-01.svg" /> */}
          <svg version="1.1" id="svg-menuicon" x="0px"
            y="0px" viewBox="0 0 74.5 57.3" >

            <line id="st1" className="st0" x1="-0.8" y1="24.2" x2="74.2" y2="24.2" />
            <line id="st2" className="st0" x1="74.2" y1="33.2" x2="-0.8" y2="33.2" />
          </svg>

          <h3 className="menu-text">
            Menu
          </h3>
        </div>
        {
          path === '/' && pageName && pageName.location==='hero' ?
            <div className='' id="scroll-skip-mobile" >

              <h3 className="orange  skip"
                onClick={() => {
                  skipHeroDesktop()
                }}> Skip Intro</h3>
            </div>
            : <></>
        }


      </div>
      <div ref={menuRef} id="menu" className="">
        <div id="menu-container" >
          <div id="menu-logo">
          </div>

          <div id="menu-links">
            <div id="menu-items" >

              <Link className={path === '/' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/">
                <h2  ><span>_</span>Home</h2>
              </Link>

              <Link className={path === '/expertise' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/expertise">
                <h2><span>_</span>Expertise</h2>
              </Link>
              <Link className={path === '/services' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/services">
                <h2   ><span>_</span>Services</h2>
              </Link>
              <Link className={path === '/technologies' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/technologies">
                <h2 className=""><span>_</span>Technologies</h2>
              </Link>
              <Link className={path === '/howitworks' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/how-it-works">
                <h2 className=""><span>_</span>How It Works</h2>
              </Link>
              <Link className={path === '/company' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/company">
                <h2 className=""><span>_</span>Company</h2>
              </Link>
            </div>
          </div>

          <div id="menu-contact">

            <div id="contact-numbers" >
              <div className="contact-number">
                <h2 className="white semi-bold text-xlarge tc">Dispatch Number</h2>
                <div className="number">
                  <h3 className="black bold text-xlarge">
                    845-705-9741
                  </h3></div>

              </div>
              <div className="contact-number">
                <h2 className="white semi-bold text-xlarge tc">Office Number</h2>
                <div className="number">
                  <h3 className="black bold text-xlarge">
                    845-214-0212
                  </h3></div>

              </div>

            </div>

            <div id="menu-other-links">
              <div id="links-faq" className=" ">

                <h2 className="text-xlarge">FAQ</h2>
                <h2 className="text-xlarge">Careers</h2>
                <h2 className="text-xlarge">Contact</h2>
              </div>
              <div id='menu-privacy' className=" ">

                <p className="">Privacy Policy & Cookies</p>
                <p className="">Terms & Conditions</p>
              </div>
              <div className="madeBy">
                <p className="text-med">
                  Made by XYZ
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navigation