import cls from 'classnames'
import Image from "next/image"
import Link from "next/link"
import Button from "../../homepage/Button"
import styles from '../../../src/styles/Pages.module.css'
import Head from "next/head"
import NextPageBtn from '../../svg-components/nextpage-btn'
import { gsap } from "gsap/dist/gsap";
import { SplitText } from 'gsap/dist/SplitText';
import { useEffect, useRef } from 'react'
import NumberBtn from './numberBtn'
import ScrollDownBtn from '../../svg-components/scrolldown-btn'
import { customLoader } from '../custom-loader'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

const HowItWorksHTML = () => {
  const howRef = useRef()
  const scrollSmoother =useRef()

  function setupFaq() {
    let questionBoxes = document.querySelectorAll('.questionBox')
    let answers = document.querySelectorAll('.answer')
    

    console.log('how it works',scrollSmoother)
    questionBoxes.forEach((q, idx) => {
      let smallTitle = q.querySelectorAll('.title-bd-container')
      let bdBtm = q.querySelectorAll('.div1px-black')
      let question = q.querySelector('.question')
      let number = q.querySelector('.qNum')
      let smTitleLine = q.querySelector('.title-bd-black2')
      gsap.set(smallTitle[0], { opacity: 0 })
      gsap.set(bdBtm[0], { width: 0, })

      let clicked = false
      let faqTl
      q.addEventListener('click', () => {
        if (!faqTl) {

          faqTl = gsap.timeline({
            defaults: { duration: 0.5, ease: 'Power4.easeIn' },onStart:()=>{
              // scrollSmoother.current.refresh()
            },
            onReverseComplete: () => faqTl.revert(),
            onComplete:()=>{
              // let offset = scrollSmoother.current.scrollTo(answers[idx],1,'top center')
              // gsap.to(scrollSmoother.current, {
              //   scrollTop: offset,
              //   duration: 1,onStart:()=>scrollSmoother.current.refresh
              // });
            }
          },)
          faqTl
            .pause()
            .to(q, { backgroundColor: 'white' }, '<')
            .to(question, { color: 'var(--blue)' }, '<')
            .to(number, { border: 'var(--blue) 1px solid', color: 'var(--blue)' }, '<')
            .fromTo(smallTitle[0], { opacity: 0 }, { opacity: 1 })
            .fromTo(smTitleLine, { width: '0px' }, { width: 'auto' }, '<')
            .to(bdBtm[0], { width: 'auto' }, '<')
            .fromTo(answers[idx], { height: '0px' }, { height: 'auto', })
            
        }
        if (!clicked) {
          if(!scrollSmoother.current)scrollSmoother.current = ScrollSmoother.get()
          clicked = true
          faqTl.play(0)
        } else {
          clicked = false
          faqTl.reverse()
        }
      })
    })

  }

  useEffect(() => {
    if (howRef.current) {
      gsap.registerPlugin(SplitText);
      // scrollSmoother.current = ScrollSmoother.get()
      // console.log(scrollSmoother.current)
      setupFaq()
    }
  }, [])
  return (
    <div ref={howRef} className='page-content-wrapper'>
      <Head>
        <title>How It Works</title>
      </Head>
      <div className='company-intro-top'></div>
      <div className={cls('pageContainer',)}>
        <div style={{ backgroundColor: '#dce6eb' }}>
          <div id="how-intro" >

            <div className={cls('', styles.container)}>
              <h1 className={cls("split-text blue bold text-large pageTitle", styles.mainTitle)}>How it works?</h1>


              <h2 className={cls('blue semi-bold', styles.textXL)}>It&apos;s simple...</h2>
              <div className={cls('fg1rem wPer3', styles.flex2, styles.pdTopBtm)}>
                <div className={cls(" wPer40", styles.callus)}>
                  <div className={cls('', styles.flex2, styles.pdTopBtm)}>
                    <p className={cls('white semi-bold', styles.orangeBox2, styles.textM)}>You</p>
                    <p style={{ paddingLeft: '0.5rem', alignSelf: 'center' }}
                      className={cls('darkBlack semi-bold', styles.textS)} >Call your insurance provider</p>
                  </div>
                  <h2 className={cls('blue semi-bold', styles.textL2)}>Schedule</h2>
                  <p className={cls("darkBlack regular wPer3 ", styles.pdTopBtm, styles.textS2)}>
                    Serve upstate counties in New York with reliable, safe and convenient transportation.</p>

                </div>
                <div className={cls("gap40 wPer40", styles.callus)}>
                  <div className={cls('', styles.flex2, styles.pdTopBtm)}>
                    <p className={cls('white semi-bold', styles.orangeBox2, styles.textM)}>DK Care</p>
                    <p style={{ paddingLeft: '0.5rem', alignSelf: 'center' }} className={cls('darkBlack semi-bold', styles.textS)}>
                      Will take care of
                    </p>
                  </div>
                  <h2 className={cls('blue semi-bold', styles.textL2)}>Pickup &gt; Return</h2>
                  <p className={cls("darkBlack regular  wPer3", styles.pdTopBtm, styles.textS2)}>
                    Serve upstate counties in New York with reliable, safe and convenient transportation.</p>

                </div>

              </div>


              <br />
              <div className='wPer40'>
                <div id="" className="scrollDownBtn">
                  <button><ScrollDownBtn /></button>
                  <p style={{ alignSelf: 'center' }}
                    className={cls('blue wPer3 semi-bold', styles.textM)}>Scroll down for more information</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={cls('', styles.comapanyIntro2, styles.container)} >

          <p className={cls("wPer3 text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textL)}>
            If you have medical insurance, you are able to receive non-emergency medical transportation
            services &#40;NEMT&#41; through your insurance provider.</p>
          <p className={cls("wPer2 darkBlack bold  pdTopBtm", styles.pdTopBtm, styles.textM)}>
            To find out if you are eligible, contact your insurance provider and ask about your
            coverage options.</p>
        </div>
      </div>

      <div id="how-eligible" className={cls('blue-gr2 pageContainer', styles.container)}>
        <div className={cls('fg', styles.flex2)}>
          <h2 className={cls('split-text white pageTitle wPer40', styles.mainTitle)}>Who is Eligible?</h2>
          <Image loader={customLoader} className={cls('', styles.img100small2)} style={{ objectPosition: '0 5%' }}
            src="/images/how-it-works/pexels-kampus-production-7854135.jpg" alt="Dk-care-llc-about-us"
            width={400} height={100} />
        </div>
        <div className="">
          <div className="title-bd-container hero-titles">
            <p className="white bold">Getting our services</p>
            <div className="title-bd-white" ></div>
          </div>
          <div className='' >
            <p className={cls("text-large white semi-bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
            >Our services are primarily for individuals who have Medicaid, Medicare, or other medical
              insurances that cover non-emergency medical transportation.
            </p>
          </div>
        </div>

        <div>
          <div className="title-bd-container hero-titles">
            <p className="white bold">Getting our services</p>
            <div className="title-bd-white" ></div>
          </div>
          <div className={cls('fw flex', styles.fg2)}>
            <div className='wPer2' >

              <p className={cls("text-large white semi-bold ", styles.textL)}
              >Can individuals without medical insurance use DK Care LLC&apos;s transportation services?
              </p>
            </div>
            <div className='wPer40' >
              <p className={cls(" semi-bold white", styles.textM)}
              >Unfortunately, we are not able to provide transportation services to individuals without
                medical insurance coverage for non-emergency medical transportation.
              </p>
            </div>
          </div>

        </div>
        <br />
        <div className="">

          <div className={cls('fg5', styles.getInTouch)} >
            <div className={cls('wPer47')}>
              <p className={cls('darkBlack semi-bold', styles.textM, styles.pdTopBtm)}>
                Please get in touch with following agencies to get support
              </p>
              <div className={cls("title-bd-container hero-titles", styles.pdTopBtm)}>
                <p className="darkBlack bold">DK Care affiliated insurance providers</p>
                <div className="title-bd-black" ></div>
              </div>
              <div className={cls(styles.servicesNemt, styles.pdTopBtm)} >

                <div id='' className={cls("flex blue bold ", styles.ourTechnologies, styles.textS)} >
                  <div className="section flex " style={{ flexWrap: 'wrap', }}>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4>Doctors Appointments</h4><span >&gt;</span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                      <h4 >Medicaid.Gov</h4>
                      <span className={cls(styles.getInTouchSpan)}>
                        <svg x="0px" y="0px" className={cls(styles.collabImg)}
                          viewBox="0 0 194.6 39.3"
                        //  style="enable-background:new 0 0 194.6 39.3;"
                        >
                          <g>
                            <path class="medicaid1" d="M4.4,1.1h3.9l4.8,14.5l4.9-14.5h3.8L25.3,22h-3.8L19.2,8.8L14.8,22h-3.5L6.9,8.8L4.6,22H0.8L4.4,1.1z" />
                            <path class="medicaid1" d="M42.5,19c-1.7,2.4-3.8,3.4-7.1,3.4c-4.9,0-8.1-3.6-8.1-8.1c0-4.2,3-8.1,8-8.1s8.2,3.5,8.2,8.4
		c0,0.4,0,0.5,0,0.9H31.1c0.4,2.3,2.1,3.6,4.3,3.6c1.7,0,2.8-0.5,3.8-1.5L42.5,19L42.5,19z M39.7,12.3c-0.5-1.8-2.2-2.9-4.2-2.9
		c-1.9,0-3.4,1-4.2,2.9H39.7z"/>
                            <path class="medicaid1" d="M58,20.3c-1.4,1.3-2.8,2-4.8,2c-3.9,0-7.3-3.4-7.3-8.1s3.2-8.1,7.3-8.1c1.9,0,3.5,0.7,4.8,2.1V0.6h3.9V22H58
		C58,22,58,20.3,58,20.3z M49.8,14.2c0,2.6,1.7,4.6,4.2,4.6s4.2-1.8,4.2-4.6S56.4,9.7,54,9.7S49.8,11.7,49.8,14.2z"/>
                            <path class="medicaid1" d="M69.8,2.7c0,1.4-1.1,2.5-2.5,2.5S64.9,4,64.9,2.5c0-1.3,1.1-2.3,2.5-2.3S69.8,1.4,69.8,2.7L69.8,2.7z
		 M65.4,6.5h3.9V22h-3.9V6.5z"/>
                            <path class="medicaid1" d="M87.7,19.1c-1.7,2.1-4,3.2-7,3.2c-5.3,0-8.7-3.6-8.7-8.1s3.6-8.2,8.7-8.2c3,0,5.6,1.2,7.1,3.5l-3.2,1.8
		c-1.1-1.2-2.2-1.7-3.9-1.7c-3,0-4.8,2-4.8,4.7s1.8,4.5,4.7,4.5c1.7,0,3.1-0.6,4-1.8L87.7,19.1L87.7,19.1z"/>
                            <path class="medicaid1" d="M100.8,20.3c-1.4,1.3-2.8,2-4.8,2c-3.9,0-7.3-3.4-7.3-8.1s3.2-8.1,7.3-8.1c1.9,0,3.5,0.7,4.8,2.1V6.5h3.9V22
		h-3.9C100.8,22,100.8,20.3,100.8,20.3z M92.5,14.2c0,2.6,1.7,4.6,4.2,4.6s4.2-1.8,4.2-4.6s-1.8-4.5-4.2-4.5S92.5,11.7,92.5,14.2z"
                            />
                            <path class="medicaid1" d="M112.5,2.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.2-2.5-2.7c0-1.3,1.1-2.3,2.5-2.3S112.5,1.4,112.5,2.7L112.5,2.7z
		 M108.1,6.5h3.9V22h-3.9V6.5z"/>
                            <path class="medicaid1" d="M126.9,20.3c-1.4,1.3-2.8,2-4.8,2c-3.9,0-7.3-3.4-7.3-8.1s3.2-8.1,7.3-8.1c1.9,0,3.5,0.7,4.8,2.1V0.6h3.9V22
		h-3.9C126.9,22,126.9,20.3,126.9,20.3z M118.7,14.2c0,2.6,1.7,4.6,4.2,4.6s4.2-1.8,4.2-4.6s-1.8-4.5-4.2-4.5S118.7,11.7,118.7,14.2
		z"/>
                            <path class="medicaid2" d="M138.8,20.6c0,1-0.8,1.8-1.7,1.8s-1.7-0.8-1.7-1.8s0.8-1.8,1.7-1.8S138.8,19.6,138.8,20.6z" />
                            <path class="medicaid2" d="M158.2,18.8c0,2.5-0.1,4.6-1.4,6.3c-1.3,1.8-3.6,2.8-6.5,2.8c-4.4,0-6.6-1.8-8-4.8h2.1c1.2,2,3,3,5.7,3
		c2.6,0,4.4-0.9,5.4-2.6c0.6-1.1,0.7-2.2,0.7-3.4V19c-1.5,2-3.8,2.9-6.2,2.9c-4.3,0-7.9-3.2-7.9-7.8s3.8-8,7.9-8
		c2.7,0,4.6,1.2,6.2,3.1V6.6h2L158.2,18.8L158.2,18.8z M144.2,14.3c0,3.1,2.2,5.8,6.2,5.8c3.4,0,5.9-2.3,5.9-5.9s-2.8-6.1-5.9-6.1
		C146.9,8.1,144.2,10.7,144.2,14.3L144.2,14.3z"/>
                            <path class="medicaid2" d="M177.8,14.3c0,4.4-3.4,8.1-8,8.1s-8-3.7-8-8.1s3.4-8.2,8-8.2S177.8,9.9,177.8,14.3z M163.8,14.3
		c0,3.4,2.5,6.1,6,6.1s6-2.8,6-6.1s-2.7-6.3-6-6.3S163.8,10.9,163.8,14.3z"/>
                            <path class="medicaid2" d="M180,6.5h2.1l5.2,11.2l5.1-11.2h2.1L187.5,22h-0.4L180,6.5L180,6.5z" />
                          </g>
                          <g>
                            <path class="medicaid2" d="M7.4,36.1H6.3l-3.1-4.1l-0.9,0.8v3.4h-1v-8.6h1v4.2l3.9-4.2h1.2l-3.4,3.7L7.4,36.1L7.4,36.1z" />
                            <path class="medicaid2" d="M11.2,36.2c-0.9,0-1.7-0.3-2.2-0.9S8.1,34,8.1,32.9c0-1,0.2-1.9,0.8-2.5s1.2-0.9,2.1-0.9
		c0.8,0,1.4,0.3,1.9,0.8s0.7,1.2,0.7,2.1v0.6H9.1c0,0.8,0.2,1.3,0.6,1.7s0.9,0.6,1.5,0.6c0.7,0,1.4-0.1,2.1-0.4v0.9
		c-0.3,0.2-0.7,0.2-1,0.3S11.6,36.2,11.2,36.2L11.2,36.2z M10.9,30.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.5,1.4h3.4
		c0-0.6-0.1-1.1-0.4-1.4S11.4,30.4,10.9,30.4L10.9,30.4z"/>
                            <path class="medicaid2" d="M17.9,36.2c-1,0-1.7-0.3-2.2-0.9s-0.8-1.4-0.8-2.4c0-1,0.2-1.9,0.8-2.5s1.2-0.9,2-0.9c0.8,0,1.4,0.3,1.9,0.8
		s0.7,1.2,0.7,2.1v0.6h-4.4c0,0.8,0.2,1.3,0.6,1.7s0.9,0.6,1.5,0.6c0.7,0,1.4-0.1,2-0.4v0.9c-0.3,0.2-0.7,0.2-1,0.3
		S18.3,36.2,17.9,36.2L17.9,36.2z M17.6,30.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.5,1.4h3.4c0-0.6-0.1-1.1-0.4-1.4
		S18.2,30.4,17.6,30.4L17.6,30.4z"/>
                            <path class="medicaid2" d="M24.9,36.2c-0.4,0-0.8-0.1-1.1-0.2s-0.6-0.4-0.9-0.7h-0.1c0,0.4,0.1,0.7,0.1,1.1V39h-1v-9.3h0.8l0.1,0.9h0
		c0.2-0.4,0.5-0.6,0.9-0.8s0.7-0.2,1.1-0.2c0.9,0,1.5,0.3,2,0.9s0.7,1.4,0.7,2.4c0,1-0.2,1.9-0.7,2.5S25.7,36.2,24.9,36.2L24.9,36.2
		z M24.8,30.4c-0.7,0-1.1,0.2-1.4,0.5s-0.4,0.9-0.5,1.7v0.2c0,0.9,0.1,1.5,0.5,1.9s0.8,0.6,1.5,0.6c0.5,0,1-0.2,1.3-0.7
		s0.5-1.1,0.5-1.9s-0.2-1.4-0.5-1.8S25.3,30.4,24.8,30.4z"/>
                            <path class="medicaid2" d="M29.2,27.9c0-0.2,0-0.4,0.2-0.5s0.2-0.2,0.4-0.2s0.3,0,0.4,0.2s0.2,0.3,0.2,0.5s-0.1,0.4-0.2,0.5
		s-0.2,0.2-0.4,0.2c-0.2,0-0.3,0-0.4-0.2S29.2,28.2,29.2,27.9z M30.2,36.1h-1v-6.4h1V36.1z"/>
                            <path class="medicaid2" d="M36.7,36.1v-4.1c0-0.5-0.1-0.9-0.4-1.2s-0.6-0.4-1.1-0.4c-0.7,0-1.2,0.2-1.5,0.5s-0.5,1-0.5,1.8v3.4h-1v-6.4
		h0.8l0.2,0.9h0c0.2-0.3,0.5-0.6,0.8-0.7s0.8-0.3,1.2-0.3c0.8,0,1.4,0.2,1.8,0.6s0.6,1,0.6,1.8v4.2L36.7,36.1L36.7,36.1z"/>
                            <path class="medicaid2" d="M44.9,29.7v0.6l-1.2,0.1c0.1,0.1,0.2,0.3,0.3,0.5s0.1,0.5,0.1,0.7c0,0.6-0.2,1.1-0.6,1.5s-1,0.6-1.8,0.6
		c-0.2,0-0.4,0-0.5,0c-0.4,0.2-0.6,0.5-0.6,0.8c0,0.2,0.1,0.3,0.2,0.4s0.4,0.1,0.7,0.1h1.1c0.7,0,1.2,0.2,1.6,0.4s0.6,0.7,0.6,1.3
		c0,0.7-0.3,1.2-0.9,1.6S42.6,39,41.5,39c-0.8,0-1.5-0.2-1.9-0.5s-0.7-0.8-0.7-1.3c0-0.4,0.1-0.7,0.4-1s0.6-0.5,1-0.6
		c-0.2-0.1-0.3-0.2-0.4-0.3s-0.2-0.3-0.2-0.5c0-0.2,0.1-0.4,0.2-0.6s0.3-0.3,0.6-0.5c-0.3-0.1-0.6-0.4-0.8-0.7s-0.3-0.7-0.3-1.1
		c0-0.7,0.2-1.2,0.6-1.6s1-0.6,1.8-0.6c0.3,0,0.6,0,0.9,0.1L44.9,29.7L44.9,29.7z M39.8,37.2c0,0.3,0.2,0.6,0.4,0.8s0.7,0.3,1.3,0.3
		c0.8,0,1.4-0.1,1.8-0.4s0.6-0.6,0.6-1c0-0.3-0.1-0.6-0.3-0.7S43,36,42.4,36h-1.2c-0.4,0-0.8,0.1-1,0.3S39.8,36.8,39.8,37.2
		L39.8,37.2z M40.3,31.7c0,0.4,0.1,0.8,0.4,1s0.6,0.3,1.1,0.3c1,0,1.4-0.5,1.4-1.4c0-0.9-0.5-1.5-1.4-1.5c-0.5,0-0.8,0.1-1,0.4
		S40.3,31.3,40.3,31.7L40.3,31.7z"/>
                            <path class="medicaid2" d="M54.9,36.1l-1.1-2.7h-3.4l-1,2.7h-1l3.4-8.6h0.8l3.4,8.6H54.9L54.9,36.1z M53.5,32.5l-1-2.6
		c-0.1-0.3-0.3-0.8-0.4-1.2c-0.1,0.4-0.2,0.8-0.4,1.2l-1,2.6H53.5L53.5,32.5z"/>
                            <path class="medicaid2" d="M65.2,36.1v-4.2c0-0.5-0.1-0.9-0.3-1.1s-0.6-0.4-1-0.4c-0.6,0-1,0.2-1.3,0.5S62,31.8,62,32.5v3.6h-1v-4.2
		c0-0.5-0.1-0.9-0.3-1.1s-0.6-0.4-1-0.4c-0.6,0-1.1,0.2-1.3,0.5s-0.4,1-0.4,1.8v3.4h-1v-6.4h0.8l0.2,0.9h0c0.2-0.3,0.4-0.6,0.8-0.7
		s0.7-0.3,1.1-0.3c1,0,1.7,0.4,2,1.1h0c0.2-0.3,0.5-0.6,0.8-0.8s0.8-0.3,1.2-0.3c0.7,0,1.3,0.2,1.6,0.6s0.5,1,0.5,1.8v4.2L65.2,36.1
		L65.2,36.1z"/>
                            <path class="medicaid2" d="M70.8,36.2c-0.9,0-1.7-0.3-2.2-0.9s-0.8-1.4-0.8-2.4c0-1,0.2-1.9,0.8-2.5s1.2-0.9,2.1-0.9
		c0.8,0,1.4,0.3,1.9,0.8s0.7,1.2,0.7,2.1v0.6h-4.4c0,0.8,0.2,1.3,0.6,1.7s0.9,0.6,1.5,0.6c0.7,0,1.4-0.1,2.1-0.4v0.9
		c-0.3,0.2-0.7,0.2-1,0.3S71.3,36.2,70.8,36.2L70.8,36.2z M70.6,30.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.5,1.4h3.4
		c0-0.6-0.1-1.1-0.4-1.4S71.1,30.4,70.6,30.4L70.6,30.4z"/>
                            <path class="medicaid2" d="M77.8,29.6c0.3,0,0.5,0,0.8,0.1l-0.1,0.9c-0.3-0.1-0.5-0.1-0.7-0.1c-0.5,0-1,0.2-1.3,0.6
		c-0.4,0.4-0.6,0.9-0.6,1.6v3.5h-1v-6.4h0.8l0.1,1.2h0.1c0.2-0.4,0.5-0.7,0.9-1S77.4,29.6,77.8,29.6L77.8,29.6z"/>
                            <path class="medicaid2" d="M79.7,27.9c0-0.2,0.1-0.4,0.2-0.5s0.2-0.2,0.4-0.2s0.3,0,0.4,0.2s0.2,0.3,0.2,0.5s-0.1,0.4-0.2,0.5
		s-0.2,0.2-0.4,0.2c-0.2,0-0.3,0-0.4-0.2S79.7,28.2,79.7,27.9z M80.7,36.1h-1v-6.4h1V36.1z"/>
                            <path class="medicaid2" d="M85.4,36.2c-0.9,0-1.7-0.3-2.2-0.9s-0.8-1.4-0.8-2.4c0-1,0.3-1.9,0.8-2.5s1.2-0.9,2.2-0.9c0.3,0,0.6,0,0.9,0.1
		s0.6,0.1,0.7,0.2l-0.3,0.8c-0.2-0.1-0.4-0.2-0.7-0.2s-0.5-0.1-0.7-0.1c-1.3,0-2,0.8-2,2.5c0,0.8,0.2,1.4,0.5,1.8s0.8,0.6,1.4,0.6
		c0.5,0,1.1-0.1,1.7-0.3v0.9C86.6,36.1,86,36.2,85.4,36.2L85.4,36.2z"/>
                            <path class="medicaid2" d="M92.5,36.1l-0.2-0.9h-0.1c-0.3,0.4-0.6,0.7-1,0.8s-0.7,0.2-1.2,0.2c-0.6,0-1.1-0.2-1.5-0.5S88,34.9,88,34.3
		c0-1.3,1-2,3.1-2l1.1,0v-0.4c0-0.5-0.1-0.9-0.3-1.1s-0.6-0.4-1-0.4c-0.5,0-1.1,0.2-1.8,0.5l-0.3-0.7c0.3-0.2,0.7-0.3,1-0.4
		s0.8-0.1,1.1-0.1c0.8,0,1.3,0.2,1.7,0.5s0.6,0.9,0.6,1.6v4.4L92.5,36.1L92.5,36.1z M90.3,35.4c0.6,0,1.1-0.2,1.4-0.5
		s0.5-0.8,0.5-1.4v-0.6l-1,0c-0.8,0-1.3,0.2-1.7,0.4s-0.5,0.5-0.5,1c0,0.3,0.1,0.6,0.3,0.8S89.9,35.4,90.3,35.4L90.3,35.4z"/>
                            <path class="medicaid2" d="M105,36.1h-1v-4h-4.5v4h-1v-8.6h1v3.6h4.5v-3.6h1V36.1z" />
                            <path class="medicaid2" d="M109.9,36.2c-0.9,0-1.7-0.3-2.2-0.9s-0.8-1.4-0.8-2.4c0-1,0.2-1.9,0.8-2.5s1.2-0.9,2.1-0.9
		c0.8,0,1.4,0.3,1.9,0.8s0.7,1.2,0.7,2.1v0.6h-4.4c0,0.8,0.2,1.3,0.6,1.7s0.9,0.6,1.5,0.6c0.7,0,1.4-0.1,2.1-0.4v0.9
		c-0.3,0.2-0.7,0.2-1,0.3S110.3,36.2,109.9,36.2L109.9,36.2z M109.6,30.4c-0.5,0-0.9,0.2-1.2,0.5s-0.5,0.8-0.5,1.4h3.4
		c0-0.6-0.1-1.1-0.4-1.4S110.1,30.4,109.6,30.4L109.6,30.4z"/>
                            <path class="medicaid2" d="M117.8,36.1l-0.2-0.9h-0.1c-0.3,0.4-0.6,0.7-1,0.8s-0.7,0.2-1.2,0.2c-0.6,0-1.1-0.2-1.5-0.5s-0.5-0.8-0.5-1.4
		c0-1.3,1-2,3.1-2l1.1,0v-0.4c0-0.5-0.1-0.9-0.3-1.1s-0.6-0.4-1-0.4c-0.5,0-1.1,0.2-1.8,0.5l-0.3-0.7c0.3-0.2,0.7-0.3,1-0.4
		s0.8-0.1,1.1-0.1c0.8,0,1.3,0.2,1.7,0.5s0.6,0.9,0.6,1.6v4.4L117.8,36.1L117.8,36.1z M115.6,35.4c0.6,0,1.1-0.2,1.4-0.5
		s0.5-0.8,0.5-1.4v-0.6l-1,0c-0.8,0-1.3,0.2-1.7,0.4s-0.5,0.5-0.5,1c0,0.3,0.1,0.6,0.3,0.8S115.3,35.4,115.6,35.4L115.6,35.4z"/>
                            <path class="medicaid2" d="M121.5,36.1h-1V27h1V36.1z" />
                            <path class="medicaid2" d="M125.7,35.4c0.2,0,0.3,0,0.5,0s0.3,0,0.4-0.1V36c-0.1,0-0.3,0.1-0.5,0.1s-0.4,0-0.6,0c-1.2,0-1.9-0.7-1.9-2
		v-3.8h-0.9V30l0.9-0.4l0.4-1.4h0.6v1.5h1.9v0.8h-1.9v3.8c0,0.4,0.1,0.7,0.3,0.9S125.4,35.4,125.7,35.4L125.7,35.4z"/>
                            <path class="medicaid2" d="M132.2,36.1v-4.1c0-0.5-0.1-0.9-0.4-1.2s-0.6-0.4-1.1-0.4c-0.7,0-1.2,0.2-1.5,0.5s-0.5,1-0.5,1.8v3.4h-1V27h1
		v2.8c0,0.3,0,0.6-0.1,0.8h0.1c0.2-0.3,0.5-0.5,0.8-0.7s0.8-0.3,1.2-0.3c0.8,0,1.4,0.2,1.8,0.6s0.6,1,0.6,1.8v4.2H132.2L132.2,36.1z
		"/>
                            <path class="medicaid2" d="M134.2,29.7h1l1.4,3.7c0.3,0.8,0.5,1.4,0.6,1.8h0.1c0.1-0.2,0.2-0.5,0.3-1s0.7-2,1.6-4.4h1l-2.8,7.3
		c-0.3,0.7-0.6,1.2-1,1.5s-0.8,0.5-1.3,0.5c-0.3,0-0.6,0-0.9-0.1v-0.8c0.2,0,0.5,0.1,0.7,0.1c0.7,0,1.1-0.4,1.4-1.1l0.4-0.9
		C136.8,36.1,134.2,29.7,134.2,29.7z"/>
                          </g>
                        </svg>
                        <div>&gt;</div>
                      </span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                      <h4 >United Healthcare</h4>
                      <span >
                        <svg className={cls(styles.collabImg)} id="b5dc1ff5-0182-4621-94ad-8a07d6a20b7e" data-name="Layer 1" viewBox="0 0 593.96 186.38">
                          <path d="M29.85,177.83h0a57.47,57.47,0,0,0,18.8,3.11c28.3,0,48-20.52,48-59.54V5.13L107.41,0V123.42c0,39.8-20.52,63-49.58,63A51.08,51.08,0,0,1,29.85,177.83ZM17.57,166h0c6.52,2.17,13.05,3.57,18.8,3.57,23.79,0,39.64-14.92,39.64-48.65V14L86.58,9V121.87c0,35.29-17.87,53.32-42.74,53.32C34.66,175.19,25.34,171.77,17.57,166ZM10.1,155.45h0a56.88,56.88,0,0,0,15.7,2.79c18.5,0,29.85-10.1,29.85-36.68V23l10.41-5V120c0,29.85-13.67,43.37-33.26,43.37A37,37,0,0,1,10.1,155.45Zm35.76-31.09V27.05L0,47.72v79c0,15.08,9.48,25.18,23.47,25.18S45.86,141.61,45.86,124.36Z" fill="#002677" /><path d="M166.45,26.88V63.16c0,13.4,7.93,23.86,23.08,23.86,13,0,22.79-9.58,22.79-24.15v-35a7,7,0,0,1,6.85-7.24l1.36-.09V17.1H197.75v3.43l1.47.09a7,7,0,0,1,6.84,7.24V61.79c0,11.05-5.77,17.8-14.77,17.8s-14.47-7.14-14.47-17.89V26.88c0-3.81,2.05-6,6.36-6.26l1.37-.09V17.1H158.63v3.43l1.47.09C164.3,20.92,166.45,23,166.45,26.88Z" fill="#002677" /><path d="M197.22,104.27l1.46.1c3.62.19,6.36,1.66,6.36,5.77v21.32H179.42V110.14c0-4.11,2.74-5.48,6.36-5.77l1.37-.1v-3.42H161.23v3.42l1.47.1c3.62.19,6.35,1.66,6.35,5.77V160c0,4.11-2.73,5.58-6.35,5.77l-1.47.1v3.42h25.92v-3.42l-1.37-.1c-3.62-.29-6.36-1.66-6.36-5.77V136.74H205V160c0,4.11-2.74,5.58-6.36,5.77l-1.46.1v3.42h25.91v-3.42l-1.37-.1c-3.61-.29-6.35-1.66-6.35-5.77V110.14c0-4.11,2.74-5.48,6.35-5.77l1.37-.1v-3.42H197.22Z" fill="#002677" /><path d="M220.44,37.15v3.23l1.95.09c3,.2,4.89,1.67,4.89,5.77V76.37c0,4.1-2.05,5.57-5.38,5.76l-1.46.1v3.33h23.17V82.23l-1.37-.1c-3.32-.19-5.37-1.66-5.37-5.76v-16c.19-11.74,5.28-18.78,11.24-18.78,4.6,0,7.63,3.13,7.63,9.19V76.37c0,4.1-2.06,5.57-5.38,5.76l-1.47.1v3.33h23.18V82.23l-1.37-.1c-3.32-.19-5.38-1.66-5.38-5.76V49.67c0-7.63-4.69-14-14-14-6.55,0-12.23,3.92-14.47,10.86V35.88Z" fill="#002677" /><path d="M354.21,86.54c9.88,0,15.46-6.75,17.71-14.38L367.71,71c-2,5.28-5.38,9.38-12.22,9.38-7.92,0-13.3-7.53-13.3-19.46H372.6V58.08c0-12.62-7.43-22.79-19.36-22.79-12.81,0-21.32,12.23-21.32,25.62S340.13,86.54,354.21,86.54Zm-1.07-45.67c5.38,0,8.8,5,9.19,15.25H342.38C343.36,46.64,347.27,40.87,353.14,40.87Z" fill="#002677" /><path d="M306.1,74.6c0,7.63,4.6,11.94,11.93,11.94,6.85,0,11.35-5,13.4-12.13l-3.52-1c-1.37,4.11-3.62,6.65-6.75,6.65-4.11,0-5.48-3-5.48-6.55V41.84h13.4V36.76h-13.4V21.7H310.8c-1.86,11.34-7.63,15.45-13.7,16.72v3.42h9Z" fill="#002677" /><path d="M285.57,28a6.46,6.46,0,0,0,0-12.91,6.32,6.32,0,0,0-6.26,6.36A6.37,6.37,0,0,0,285.57,28Z" fill="#002677" /><path d="M281.07,46.24V76.37c0,4.1-2.06,5.57-5.38,5.76l-1.47.1v3.33H297.4V82.23l-1.37-.1c-3.33-.19-5.38-1.66-5.38-5.76V35.88l-16.92,1.27v3.23l2.45.09C279.21,40.57,281.07,42.14,281.07,46.24Z" fill="#002677" /><path d="M397.54,86.54c6.45,0,11.44-3.33,13.59-9v8h16.33V82.23l-1.37-.1c-3.32-.19-5.38-1.66-5.38-5.76V15.83L404.09,17.3v3.23l2.15.09c3,.1,4.89,1.67,4.89,5.77V44c-2.15-5.48-7.14-8.71-13.59-8.71-12.82,0-20.05,12.23-20.05,25.62S384.72,86.54,397.54,86.54Zm1.66-45.67c7.23,0,11.93,7.82,11.93,20s-4.7,20-11.93,20c-6.85,0-11.35-7.72-11.35-20S392.35,40.87,399.2,40.87Z" fill="#002677" /><path d="M543.11,119.23c-5.67,0-10.56,3.72-12.71,10.37v-10L514,120.9v3.22l1.95.1c3,.2,4.89,1.66,4.89,5.77v30.12c0,4.11-2,5.57-5.38,5.77L514,166v3.32h23.17V166l-1.37-.1c-3.32-.2-5.37-1.66-5.37-5.77V143.68c.19-12.22,5.47-19.85,11.93-19.85a3.92,3.92,0,0,1,3.22,1.27,5.08,5.08,0,0,0-2.73,4.6,5.21,5.21,0,0,0,5.18,5.18c2.84,0,5.18-2.35,5.18-5.67C553.18,123.05,548.59,119.23,543.11,119.23Z" fill="#002677" /><path d="M574.6,119c-12.81,0-21.32,12.22-21.32,25.62s8.21,25.62,22.3,25.62c9.87,0,15.45-6.75,17.7-14.37l-4.21-1.18c-2,5.28-5.38,9.39-12.22,9.39-7.92,0-13.3-7.53-13.3-19.46H594v-2.84C594,129.21,586.53,119,574.6,119Zm-10.86,20.83c1-9.49,4.89-15.26,10.76-15.26,5.38,0,8.8,5,9.19,15.26Z" fill="#002677" /><path d="M505.65,161.19V135.66c0-10.46-6.55-16.62-17.6-16.62-9.48,0-17.89,6.26-17.89,13.4a5.18,5.18,0,1,0,10.36.19,5.27,5.27,0,0,0-2.64-4.59c1.76-2.45,4.89-3.92,8.7-3.92,6,0,9.59,4.5,9.59,12v2.25l-14.48,6c-9.68,4-13,7.53-13,13.88,0,7.34,5.28,12,13.59,12a14.79,14.79,0,0,0,13.79-9.58v1.47c0,5,3.52,8,9.39,8a20.28,20.28,0,0,0,6.16-.88V166C507.51,166.47,505.65,164.9,505.65,161.19Zm-9.58-11.05c-.49,8.6-4.79,14.37-10.76,14.37-4.3,0-7-2.93-7-7.43,0-4,2.15-7.14,6.26-8.9L496.17,143Z" fill="#002677" /><path d="M368.35,157.18c-1.37,4.1-3.61,6.65-6.74,6.65-4.11,0-5.48-3-5.48-6.55V125.59h13.4V120.5h-13.4V105.44h-4.89c-1.86,11.35-7.63,15.46-13.69,16.73v3.42h9v32.76c0,7.63,4.59,11.93,11.93,11.93,6.84,0,11.34-5,13.39-12.13Z" fill="#002677" /><path d="M306.35,161.19V135.66c0-10.46-6.55-16.62-17.6-16.62-9.48,0-17.89,6.26-17.89,13.4a5.18,5.18,0,1,0,10.36.19,5.3,5.3,0,0,0-2.64-4.59c1.76-2.45,4.89-3.92,8.7-3.92,6,0,9.59,4.5,9.59,12v2.25l-14.48,6c-9.68,4-13,7.53-13,13.88,0,7.34,5.28,12,13.59,12a14.79,14.79,0,0,0,13.79-9.58v1.47c0,5,3.52,8,9.39,8a20.28,20.28,0,0,0,6.16-.88V166C308.21,166.47,306.35,164.9,306.35,161.19Zm-9.58-11.05c-.49,8.6-4.79,14.37-10.76,14.37-4.3,0-7-2.93-7-7.43,0-4,2.15-7.14,6.26-8.9L296.87,143Z" fill="#002677" /><path d="M449.23,164.12c-7.92,0-13.3-7.53-13.3-19.46,0-12.13,5.28-19.85,13.2-19.85,3.52,0,6.26,1.17,7.92,3.32a5.42,5.42,0,0,0-2.44,4.5,5.21,5.21,0,0,0,5.18,5.18c2.93,0,5.18-2.34,5.18-5.67,0-5.87-5.86-13.1-16.33-13.1-14.57,0-23,12.22-23,25.62s8.21,25.62,22.3,25.62c9.68,0,15.15-6.45,17.31-13.79l-4.21-1.27C459.2,160.21,455.88,164.12,449.23,164.12Z" fill="#002677" /><path d="M331.1,160.11V99.58L314.47,101v3.23l2.15.1c3,.1,4.89,1.66,4.89,5.77v50c0,4.11-2.05,5.57-5.38,5.77l-1.46.1v3.32h23.17V166l-1.37-.1C333.15,165.68,331.1,164.22,331.1,160.11Z" fill="#002677" /><path d="M416.76,160.11v-26.7c0-7.62-4.69-14-14-14-6.56,0-12.23,3.91-14.48,10.85V99.58L371.68,101v3.23l2.15.1c3,.1,4.89,1.66,4.89,5.77v50c0,4.11-2.05,5.57-5.38,5.77l-1.47.1v3.32h23.18V166l-1.37-.1c-3.32-.2-5.38-1.66-5.38-5.77v-16c.2-11.73,5.28-18.77,11.25-18.77,4.6,0,7.63,3.13,7.63,9.19v25.62c0,4.11-2.06,5.57-5.38,5.77l-1.47.1v3.32h23.18V166l-1.37-.1C418.81,165.68,416.76,164.22,416.76,160.11Z" fill="#002677" />
                          <path d="M246.31,119C233.5,119,225,131.26,225,144.66s8.22,25.62,22.3,25.62c9.88,0,15.45-6.75,17.7-14.37l-4.21-1.18c-1.95,5.28-5.38,9.39-12.22,9.39-7.92,0-13.3-7.53-13.3-19.46h30.41v-2.84C265.67,129.21,258.24,119,246.31,119Zm-10.85,20.83c1-9.49,4.88-15.26,10.75-15.26,5.38,0,8.8,5,9.19,15.26Z" fill="#002677" />
                        </svg>
                        <div>&gt;</div></span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                      <h4 >Nascentia Health</h4><span >
                        <Image style={{ height: '2.5rem' }} loader={customLoader} alt="some logo" src="/images/icons/nascentia-health-tagline.png" className={cls(styles.collabImg)} width={100} height={100} />
                        <div>&gt;</div>
                      </span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cls('wPer47')}>
              <p className={cls('lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
                Non-emergency medical transportation
                &#40;NEMT&#41; is a Medicaid program created to provide transportation to
                and from medical facilities.
              </p>
              <div className={cls("title-bd-container hero-titles", styles.pdTopBtm)}>
                <p className="darkBlack bold">Call us for information and support
                </p>
                <div className="title-bd-black" ></div>
              </div>
              <div className={cls(styles.pdTopBtm)} >

                <p className={cls('darkBlack semi-bold', styles.textM, styles.pdTopBtm)}>
                  You can always call us for support
                </p>
                <div className='numberBtnWrapper'>

                  <NumberBtn />
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

      <div id="how-ride" className={cls('pageContainer', styles.container)}>
        <div className="">
          <h2 className={cls('split-text blue ', styles.mainTitle)}>How can I get a ride?</h2>
          <p className='pageTitle' style={{ display: 'none' }}>Get a Ride</p>
        </div>
        <div className="">
          <div className="title-bd-container hero-titles">
            <p className="darkBlack bold">To use NEMT services</p>
            <div className=" title-bd-black" ></div>
          </div>

          <div className={cls('fw flex', styles.fg2)}>
            <div className='wPer2' >
              <p className={cls("text-large darkBlack bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
              >Patients or their caregivers can contact DK Care.
              </p>


            </div>
            <div className='wPer40' >
              <p className={cls(" semi-bold lightBlack", styles.pdTopBtm, styles.textM)}
              >We will verify the patient&apos;s eligibility for transportation services,
                including any necessary medical documentation.
              </p>
              <p className={cls(" semi-bold lightBlack", styles.pdTopBtm, styles.textM)}
              >Once eligibility is confirmed, DK Care will schedule the patient&apos;s
                ride and arrange for a driver and appropriate vehicle to transport them to
                their destination.
              </p>
            </div>
          </div>
          <Image loader={customLoader} className={styles.img100small} src="/images/how-it-works/pexels-cottonbro-studio-4606342.jpg" alt="Dk-care-llc-about-us"
            width={400} height={100} />

        </div>
      </div>

      <div id="how-faq" className={cls('pageContainer', styles.container)}>
        <div className="">
          <h1 className={cls('split-text blue howfaq pageTitle', styles.mainTitle,)}>FAQ</h1>

        </div>

        <div className="">
          <div className="title-bd-container hero-titles">
            <p className="darkBlack bold">Some of the most requested questions from us</p>
            <div className=" title-bd-black" ></div>
          </div>

          <div className={cls('fw flex', styles.fg2)}>
            <div className='wPer2' >
              <p className={cls("text-large darkBlack bold  ", styles.pdTopBtm, styles.textL)}
              >Frequently asked questions.
              </p>


            </div>
            <div className='wPer40' >
              <p className={cls(" semi-bold lightBlack", styles.pdTopBtm, styles.textS)}
              >Please do not hesitate to contact us if you have specific questions
                or inquiries. You can reach us via e-mail or call.
              </p>
              <div className={cls("fw flex ",)} style={{ alignItems: 'center' }}>
                <Button name="Contact us" />
              </div>
            </div>
          </div>

        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>01</div>
            <div>

              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">Some of the most requested questions from us</p>
                  <div className=" title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  What is DK Care?
                </p>
                <div className='div1px-black'></div>
              </div>

            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>02</div>
            <div>
              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">More information on Services page</p>
                  <div className="title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  What Services does DK Care offer?
                </p>
                <div className='div1px-black'></div>
              </div>
            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>03</div>
            <div>
              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">More information on Services page</p>
                  <div className="title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  What Types of vehicles does DK Care have?
                </p>
                <div className='div1px-black'></div>
              </div>
            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>04</div>
            <div>
              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">More information on Services page</p>
                  <div className="title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  Are DK Care drivers trained and licensed?
                </p>
                <div className='div1px-black'></div>
              </div>
            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>05</div>
            <div>
              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">More information on Services page</p>
                  <div className="title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  What if I need to cancel or reschedule a ride?
                </p>
                <div className='div1px-black'></div>
              </div>
            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>

        <div className={cls('questionBox', styles.faqCon)}>
          <div className={cls('ai', styles.faqWrapper)}>
            <div className={cls('qNum', styles.numberCon)}>06</div>
            <div>
              <div className='' >
                <div className="title-bd-container ">
                  <p className="darkBlack bold">More information on Services page</p>
                  <div className="title-bd-black2" ></div>
                </div>
                <p className={cls('question semi-bold', styles.textL, styles.faq, styles.pdTopBtm)}>
                  Do your vehicles have GPS tracking?
                </p>
                <div className='div1px-black'></div>
              </div>
            </div>
          </div>
          <div className='answer'>
            <p className={cls('wPer3 lightBlack semi-bold', styles.textS, styles.pdTopBtm)}>
              DK Care provides transportation services to and from medical appointments,
              procedures, and treatments for patients with medical insurance coverage.
            </p>
          </div>
        </div>
      </div>

      <div id="how-getInTouch" className={cls('blue-gr2 pageContainer', styles.container)}>
        <h2 className={cls('split-text-small white tc ', styles.pdTopBtm, styles.secTitle2)}>
          New York State provides a range of long term services and supports for people of
          all ages or with any disability.
        </h2>
        <p className='pageTitle' style={{ display: 'none' }}>Get In Touch</p>
        <div className={cls("gap40", styles.flex2,)}>

          <div className={cls('fg5', styles.flex2)}>
            <div className=" wPer47">
              <div className={cls('fg5', styles.getInTouch)} >
                <div className={cls('',)}>
                  <p className={cls('darkBlack semi-bold', styles.textM, styles.pdTopBtm)}>
                    Please get in touch with following agencies to get support
                  </p>
                  <div className={cls("title-bd-container hero-titles", styles.pdTopBtm)}>
                    <p className="darkBlack bold">DK Care affiliated insurance providers</p>
                    <div className="title-bd-black" ></div>
                  </div>
                  <div className={cls(styles.servicesNemt, styles.pdTopBtm)} >

                    <div id='' className={cls("flex blue bold ", styles.ourTechnologies, styles.textS)} >
                      <div className="section flex " style={{ flexWrap: 'wrap', }}>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                          <h4>MAS</h4>
                          <span className={cls(styles.getInTouchSpan)}>
                            <Image style={{ height: '2.5rem' }} loader={customLoader} alt="some logo"
                              src="/images/how-it-works/icons/mas.png" className={cls(styles.collabImg)} width={100} height={100} />
                            <div>&gt;</div>
                          </span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                          <h4 >emedny.org</h4>
                          <span className={cls(styles.getInTouchSpan)}>
                            <Image style={{ height: '2.5rem' }} loader={customLoader} alt="some logo"
                              src="/images/how-it-works/icons/eMedNy.png" className={cls(styles.collabImg)} width={100} height={100} />
                            <div>&gt;</div>
                          </span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                          <h4 >cms.gov</h4>
                          <span >
                            <Image style={{ height: '2.5rem' }} loader={customLoader} alt="some logo"
                              src="/images/how-it-works/icons/cms_gov.png" className={cls(styles.collabImg)} width={100} height={100} />
                            <div>&gt;</div></span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab3)}>
                          <h4 >healthcare.gov</h4><span >
                            <Image style={{ height: '2.5rem' }} loader={customLoader} alt="some logo"
                              src="/images/how-it-works/icons/Healthcare_gov.png" className={cls(styles.collabImg)} width={100} height={100} />
                            <div>&gt;</div>
                          </span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br />
            <div className={cls('wPer40', styles.pdTopBtm)} style={{ display: 'grid', alignItems: 'center' }}>
              <div>
                <p className={cls("text-small regular white   ", styles.textS)}
                >In addition, we follow social distancing guidelines and limit the number of passengers
                  in our vehicles to ensure adequate spacing. We also provide hand sanitizer and encourage
                  our customers to wear masks during their trips.
                </p>
                <br />
                <p className={cls("text-small regular white   ", styles.textS)}
                >Rest assured that when you ride with DK Care, you can have peace of mind knowing that we
                  are doing everything we can to prevent the spread of COVID-19
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="nextBtn">
          <Link href='/company'> <button><NextPageBtn /></button></Link>
          <h1 className="title white">Company</h1>
        </div>
      </div>



    </div>
  )
}
export default HowItWorksHTML