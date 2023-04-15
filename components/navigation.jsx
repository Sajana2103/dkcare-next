import React, { useEffect, useRef, useState } from "react";
import { useThrottledCallback } from "use-debounce";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import styles from '../src/styles/Pages.module.css'
import cls from 'classnames'

const Navigation = ({ skipHeroDesktop, pageName }) => {
  const router = useRouter()
  const { pathname } = router
  const [path, setPath] = useState('/')
  const navRef = useRef()
  const menuRef = useRef()
  const iconRef = useRef()
  const imgRef = useRef()
  const splitWords = useRef()
  let open = false
  let menuTl
  let pathRef = useRef()

  useEffect(() => {
    if (navRef.current) {
      gsap.registerPlugin(ScrollTrigger)
      setPath(window.location.pathname)
      splitWords.current = pathname.split('/')
      console.log('split words', pathname, splitWords)
      let wrapper = document.querySelector('.page-content-wrapper') ? document.querySelector('.page-content-wrapper') : document.querySelector('.smooth-content')
      if(wrapper){

        console.log('blue gr2',wrapper)
        wrapper.childNodes.forEach((child) => {
          if(child.classList.contains('blue-gr2')){
            console.log('wrapper children',child.classList.contains('blue-gr2'))
            gsap.to('.st0',{
              scrollTrigger:{
                trigger:child,
                start:'top top',
                toggleActions:'play complete restart reverse'
              },fill:'white',stroke:'white',duration:0.5
            })
            gsap.to('.menu-text1',{
              scrollTrigger:{
                trigger:child,
                start:'top top',
                toggleActions:'play complete restart reverse'
              },color:'white',duration:0.5
            })
          } else {
            console.log('wrapper children',child.classList.contains('blue-gr2'))

            gsap.to('.st0',{
              scrollTrigger:{
                trigger:child,
                start:'top top',
                toggleActions:'play complete restart reverse'
              },fill:'var(--blue)',stroke:'var(--blue)',duration:0.5
            })
            gsap.to('.menu-text1',{
              scrollTrigger:{
                trigger:child,
                start:'top top',
                toggleActions:'play complete restart reverse'
              },color:'var(--blue)',duration:0.5
            })
          }
         
        })
       
      }
    }
  }, [path])
  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
  function replaceHyphens(str) {
    const removed = str.replace(/-/g, ' ');
    return removed
  }
  const openMenu = () => {


    let isDesktop = window.devicePixelRatio < 2

    console.log('menu location', pathRef.current)
    if (!menuTl) {

      menuTl = gsap.timeline({ defaults: { duration: 0.4, ease: 'Power4.easeIn' } })
      console.log('navigation runs')
      if (isDesktop) {
        // console.log('desktop menu', pageName.location)

        menuTl
          .pause()

          .fromTo(menuRef.current, { display: 'none' }, { display: 'block', duration: 0 })
          // .fromTo('#scroll-skip', { display: path === '/' && pageName.location === 'hero' 
          // && isDesktop ? 'flex' : 'none',opacity:1 }, { display: 'none',opacity:0 }, '<')
          .to(imgRef.current, { display: 'none', opacity: 0 }, '<')
          .to('#logo-white', { display: 'block', opacity: 1 })
          .fromTo('#menu-logo', { yPercent: -100 }, { yPercent: 0 }, '<-=75%')
          .fromTo('#menu-links', { yPercent: 100 }, { yPercent: 0 }, '<')
          .fromTo('#menu-contact-wrapper', { yPercent: 100 }, { yPercent: 0 }, '<')
          .fromTo('#menu-contact', { opacity: 0 }, { opacity: 1 }, '<+=25%')

          .to('#st1', { duration: 1, rotation: 45, translateY: '9px', transformOrigin: "50% 0px" }, '<')
          .to('#st2', { duration: 1, rotation: -45, transformOrigin: "50%  0px" }, '<')
          .to('.menu-text1', { color: 'white' }, '<')
          .to('.menu-text2', { color: 'white' }, '<')
          .to('#st1', { stroke: 'white' }, '<')
          .to('#st2', { stroke: 'white' }, '<')



      } else {
        console.log('mobile menu')
        menuTl
          .pause()
          .fromTo(menuRef.current, { display: 'none' }, { display: 'flex', duration: 0 })
          .fromTo(menuRef.current, { yPercent: 100 }, { yPercent: 0 })
          .fromTo('#scroll-skip-mobile', {
            display: path === '/' && pageName.location === 'hero'
              && !isDesktop ? 'flex' : 'none'
          }, { display: 'none' }, '<')
          .to(imgRef.current, { display: 'none', opacity: 0 }, '<')
          .to('#logo-white', { display: 'block', opacity: 1 },)
          .to('#st1', { duration: 1, rotation: 45, translateY: '-1px', transformOrigin: "40% 0px" }, '<')
          .to('#st2', { duration: 1, rotation: -45, yPercent: -50, transformOrigin: "40%  0px" }, '<')
          .to('#st1', { stroke: 'white' }, '<')
          .to('#st2', { stroke: 'white' }, '<')
          .to('.menu-text1', { color: 'white' }, '<')
          .to('.menu-text2', { color: 'white' }, '<')

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

        <Link style={{ pointerEvents: path === '/' ? 'none' : '' }} target="_self" href="/">
          <Image ref={imgRef} width={300} height={200} alt="Dk Care LLC Logo" id="logo" src="/logo.png" />
          <Image width={300} height={200} alt="Dk Care LLC Logo" id="logo-white" src="/logo-white.png" />

        </Link>
        <div className="menu-icon" >
          {/* <Image ref={iconRef} width={300} height={200} alt="Dk Care LLC Logo" 
          id="menuicon" className="icons" src="/icons/menuicon-01.svg" /> */}
          <svg onClick={throttledClick} version="1.1" id="svg-menuicon" x="0px"
            y="0px" viewBox="0 0 74.5 57.3" >

            <line id="st1" className="st0" x1="-0.8" y1="24.2" x2="74.2" y2="24.2" />
            <line id="st2" className="st0" x1="74.2" y1="33.2" x2="-0.8" y2="33.2" />
          </svg>

          {
            splitWords.current && splitWords.current[1] ?
              <Link target="_self" href={`/${splitWords.current[1]}`}>
                <h3 className="menu-text1" >
                  {replaceHyphens(capitalizeFirstLetter(splitWords.current[1]))}
                </h3>
              </Link>
              :
              <h3 className="menu-text1"> Menu</h3>
          }
          <h3 className="menu-text2" >

            {
              splitWords.current && splitWords.current[2] ?
                <span>
                  <span className="seperator">&#62;</span>
                  <span>{capitalizeFirstLetter(splitWords.current[2])}</span>
                </span>
                : <></>
            }
          </h3>
        </div>

      {
        path === '/' && pageName && pageName.location === 'hero' ?
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
          <div id="menu-contact-wrapper">
            <div id="menu-contact">

              <div id="contact-numbers" >
                <div className="contact-number">
                  <h2 className="white semi-bold text-xlarge tc">Dispatch Number</h2>
                    <div className="number">
                      <h3 className="black ">
                        <a href="tel://845-705-9741">845-705-9741</a>
                      </h3>
                      <div className={cls(styles.circle2)} >

                      <svg fill="#ed7036" height="20px" width="20px" version="1.1" id="Capa_1"
                        viewBox="0 0 473.806 473.806" >
                        <g>
                          <g>
                            <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
 C420.456,377.706,420.456,388.206,410.256,398.806z"/>
                            <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
 S248.656,111.506,256.056,112.706z"/>
                            <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"/>
                          </g>
                        </g>
                      </svg>
              
                  </div>
                    </div>
                    
                </div>
                <div className="contact-number">
                  <h2 className="white semi-bold text-xlarge tc">Office Number</h2>
                  <div className="number">
                    <h3 className="black">
                      <a href="tel://845-214-0212">
                        845-214-0212</a>

                    </h3>
                    <div className={cls(styles.circle2)} >

<svg fill="#ed7036" height="20px" width="20px" version="1.1" id="Capa_1"
  viewBox="0 0 473.806 473.806" >
  <g>
    <g>
      <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
C420.456,377.706,420.456,388.206,410.256,398.806z"/>
      <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
S248.656,111.506,256.056,112.706z"/>
      <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"/>
    </g>
  </g>
</svg>

</div>
                    </div>

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

    </div>
  )
}

export default Navigation