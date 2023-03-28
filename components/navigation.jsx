import React, { useEffect, useRef, useState } from "react";
import { useThrottledCallback } from "use-debounce";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [path, setPath] = useState('/')
  const navRef = useRef()
  const menuRef = useRef()

  let open = false
  let menuTl
  let pathRef = useRef()

  useEffect(() => {
    if (navRef.current) {
      setPath(window.location.pathname)
    }
  }, [path])
  const openMenu = () => {

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
          .fromTo('#scroll-skip', { display: 'flex' }, { display: 'none' }, '<')
          .fromTo('#menu-logo', { yPercent: -100 }, { yPercent: 0 }, '<')
          .fromTo('#menu-links', { yPercent: 100 }, { yPercent: 0 })
          .fromTo('#menu-contact', { yPercent: -100 }, { yPercent: 0 })
          .to('.menu-text', { color: 'white' }, '<')

      } else {
        console.log('mobile menu')
        menuTl
          .pause()
          .fromTo(menuRef.current, { display: 'none' }, { display: 'block', duration: 0 })
          .fromTo(menuRef.current, { yPercent: 100 }, { yPercent: 0 })

          .fromTo('#scroll-skip', { display: 'flex' }, { display: 'none' }, '<')
          .fromTo('#menu-links', { opacity: 0 }, { opacity: 1 })
          .fromTo('#menu-contact', { opacity: 0 }, { opacity: 1 })
          .to('.menu-text', { color: 'white' }, '<')
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

        <div><Image width={300} height={200} alt="Dk Care LLC Logo" id="logo" src="/logo.png" /></div>
        <div onClick={throttledClick} className="menu-icon" ><Image width={300} height={200} alt="Dk Care LLC Logo" id="menuicon" className="icons" src="/menu.png" />
          <h3 className="menu-text">
            Menu
          </h3>
        </div>
        <div className="empty"></div>

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
              <Link className={path === '/how-it-works' ? 'disabled' : ''} onClick={throttledClick} target="_blank" href="/how-it-works">
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