
import cls from 'classnames'
import Image from "next/image"
import Button from "../../homepage/Button"
import Link from "next/link"
import Head from "next/head"
import NextPageBtn from '../../svg-components/nextpage-btn'
import styles from '../../../src/styles/Pages.module.css'
import { gsap } from "gsap/dist/gsap";
import { Draggable } from 'gsap/dist/Draggable';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollDownBtn from '../../svg-components/scrolldown-btn'
import { style } from 'd3'
import { useEffect, useRef } from 'react'
import ApplyBtn from './applyBtn'
import { AllLocationsSVG } from '../../../public/images/company/allLocations'

const CompanyHTML = (props) => {
  const companyRef = useRef()
  const jobs = [
    {
      title: 'Drivers', occupation: 'Driver', location: 'Columbia, NY', fullTime: true, base: 'Columbia, NY'
    },
    {
      title: 'Drivers', occupation: 'Driver', location: 'Columbia, NY', fullTime: true, base: 'Columbia, NY'
    },
    {
      title: 'Drivers', occupation: 'Driver', location: 'Columbia, NY', fullTime: true, base: 'Columbia, NY'
    },
    {
      title: 'Support & Operations', occupation: 'Billing & Collections', location: '', fullTime: true, base: 'Dutchess, NY'
    },
    {
      title: 'Support & Operations', occupation: 'Auditor', location: '', fullTime: false, base: 'Dutchess, NY'
    }
  ]
  const titles = []
  jobs.map(job => {
    let haveTitle = titles.find((title) => title === job.title)
    if (!haveTitle) titles.push(job.title)
  })
  const customLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  console.log(titles)
  useEffect(() => {
    if (companyRef.current) {
      let size1080 = window.innerWidth > 1080
      gsap.registerPlugin(ScrollTrigger, Draggable)
      if (window.devicePixelRatio < 2) {
        // let outTeamWrapper = document.querySelectorAll("#our-team-wrapper")

        // let minX = -(outTeamWrapper[0].getBoundingClientRect().width * outTeamWrapper.length - 1)


        // Draggable.create('#team-members-con',
        //   {
        //     bounds: { minX: minX, maxX: 0 },
        //     type: 'x',

        //     inertia: true,
        //     autoScroll: 1,
        //     edgeResistance: 0.65,
        //     // throwProps: true,
        //   })
        let beginningsWrapper = document.querySelectorAll("#beginnings-con")
        let minXBeginnings = -(beginningsWrapper[0].getBoundingClientRect().width * beginningsWrapper.length - 1)
        Draggable.create('#beginnings-content-wrapper',
          {
            bounds: { minX: minXBeginnings, maxX: 0 },
            type: 'x',
            inertia: true,
            autoScroll: 1,
            edgeResistance: 0.65,
            // throwProps: true,
          })

        gsap.set("#background-logo", { backgroundPosition: "0 0", scale: 0.9 });
        gsap.set("#company-intro", { backgroundPosition: "0 0", });
        gsap.set('#vision', { opacity: 0, },)
        if (!size1080) { gsap.set('#companyIntro2', { yPercent: -150 }) }
        else { gsap.set('#companyIntro2', { yPercent: -100 }) }
        let logoTl = gsap.timeline({
          defaults: { duration: 0.6, ease: 'none' },
          scrollTrigger: {
            pin: true,
            trigger: "#companyIntro1",
            start: "top top",
            // end: "#company-about",
            scrub: true,
            // markers: true
          },
        })
        logoTl.to("#background-logo", {
          backgroundPosition: "-25vw 0", scale: 1
        });
        logoTl.to('#mission', { opacity: 0, xPercent: -100 }, '<+=10%')
        logoTl.to('#vision', { opacity: 1, xPercent: size1080 ? -124 : 0 }, '<')

        let intro2 = gsap.timeline({
          defaults: { duration: 0.6, ease: 'Power2.easeIn' },
          scrollTrigger: {
            trigger: "#companyIntro2",
            start: "top bottom",
            end: "#company-about",
            scrub: true,
            // markers: true,
            id: 'companyIntro2'
          },
        })
        intro2.to('#company-intro', { backgroundPosition: size1080 ? '0 200px' : '0 0' }, '<')
        intro2.to('#companyIntro2', { yPercent: size1080 ? -100 : -200 }, '<')
      } else {


        gsap.set("#background-logo", { scale: 0.8, backgroundPosition: "-25vw 80%" });
        gsap.set('#vision', { opacity: 0, },)
        let logoTl = gsap.timeline({
          defaults: { duration: 1, ease: 'none', },
          scrollTrigger: { trigger: '#companyIntro1', start: 'top 100px', toggleActions: 'restart complete restart complete' }
        })
        logoTl.to("#background-logo", { backgroundPosition: "-25vw 80%", scale: 1 });
        logoTl.to('#vision', { opacity: 1, }, '<')

      }


    }
  }, [])
  return (
    <div ref={companyRef} className='page-content-wrapper'>
      <Head>
        <title>Company</title>
      </Head>
      {/* <div >

      <Image className={styles.companyHeroImg} loader={customLoader} src="/images/company/bg-company-dkcare-transformed.png" alt="Dk-care-llc-about-us"
          width={400} height={100} quality="100"  priority/>
           
      </div> */}
      <div className='company-intro-top'></div>
      <div className={cls('pageContainer',)}>
        <div id="companyIntro1" style={{ backgroundColor: '#dce6eb' }}>
          <div id="company-intro" >
            <div id='background-logo'>
              <div className={cls('', styles.introContent1, styles.container)}>
                <h1 style={{ paddingLeft: '2rem' }} className={cls("split-text blue bold text-large pageTitle", styles.mainTitle)}>DK Care LLC</h1>
                <div className={cls('gap40 wrap', styles.flex2)}>
                  <div id="mission" className={cls(" wPer40", styles.mission)}>
                    <h2 className={cls('blue semi-bold', styles.textXL)}>Mission</h2>
                    <p className={cls("text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textL)}>
                      Serve upstate counties in New York with reliable, safe and convenient transportation.</p>

                  </div>
                  <div id="vision" className={cls("gap40 wPer40", styles.vision)}>
                    <h2 className={cls('blue semi-bold', styles.textXL)}>Vision</h2>
                    <p className={cls("text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textL)}>
                      Serve upstate counties in New York with reliable, safe and convenient transportation.</p>

                  </div>
                </div>
                <br />
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
        </div>

        <div className={cls('', styles.comapanyIntro2, styles.container)} >
          <div id="companyIntro2">
            <p className={cls("wPer3 text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textL)}>
              We focus on continuous improvement and innovation, investing in the latest technologies
              and equipment to provide the best transportation experience for our clients.</p>
            <p className={cls("wPer2 text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textM)}>
              We aim to create a culture of excellence, where our team members are empowered to go above and
              beyond to deliver exceptional service and make a difference in people&apos;s lives.</p>
          </div>
        </div>
      </div>

      <div id="company-about" className={cls('pageContainer',)}>

        <div className={cls("", styles.aboutSection)}>
          <Image loader={customLoader} alt="Reliability" className={styles.imgAbout} width={400} height={100}
            src="/images/company/chethan-kvs-I_L--GSnAuI-unsplash.jpg" />
          <div className={cls(styles.aboutContent)}>

            <h2 className={cls('blue split-text pageTitle', styles.aboutTitle)}>About DK Care</h2>

            <h2 className={cls('darkBlack split-text-small pageSubTitle', styles.secTitle2)}>Our Goals & Commitments</h2>
            <p className={cls(" lightBlack semi-bold pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We are committed to ensuring that our clients receive the highest quality of care and
              comfort during their transportation experience.</p>


            <h2 className={cls('darkBlack split-text-small pageSubTitle', styles.secTitle2)}>We focus on</h2>

            <p className={cls("semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >Safety, reliability, and efficiency, we aim to set the standard for the industry and
              continuously improve upon it. Our dedication to excellence has earned us a reputation as A
              top choice for non-emergency medical transportation, and we will continue to working
              tirelessly to maintain that reputation and exceed the expectations of our clients.</p>
            <br />

            <h2 className={cls('darkBlack split-text-small pageSubTitle', styles.secTitle2)}>Striving to be indrustry leaders</h2>

            <p className={cls("semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >DK Care aim to be an industry leader in non-emergency medical transportation, driven
              by a passion for providing top quality service to our clients.</p>
            <br />
            <p className={cls("semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}>
              We recognize the importance of this service in helping individuals access medical care,
              and we strive to be at the forefront of innovation in the field. Our commitment to excellence
              and customer staisfaction is reflected in our use of cutting-edge technologies and our rigorour
              hiring and training standards.
            </p>

          </div>

        </div>

      </div>

      <div id="company-availableIn" className={cls('blue-gr2 pageContainer', styles.container)}>
        <h2 className={cls('white split-text  tc', styles.secTitle2)}>
          Our primary operating areas in upstate New York
        </h2>

        <Image loader={customLoader} className={styles.img100} width={400} height={100}
          src="/images/company/map.png" style={{ objectFit: 'contain' }}
          alt="Patient comfort and care" />
        <div className={cls("gap40", styles.flex2)}>

          <div className={cls(styles.availableContent)}>
            <div className={cls(styles.availableTitle)}>
              <h3 className={cls('white split-text pageTitle ',)}>Available In</h3>
            </div>
            <div className={cls(styles.availableCities)}>
              <p className={cls(" white regular tl",)}
              >Dutchess / Orange / Putnam / Ulster / Westchester / Sullivan / Columbia
              </p>

            </div>
          </div>
          <p className={cls(" regular white tc pdTopBtm", styles.pdTopBtm, styles.textM)}
          >We offer our top-quality non-emergency medical transportation services to individuals and organizations
            throughtout Dutchess, Orange, Putnam, Ulster, Westchester, Sullivan and Columbia counties in New York.
            These counties represent a diverse range of communities and populations, and we are committed to
            providing safe, reliable, and efficient transportation options to meet the unique needs of each individual
            and organization we serve.
          </p>
        </div>

      </div>

      {/*  Remove this ///
      <div id=" company-team" className={cls('pageContainer', styles.container)}>
        <div className='wPer33'>
          <h2 className={cls('blue split-text ', styles.secTitle2)}>Our team members are our greatest assest</h2>

        </div>
        <br />
        <div className="title-bd-container hero-titles ">
          <p className="darkBlack bold pageTitle">Team & Staff</p>
          <div className="title-bd-black" ></div>
        </div>
        <div id="our-team-wrapper" >

          <div className="flex-container " style={{ gap: '30px' }} id="team-members-con" >

            <div className="team-member-wrapper" >
              <div className="team-member" >
                <Image src="/images/team-members/team1.jpg" alt="Team member DK Care LLC"
                 className='team-img' height={400} width={300} />
                <h1 className={cls('darkBlack tl', styles.secTitle2)}>Nemal Duminda Imaduwa</h1>
                <br />
                <div className='bd-line-wrapper'>
                  <div className='bd-line-b'></div>
                  <h2 className={cls('darkBlack tl split-text ', styles.textS, styles.textpd1)}>President & CEO</h2>
                  <div className='bd-line-b'></div>
                </div>
              </div>
            </div>

            <div className="team-member-wrapper" >
              <div className="team-member" >
                <Image src="/images/team-members/team1.jpg" className='team-img' height={400} width={300} />
                <h1 className={cls('darkBlack tl', styles.secTitle2)}>Nemal Duminda Imaduwa</h1>
                <br />
                <div className='bd-line-wrapper'>
                  <div className='bd-line-b'></div>
                  <h2 className={cls('darkBlack tl split-text ', styles.textS, styles.textpd1)}>President & CEO</h2>
                  <div className='bd-line-b'></div>
                </div>
              </div>
            </div>

            <div className="team-member-wrapper" >
              <div className="team-member" >
                <Image src="/images/team-members/team1.jpg" alt="Team member DK Care LLC"
                 className='team-img' height={400} width={300} />
                <h1 className={cls('darkBlack tl', styles.secTitle2)}>Nemal Duminda Imaduwa</h1>
                <br />
                <div className='bd-line-wrapper'>
                  <div className='bd-line-b'></div>
                  <h2 className={cls('darkBlack tl split-text ', styles.textS, styles.textpd1)}>President & CEO</h2>
                  <div className='bd-line-b'></div>
                </div>
              </div>
            </div>

            <div className="team-member-wrapper" >
              <div className="team-member" >
                <Image src="/images/team-members/team1.jpg" alt="Team member DK Care LLC"
                 className='team-img' height={400} width={300} />
                <h1 className={cls('darkBlack tl', styles.secTitle2)}>Nemal Duminda Imaduwa</h1>
                <br />
                <div className='bd-line-wrapper'>
                  <div className='bd-line-b'></div>
                  <h2 className={cls('darkBlack tl split-text ', styles.textS, styles.textpd1)}>President & CEO</h2>
                  <div className='bd-line-b'></div>
                </div>
              </div>
            </div>

            <div className="team-member-wrapper" >
              <div className="team-member" >
                <Image src="/images/team-members/team1.jpg" alt="Team member DK Care LLC" className='team-img' height={400} width={300} />
                <h1 className={cls('darkBlack tl', styles.secTitle2)}>Nemal Duminda Imaduwa</h1>
                <br />
                <div className='bd-line-wrapper'>
                  <div className='bd-line-b'></div>
                  <h2 className={cls('darkBlack tl split-text ', styles.textS, styles.textpd1)}>President & CEO</h2>
                  <div className='bd-line-b'></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <div id="company-humble-beginnings" className={cls('blue-gr2 pageContainer',)}>
        <div className='con-pd'>
          <h2 className={cls('white split-text tc', styles.mainTitle)}>Humble Beginning to Exceptional Services</h2>
        </div>
        <p style={{ display: 'none' }} className='pageTitle'>Humble Beginnings</p>
        <br />
        <div className={cls(styles.orangeStrip)}> </div>

        <div id="beginnings-con">

          <div className={cls("flex-container ",)} style={{ gap: '30px' }} id="beginnings-content-wrapper" >

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

                <svg version="1.1" id="Isolation_Mode" style={{scale:'1.1' }}  className='beginnings-img' x="0px"
                  y="0px" viewBox="156 -78 612 554" >

                  <path class="location1a" d="M506-49.6L606.2,8.2l1.4,0.8l1.6,0.3l120.4,19.5l9.8,1.6l0.6-9.9l2.7-44.8l7.7,0.4l-19.3,299.4l-7.3,106
	l-26-2.2l-1-0.1l-1,0.1l-204.7,28.6l-3.6,0.5l-2.2,2.9l-24.8,32.2l-1.3-1.6l2.4-53.8l22.7-45l0.8-1.6l0.1-1.8l9-113.8l0.1-1.1
	l-0.2-1.1l-5.4-32.7l5.2-73.1l0.1-1.6l-0.5-1.6l-11.3-38.7l13.5-125.1L506-49.6 M508.1-58.8l-20.5,1.5L473,77l11.9,40.4l-5.3,74.1
	l5.6,33.7l-9,113.8l-23.6,46.7l-2.6,59.2l10.7,13.1l31.7-41.2l204.7-28.6l35.1,3l7.9-115.1L760-32.5l-25.7-1.3L731,19.9L610.7,0.4
	L508.1-58.8L508.1-58.8z"/>
                  <path class="location1b" d="M483.7,94.7c15.1,0,27.5,14.3,24,29.3c-2.9,12.3-16.1,23.8-23.9,32.8c-7.9-9.2-21.7-21.6-24.2-33.8
	C456.6,108.4,469.2,94.7,483.7,94.7L483.7,94.7z"/>
                  <g>
                    <path class="location1a" d="M180,170.8v-28.1h11.1c0.3,0,0.6,0,1,0c0.3,0,0.8,0.1,1.1,0.2c1.5,0.3,2.8,0.8,3.8,1.6c1,0.8,1.8,1.8,2.3,3.1
		c0.5,1.3,0.8,2.6,0.8,4.1s-0.3,2.8-0.8,4.1c-0.5,1.3-1.3,2.3-2.3,3.1c-1,0.8-2.3,1.3-3.8,1.6c-0.3,0.1-0.8,0.1-1.1,0.1
		c-0.4,0-0.7,0-1,0h-7.6v10.3L180,170.8L180,170.8z M183.5,157.1h7.5c0.3,0,0.5,0,0.8,0s0.6-0.1,0.9-0.2c0.9-0.2,1.6-0.6,2.2-1.2
		c0.6-0.6,1-1.2,1.3-1.9c0.3-0.8,0.4-1.5,0.4-2.3s-0.2-1.5-0.4-2.3c-0.3-0.8-0.7-1.4-1.3-1.9c-0.6-0.5-1.3-0.9-2.2-1.2
		c-0.3-0.1-0.6-0.1-0.9-0.2c-0.3,0-0.6,0-0.8,0h-7.5V157.1z"/>
                    <path class="location1a" d="M212.8,171.4c-2.1,0-3.9-0.5-5.4-1.4c-1.5-0.9-2.7-2.3-3.5-3.9s-1.3-3.6-1.3-5.8c0-2.2,0.4-4.2,1.3-5.8
		s2-3,3.5-3.9c1.5-0.9,3.3-1.4,5.3-1.4c2.1,0,3.9,0.5,5.4,1.4c1.5,0.9,2.7,2.3,3.5,3.9s1.3,3.6,1.3,5.8c0,2.2-0.4,4.2-1.3,5.8
		s-2,3-3.5,3.9C216.7,171,215,171.4,212.8,171.4z M212.8,168.2c2.2,0,3.8-0.8,4.8-2.2c1.1-1.4,1.6-3.3,1.6-5.7s-0.5-4.3-1.6-5.7
		c-1.1-1.4-2.7-2.1-4.8-2.1c-1.5,0-2.7,0.3-3.7,1c-0.9,0.7-1.7,1.6-2.1,2.8c-0.4,1.2-0.7,2.5-0.7,4.1c0,2.3,0.6,4.3,1.7,5.7
		C209.1,167.4,210.7,168.2,212.8,168.2z"/>
                    <path class="location1a" d="M235.3,171.4c-1.3,0-2.5-0.3-3.5-0.7c-1-0.4-1.8-1-2.4-1.8c-0.7-0.8-1.2-1.5-1.5-2.4c-0.3-0.9-0.6-1.8-0.8-2.7
		c-0.2-0.9-0.3-1.8-0.3-2.6v-11.7h3.5v10.6c0,1,0.1,1.9,0.3,2.8c0.2,0.9,0.5,1.8,0.9,2.5c0.4,0.8,1,1.3,1.8,1.8
		c0.8,0.4,1.7,0.7,2.8,0.7c0.8,0,1.7-0.2,2.3-0.4c0.7-0.3,1.3-0.8,1.8-1.3c0.5-0.6,0.9-1.3,1.2-2.3c0.3-0.9,0.4-2,0.4-3.2l2.3,0.7
		c0,2-0.3,3.8-1.1,5.3c-0.8,1.5-1.8,2.6-3.1,3.4C238.7,171,237.1,171.4,235.3,171.4z M242.3,170.8v-5.7h-0.4v-15.4h3.5v21.1H242.3z"
                    />
                    <path class="location1a" d="M259.2,171.4c-2,0-3.7-0.5-5.1-1.5c-1.4-1-2.5-2.3-3.3-4c-0.8-1.7-1.2-3.6-1.2-5.7s0.4-4,1.2-5.7
		c0.8-1.7,1.8-3,3.3-4s3.1-1.4,5-1.4c2,0,3.7,0.5,5,1.4c1.3,0.9,2.3,2.3,3.1,3.9c0.8,1.7,1.1,3.6,1.1,5.7s-0.3,4-1.1,5.7
		c-0.8,1.7-1.8,3-3.1,4C262.8,170.9,261.1,171.4,259.2,171.4z M259.4,180.8c-1.1,0-2.2-0.2-3.3-0.5c-1.1-0.3-2-0.8-2.9-1.5
		c-0.8-0.7-1.6-1.6-2.2-2.6l3.2-1.7c0.5,1,1.3,1.8,2.3,2.3c0.9,0.5,1.9,0.7,2.9,0.7c1.3,0,2.4-0.3,3.3-0.8c0.9-0.5,1.5-1.2,2-2.2
		c0.4-1,0.7-2.2,0.6-3.6v-5.8h0.4v-15.4h3.1v21.2c0,0.6,0,1.2-0.1,1.7c0,0.5-0.1,1.1-0.2,1.6c-0.3,1.5-0.8,2.8-1.6,3.7
		c-0.8,0.9-1.8,1.7-3.1,2.2C262.7,180.5,261.1,180.8,259.4,180.8z M259.6,168.3c1.4,0,2.6-0.3,3.5-1c0.9-0.7,1.6-1.6,2-2.8
		c0.4-1.2,0.7-2.6,0.7-4.1c0-1.6-0.3-2.9-0.7-4.1c-0.4-1.2-1.1-2.2-2-2.8s-2-1-3.4-1s-2.6,0.3-3.5,1.1c-0.9,0.7-1.6,1.7-2.1,2.8
		c-0.5,1.2-0.7,2.5-0.7,4c0,1.5,0.3,2.8,0.7,4.1s1.2,2.2,2.1,2.8C257.1,167.9,258.2,168.3,259.6,168.3z"/>
                    <path class="location1a" d="M274.3,170.8v-28.1h3.1v15.5h0.4v12.6H274.3z M289.3,170.8v-10.6c0-1-0.1-1.9-0.3-2.8
		c-0.2-0.9-0.5-1.8-0.9-2.5c-0.4-0.8-1-1.3-1.8-1.8s-1.7-0.7-2.8-0.7c-0.8,0-1.7,0.2-2.3,0.4s-1.3,0.8-1.8,1.3s-0.9,1.3-1.2,2.3
		s-0.4,2-0.4,3.2l-2.3-0.7c0-2,0.3-3.8,1.1-5.3s1.8-2.6,3.1-3.4s2.9-1.2,4.7-1.2c1.3,0,2.5,0.3,3.5,0.7s1.8,1,2.4,1.8
		c0.7,0.8,1.2,1.5,1.5,2.4c0.3,0.8,0.6,1.8,0.8,2.7c0.2,0.9,0.3,1.8,0.3,2.6v11.7L289.3,170.8L289.3,170.8z"/>
                    <path class="location1a" d="M297.9,170.8v-28.1h3.5v17.2l8.8-10.2h4.5l-9.3,10.5l10.4,10.5H311l-9.6-10.2v10.2L297.9,170.8L297.9,170.8z"
                    />
                    <path class="location1a" d="M326.6,171.4c-2.1,0-3.8-0.5-5.4-1.4c-1.5-0.9-2.8-2.2-3.6-3.8c-0.8-1.7-1.3-3.6-1.3-5.8c0-2.3,0.4-4.3,1.3-6
		c0.8-1.7,2-3,3.5-3.9c1.5-0.9,3.3-1.4,5.3-1.4c2.1,0,3.9,0.5,5.4,1.5c1.5,1,2.6,2.3,3.3,4.2c0.8,1.8,1.1,4,1,6.4h-3.5v-1.3
		c0-2.6-0.6-4.5-1.6-5.8c-1-1.3-2.5-1.9-4.5-1.9c-2.2,0-3.8,0.7-4.9,2.1c-1.1,1.4-1.7,3.3-1.7,5.9c0,2.5,0.6,4.4,1.7,5.8
		c1.1,1.3,2.8,2.1,4.8,2.1c1.4,0,2.6-0.3,3.7-1c1-0.7,1.8-1.6,2.4-2.8l3.3,1.2c-0.8,1.8-2.1,3.3-3.7,4.3
		C330.5,170.9,328.6,171.4,326.6,171.4z M318.8,161.3v-2.8h15.6v2.8H318.8z"/>
                    <path class="location1a" d="M349.7,171.4c-2.1,0-3.8-0.5-5.4-1.4c-1.5-0.9-2.8-2.2-3.6-3.8c-0.8-1.7-1.3-3.6-1.3-5.8c0-2.3,0.4-4.3,1.3-6
		c0.8-1.7,2-3,3.5-3.9c1.5-0.9,3.3-1.4,5.3-1.4c2.1,0,3.9,0.5,5.4,1.5c1.5,1,2.6,2.3,3.3,4.2s1.1,4,1,6.4h-3.5v-1.3
		c0-2.6-0.6-4.5-1.6-5.8c-1-1.3-2.5-1.9-4.5-1.9c-2.2,0-3.8,0.7-4.9,2.1c-1.1,1.4-1.7,3.3-1.7,5.9c0,2.5,0.6,4.4,1.7,5.8
		c1.1,1.3,2.8,2.1,4.8,2.1c1.4,0,2.6-0.3,3.7-1c1-0.7,1.8-1.6,2.4-2.8l3.3,1.2c-0.8,1.8-2.1,3.3-3.7,4.3
		C353.5,170.9,351.7,171.4,349.7,171.4z M341.8,161.3v-2.8h15.6v2.8H341.8z"/>
                    <path class="location1a" d="M362.9,180.2v-30.5h3.1v15.5h0.4v14.9H362.9z M372.6,171.4c-2,0-3.7-0.5-5-1.5c-1.3-1-2.3-2.3-3.1-4
		c-0.8-1.7-1-3.6-1-5.7s0.3-4,1-5.7c0.7-1.7,1.8-3,3.1-3.9c1.3-1,3-1.4,5-1.4c1.9,0,3.7,0.5,5,1.4c1.4,1,2.5,2.3,3.3,4
		s1.2,3.6,1.2,5.7s-0.4,4-1.2,5.7s-1.8,3-3.3,4C376.3,170.9,374.6,171.4,372.6,171.4z M372.2,168.3c1.4,0,2.5-0.3,3.4-1.1
		c0.9-0.7,1.6-1.7,2.1-2.8s0.7-2.6,0.7-4.1c0-1.5-0.3-2.8-0.7-4c-0.4-1.2-1.2-2.2-2.1-2.8s-2.1-1.1-3.5-1.1c-1.3,0-2.5,0.3-3.4,1
		c-0.9,0.7-1.6,1.6-2,2.8c-0.4,1.2-0.7,2.6-0.7,4.1s0.3,2.9,0.7,4.1c0.4,1.2,1.1,2.2,2,2.8C369.6,167.9,370.8,168.3,372.2,168.3z"/>
                    <path class="location1a" d="M394.1,171.4c-2.5,0-4.6-0.6-6.2-1.7s-2.6-2.7-2.9-4.6l3.6-0.6c0.3,1.2,0.9,2.1,2,2.8c1.1,0.7,2.3,1,3.8,1
		c1.4,0,2.6-0.3,3.4-0.9c0.8-0.6,1.3-1.4,1.3-2.4c0-0.6-0.2-1.1-0.4-1.4s-0.8-0.8-1.7-1c-0.8-0.3-2.2-0.8-3.8-1.2
		c-1.8-0.5-3.3-1-4.4-1.5c-1.1-0.5-1.8-1.2-2.3-1.8s-0.7-1.6-0.7-2.6c0-1.3,0.3-2.3,1-3.3c0.7-0.9,1.6-1.7,2.8-2.2
		c1.3-0.5,2.7-0.8,4.3-0.8c1.6,0,3,0.3,4.3,0.8c1.3,0.5,2.3,1.3,3.1,2.2c0.8,0.9,1.3,2,1.4,3.3l-3.6,0.7c-0.2-1.1-0.8-2-1.7-2.7
		c-0.9-0.7-2.1-1-3.5-1c-1.3,0-2.5,0.3-3.3,0.8c-0.8,0.5-1.3,1.3-1.3,2.2c0,0.5,0.2,0.9,0.5,1.3c0.3,0.4,0.9,0.7,1.8,1
		c0.8,0.3,2.1,0.7,3.8,1.1c1.8,0.5,3.3,1,4.4,1.5c1.1,0.6,1.8,1.2,2.3,1.9c0.4,0.8,0.7,1.7,0.7,2.8c0,2-0.8,3.6-2.3,4.8
		C398.8,170.8,396.7,171.4,394.1,171.4z"/>
                    <path class="location1a" d="M407.2,146v-3.6h3.5v3.6H407.2z M407.2,170.8v-21.1h3.5v21.1H407.2z" />
                    <path class="location1a" d="M425.7,171.4c-2.1,0-3.8-0.5-5.4-1.4c-1.5-0.9-2.8-2.2-3.6-3.8c-0.8-1.7-1.3-3.6-1.3-5.8c0-2.3,0.4-4.3,1.3-6
		c0.8-1.7,2-3,3.5-3.9c1.5-0.9,3.3-1.4,5.3-1.4c2.1,0,3.9,0.5,5.4,1.5c1.5,1,2.6,2.3,3.3,4.2s1.1,4,1,6.4h-3.5v-1.3
		c0-2.6-0.6-4.5-1.6-5.8c-1-1.3-2.5-1.9-4.5-1.9c-2.2,0-3.8,0.7-4.9,2.1c-1.1,1.4-1.7,3.3-1.7,5.9c0,2.5,0.6,4.4,1.7,5.8
		c1.1,1.3,2.8,2.1,4.8,2.1c1.4,0,2.6-0.3,3.7-1c1-0.7,1.8-1.6,2.4-2.8l3.3,1.2c-0.8,1.8-2.1,3.3-3.7,4.3
		C429.6,170.9,427.7,171.4,425.7,171.4z M417.9,161.3v-2.8h15.6v2.8H417.9z"/>
                    <path class="location1a" d="M179.6,224.5v-42.2h13c0.4,0,1.2,0,2.3,0c1.1,0,2.1,0.1,3.1,0.3c3.3,0.4,6,1.6,8.2,3.6
		c2.2,1.9,3.8,4.4,4.9,7.4c1.1,3,1.7,6.3,1.7,9.8s-0.6,6.8-1.7,9.8s-2.8,5.4-4.9,7.4c-2.2,2-4.9,3.1-8.2,3.5c-1,0.2-2,0.3-3.1,0.3
		c-1.1,0-1.8,0-2.3,0L179.6,224.5L179.6,224.5z M185,219.6h7.7c0.8,0,1.6,0,2.5-0.1c0.9-0.1,1.8-0.2,2.4-0.3
		c2.3-0.4,4.2-1.4,5.6-2.9c1.4-1.5,2.5-3.3,3.2-5.6c0.7-2.3,1-4.7,1-7.3c0-2.7-0.3-5.1-1-7.3c-0.7-2.3-1.8-4.1-3.2-5.6
		c-1.4-1.5-3.3-2.4-5.6-2.8c-0.7-0.2-1.5-0.3-2.4-0.3s-1.8-0.1-2.4-0.1h-7.7L185,219.6L185,219.6z"/>
                    <path class="location1a" d="M231.6,225.3c-2.1,0-3.8-0.3-5.3-1s-2.7-1.5-3.6-2.6c-0.9-1.1-1.7-2.3-2.3-3.6c-0.6-1.3-0.9-2.7-1.2-4
		c-0.3-1.3-0.3-2.7-0.3-3.8v-17.4h5.3v15.9c0,1.5,0.2,2.9,0.4,4.3c0.3,1.4,0.8,2.7,1.4,3.8c0.7,1.1,1.5,2,2.7,2.7
		c1.2,0.7,2.5,1,4.2,1c1.3,0,2.5-0.3,3.6-0.7s2-1.1,2.8-2c0.8-0.9,1.3-2,1.8-3.4s0.7-2.9,0.7-4.8l3.4,1.1c0,3-0.6,5.7-1.7,7.8
		c-1.1,2.2-2.7,3.9-4.7,5.1C236.6,224.8,234.2,225.3,231.6,225.3z M242.1,224.5v-8.4h-0.6v-23.2h5.3v31.6H242.1z"/>
                    <path class="location1a" d="M251.4,197.2v-4.3h21.2v4.3H251.4z M272.6,224.5c-1.8,0.4-3.8,0.6-5.6,0.5c-1.8-0.1-3.4-0.4-4.9-1.1
		c-1.5-0.7-2.5-1.8-3.3-3.2c-0.6-1.3-1-2.5-1-3.8s-0.1-2.8-0.1-4.3v-28.5h5.2v28.2c0,1.3,0,2.4,0.1,3.3c0,0.9,0.3,1.7,0.6,2.3
		c0.7,1.3,1.8,2,3.3,2.2c1.5,0.3,3.4,0.2,5.6-0.2L272.6,224.5L272.6,224.5z"/>
                    <path class="location1a" d="M291.1,225.4c-3.2,0-5.9-0.8-8.2-2.2c-2.3-1.4-3.9-3.4-5.1-5.9c-1.2-2.5-1.8-5.4-1.8-8.6
		c0-3.3,0.7-6.2,1.8-8.7c1.2-2.5,2.9-4.5,5.2-5.9c2.3-1.4,4.9-2.1,8.1-2.1c3.3,0,6.2,0.8,8.6,2.4c2.4,1.7,4,3.9,4.8,6.8l-5.2,1.6
		c-0.7-1.8-1.8-3.3-3.3-4.3c-1.5-1-3.2-1.5-5.1-1.5c-2.2,0-3.9,0.5-5.3,1.5c-1.4,1-2.4,2.4-3.2,4.2c-0.7,1.8-1,3.8-1.1,6.1
		c0,3.5,0.8,6.3,2.4,8.5c1.6,2.2,3.9,3.3,7.1,3.3c2.1,0,3.8-0.5,5.2-1.4c1.3-0.9,2.4-2.3,3.1-4.1l5.3,1.4c-1.1,2.9-2.8,5.2-5.1,6.8
		C297.1,224.6,294.3,225.4,291.1,225.4z"/>
                    <path class="location1a" d="M310.5,224.5v-42.2h4.7v23.3h0.6v18.9L310.5,224.5L310.5,224.5z M333.1,224.5v-15.9c0-1.5-0.2-2.9-0.4-4.3
		c-0.3-1.4-0.8-2.7-1.4-3.8c-0.7-1.1-1.5-2-2.6-2.7c-1.1-0.7-2.5-1-4.2-1c-1.3,0-2.5,0.3-3.6,0.7c-1.1,0.4-2,1.1-2.8,2
		c-0.8,0.9-1.3,2-1.8,3.3c-0.4,1.3-0.7,2.9-0.7,4.8l-3.4-1.1c0-3.1,0.6-5.7,1.7-7.8c1.1-2.2,2.7-3.9,4.7-5.1c2-1.2,4.3-1.8,7.1-1.8
		c2.1,0,3.8,0.3,5.3,1s2.7,1.5,3.6,2.6c0.9,1.1,1.7,2.3,2.3,3.6c0.6,1.3,0.9,2.7,1.2,4c0.3,1.3,0.3,2.7,0.3,3.8v17.4h-5.3V224.5z"/>
                    <path class="location1a" d="M359.7,225.4c-3.1,0-5.8-0.7-8.1-2.1c-2.3-1.4-4.1-3.3-5.4-5.8c-1.3-2.4-1.9-5.3-1.9-8.7c0-3.4,0.7-6.4,1.9-9
		c1.3-2.5,3-4.5,5.3-5.8c2.3-1.3,4.9-2.1,8-2.1c3.2,0,5.9,0.8,8.1,2.2c2.3,1.5,3.9,3.6,5,6.3c1.1,2.8,1.6,5.9,1.4,9.7h-5.3v-1.8
		c-0.1-3.9-0.8-6.8-2.3-8.7c-1.5-1.9-3.8-2.9-6.8-2.9c-3.3,0-5.7,1-7.3,3.1s-2.5,5-2.5,8.9c0,3.8,0.8,6.6,2.5,8.7
		c1.7,2.1,4.1,3.1,7.2,3.1c2.1,0,3.9-0.5,5.4-1.4c1.5-0.9,2.8-2.3,3.7-4.2l5,1.8c-1.3,2.8-3.1,4.9-5.5,6.5
		C365.7,224.7,362.8,225.4,359.7,225.4z M348,210.2V206h23.4v4.2H348z"/>
                    <path class="location1a" d="M392.5,225.3c-3.8,0-6.8-0.8-9.3-2.5c-2.4-1.7-3.9-3.9-4.4-6.9l5.3-0.8c0.4,1.8,1.4,3.1,2.9,4.1
		c1.6,1,3.4,1.5,5.8,1.5c2.2,0,3.8-0.4,5.1-1.3c1.3-0.9,1.8-2.1,1.8-3.7c0-0.9-0.2-1.6-0.6-2.2c-0.4-0.6-1.3-1.1-2.5-1.6
		c-1.3-0.5-3.2-1.1-5.8-1.8c-2.8-0.8-5-1.5-6.6-2.3s-2.8-1.8-3.4-2.8c-0.7-1.1-1-2.3-1-3.8c0-1.8,0.5-3.5,1.5-4.8
		c1-1.3,2.4-2.4,4.3-3.3c1.8-0.8,3.9-1.2,6.3-1.2s4.5,0.4,6.4,1.2c1.9,0.8,3.4,1.8,4.6,3.3c1.2,1.4,1.8,3,2.1,4.8l-5.3,1
		c-0.3-1.7-1.1-3-2.4-4c-1.4-1-3.2-1.5-5.3-1.6c-2.1-0.1-3.7,0.3-5,1.1c-1.3,0.8-1.9,1.8-1.9,3.3c0,0.8,0.3,1.4,0.8,2
		c0.5,0.5,1.3,1.1,2.7,1.5c1.3,0.5,3.2,1,5.7,1.7c2.8,0.7,5,1.5,6.6,2.3s2.8,1.8,3.4,2.9c0.7,1.1,1,2.5,1,4.2c0,3.1-1.1,5.4-3.3,7.2
		C399.7,224.5,396.4,225.3,392.5,225.3z"/>
                    <path class="location1a" d="M423.5,225.3c-3.8,0-6.8-0.8-9.3-2.5c-2.4-1.7-3.9-3.9-4.4-6.9l5.3-0.8c0.4,1.8,1.4,3.1,2.9,4.1
		c1.6,1,3.4,1.5,5.8,1.5c2.2,0,3.8-0.4,5.1-1.3c1.3-0.9,1.8-2.1,1.8-3.7c0-0.9-0.2-1.6-0.6-2.2c-0.4-0.6-1.3-1.1-2.5-1.6
		c-1.3-0.5-3.2-1.1-5.8-1.8c-2.8-0.8-5-1.5-6.6-2.3s-2.8-1.8-3.4-2.8c-0.7-1.1-1-2.3-1-3.8c0-1.8,0.5-3.5,1.5-4.8
		c1-1.3,2.4-2.4,4.3-3.3c1.8-0.8,3.9-1.2,6.3-1.2c2.4,0,4.5,0.4,6.4,1.2c1.9,0.8,3.4,1.8,4.6,3.3c1.2,1.4,1.8,3,2.1,4.8l-5.3,1
		c-0.3-1.7-1.1-3-2.4-4c-1.4-1-3.2-1.5-5.3-1.6c-2.1-0.1-3.7,0.3-5,1.1c-1.3,0.8-1.9,1.8-1.9,3.3c0,0.8,0.3,1.4,0.8,2
		c0.5,0.5,1.3,1.1,2.7,1.5c1.3,0.5,3.2,1,5.7,1.7c2.8,0.7,5,1.5,6.6,2.3c1.6,0.8,2.8,1.8,3.4,2.9c0.7,1.1,1,2.5,1,4.2
		c0,3.1-1.1,5.4-3.3,7.2C430.7,224.5,427.5,225.3,423.5,225.3z"/>
                  </g>
                </svg>

                <h1 className={cls('white tl', styles.titleLarge)}>2019</h1>
                <p className={cls('white tl split-text-small ', styles.textM, styles.textpd1)}>
                  DK Care LLC formed in September 2019 Poughkeepsie, NY, USA by Mr.Nemal Imaduwa with
                  only seven employees and a fleet of 10 cars</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

              <Image loader={customLoader} className={cls('beginnings-img')} width={400} height={100}
          src="/images/company/timeline-all-cars.png" style={{ objectFit: 'contain',scale:'1.1' }}
          alt="Patient comfort and care" />

                <h1 className={cls('white tl', styles.titleLarge)}>2020</h1>
                <p className={cls('white tl split-text-small ', styles.textM, styles.textpd1)}>
                  Despite the challenges posed by the Covid-19 pandemic, our company was able to
                  add 20 full-time employees and 25 vehicles to our fleet. The NEMT industry faced
                  difficulties, but we persevered.</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >
              <AllLocationsSVG/>
                <h1 className={cls('white tl', styles.titleLarge)}>2021</h1>
                <p className={cls('white tl split-text-small ', styles.textM, styles.textpd1)}>
                  Despite the challenges posed by the Covid-19 pandemic, our company was able to
                  add 20 full-time employees and 25 vehicles to our fleet. The NEMT industry faced
                  difficulties, but we persevered.</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

                <svg className='beginnings-img' vx="0px" y="0px" 
                  viewBox="0 0 300 400"
                  style={{scale:'1.1', fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '10' }}>
                  <path id="XMLID_14_" class="stW" d="M296,4v392H4V4H296 M300,0H0v400h300V0L300,0z" />
                </svg>
                <h1 className={cls('white tl', styles.titleLarge)}>2022</h1>
                <p className={cls('white tl split-text-small ', styles.textM, styles.textpd1)}>
                  Despite the challenges posed by the Covid-19 pandemic, our company was able to
                  add 20 full-time employees and 25 vehicles to our fleet. The NEMT industry faced
                  difficulties, but we persevered.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="company-collaborations" className={cls('pageContainer', styles.container)}>

        <h1 className={cls(" blue bold text-large split-text ", styles.mainTitle)}>
          Respect, collaboration, and improvement</h1>
        <p style={{ display: "none" }} className='pageTitle'>Collaborations</p>
        <div className="title-bd-container hero-titles ">
          <p className="black bold">Comfort</p>
          <div className="title-bd-black" ></div>
        </div>
        <div className={cls("fg10", styles.flex2)}>
          <div className='wPer40'>

            <p className={cls("text-large darkBlack bold  pdTopBtm", styles.pdTopBtm, styles.textL)}
            >At DK Care, We believe that our culture is a reflection of our values, beliefs,
              and practices.

            </p>
            <p className={cls("text-med semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We believe in giving back to our communities, and we support a variety
              of charitable causes and organizations through donations, volunteerism,
              and other forms of community engagement.
            </p>
          </div>
          <div className='wPer40' >

            <p className={cls("text-large darkBlack bold  pdTopBtm", styles.pdTopBtm, styles.textL)}
            >We strive to create an inclusive and collaborative workplace where everyone is respected,
              valued, and supported.

            </p>
            <p className={cls("text-med semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >Our culture is rooted in transparency, accountability, and a commitment to excellence in
              everything we do.
            </p>
          </div>
        </div>

        <br />
        <Image loader={customLoader} className={styles.img100small} src="/images/company/joel-muniz-3k3l2brxmwQ-unsplash.jpg" alt="Dk-care-llc-about-us"
          width={400} height={100} />


      </div>

      <div id="company-careers" className={cls('pageContainer', styles.container)}>

        <h1 className={cls(" blue bold text-large split-text ", styles.mainTitle)}>
          Come work with us!</h1>
        <p style={{ display: "none" }} className='pageTitle'>Work With Us</p>
        <div className="title-bd-container hero-titles ">
          <p className="black bold">Our Culture</p>
          <div className="title-bd-black" ></div>
        </div>
        <div className={cls("fg10", styles.flex2)}>
          <div className='wPer40'>

            <p className={cls("text-large darkBlack bold  pdTopBtm", styles.pdTopBtm, styles.textL)}
            >We are always looking for talented and highly motivated individuals to join our team.
            </p>

          </div>
          <div className='wPer40' >

            <p className={cls("text-med semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We offer a very competitive benefits package and career development oppertunities to
              help you achieve your highest professional and personal goals. We are eager to show you
              all we have to offer!
            </p>
          </div>
        </div>

        <br />
        {
          titles.length &&
          titles.map((title, tId) => {
            return (
              <div className={cls(styles.jobTitleCon)} key={tId}>
                <h2 className={cls('lightBlack semi-bold', styles.textM, styles.pdTopBtm)}>{title}</h2>
                {
                  jobs.length &&
                  jobs.map((job, jId) => {
                    if (job.title === title) {

                      return (
                        <div key={jId} className={cls(styles.jobCon,)}>
                          <div className={cls(styles.flex2)}>
                            <p className={cls('darkBlack semi-bold', styles.textM,)}>{job.occupation}</p>
                            <p className={cls('lightBlack semi-bold', styles.textM,)}>&nbsp;{job.location ? ` - ${job.location}` : ''}</p>
                          </div>
                          <p className={cls('lightBlack semi-bold', styles.textM,)}>{job.fullTime ? 'Full-time' : 'Part-time'}</p>
                          <p className={cls('lightBlack semi-bold', styles.textM,)}>{job.base ? job.base : ''}</p>
                          <div style={{ display: 'grid', justifyContent: 'end' }}>
                            <ApplyBtn />
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
            )
          })
        }
      </div>

      <div id="company-solutions" className={cls('blue-gr2 pageContainer', styles.container)}>
        <p style={{ display: 'none' }} className='pageTitle'>Our Dedication</p>
        <h2 className={cls('white split-text-small tc con-pd ', styles.secTitle2)}>
          We are dedicated to finding solutions and going above and beyond to say &quot;yes&quot;
          to our customers&apos; needs.
        </h2>
        <br />
        <br />
        <br />
        <br />

        <div className={cls("fg5 con-pd ", styles.flex2)}>

          <p className={cls(" white semi-bold wPer45", styles.pdTopBtm, styles.textM)}
          >
            Our values at DK Care are cemtered around our diverse and compassionate
            team, which reflectts and understands the communities we serve.
          </p>
          <br />
          <div className='wPer40'>

            <p className={cls("text-small semi-bold white  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >Our commitment to fostering a team that embodies these values allows us to provide the
              highest level of care and service to every customer, regardless of their needs or background.
            </p>
            <br />
            <p className={cls("text-small semi-bold white  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >Our ultimate goal is to provide compassionate and understanding service to everyone who rides with us.
            </p>

          </div>

        </div>
        <div id="" className="nextBtn">
          <Link href='/'> <button><NextPageBtn /></button></Link>
          <h1 className="title white">Home</h1>
        </div>
      </div>

    </div>

  )
}
export default CompanyHTML