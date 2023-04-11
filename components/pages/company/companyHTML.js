
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

import { style } from 'd3'
import { useEffect, useRef } from 'react'
import ApplyBtn from './applyBtn'

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

      if (window.devicePixelRatio < 2) {
        let outTeamWrapper = document.querySelectorAll("#our-team-wrapper")

        let minX = -(outTeamWrapper[0].getBoundingClientRect().width * outTeamWrapper.length - 1)

        gsap.registerPlugin(Draggable)

        Draggable.create('#team-members-con',
          {
            bounds: { minX: minX, maxX: 0 },
            type: 'x',

            inertia: true,
            // autoScroll: 1,
            edgeResistance: 0.65,
            // throwProps: true,
          })
        let beginningsWrapper = document.querySelectorAll("#beginnings-con")
        let minXBeginnings = -(beginningsWrapper[0].getBoundingClientRect().width * beginningsWrapper.length - 1)
        Draggable.create('#beginnings-content-wrapper',
          {
            bounds: { minX: minXBeginnings, maxX: 0 },
            type: 'x',

            inertia: true,
            // autoScroll: 1,
            edgeResistance: 0.65,
            // throwProps: true,
          })


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
        <div style={{ backgroundColor: '#dce6eb' }}>
          <div id="company-intro" >
            <div id='background-logo'>
              <div className={cls('', styles.introContent1, styles.container)}>
                <h1 style={{ paddingLeft: '2rem' }} className={cls("split-text blue bold text-large pageTitle", styles.mainTitle)}>DK Care LLC</h1>
                <div className={cls('gap40', styles.flex2)}>
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
                <div className='wPer1'>
                  <p className={cls('blue  semi-bold', styles.textS)}>Scroll down for more information</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className={cls('', styles.comapanyIntro2, styles.container)} >

          <p className={cls("wPer3 text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textL)}>
            We focus on continuous improvement and innovation, investing in the latest technologies
            and equipment to provide the best transportation experience for our clients.</p>
          <p className={cls("wPer2 text-large blue bold  pdTopBtm", styles.pdTopBtm, styles.textM)}>
            We aim to create a culture of excellence, where our team members are empowered to go above and
            beyond to deliver exceptional service and make a difference in people's lives.</p>
        </div>
      </div>

      <div id="company-about" className={cls('pageContainer',)}>

        <div className={cls("", styles.aboutSection)}>
          <Image alt="Reliability" className={styles.imgAbout} width={400} height={100}
            src="/family.jpeg" />
          <div className={cls(styles.aboutContent)}>

            <h2 className={cls('blue split-text pageTitle', styles.aboutTitle)}>About DK Care</h2>

            <h2 className={cls('darkBlack split-text pageSubTitle', styles.secTitle2)}>Our Goals & Commitments</h2>
            <p className={cls(" lightBlack semi-bold pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We are committed to ensuring that our clients receive the highest quality of care and
              comfort during their transportation experience.</p>


            <h2 className={cls('darkBlack split-text pageSubTitle', styles.secTitle2)}>We focus on</h2>

            <p className={cls("semi-bold lightBlack  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >Safety, reliability, and efficiency, we aim to set the standard for the industry and
              continuously improve upon it. Our dedication to excellence has earned us a reputation as A
              top choice for non-emergency medical transportation, and we will continue to working
              tirelessly to maintain that reputation and exceed the expectations of our clients.</p>
            <br />

            <h2 className={cls('darkBlack split-text pageSubTitle', styles.secTitle2)}>Striving to be indrustry leaders</h2>

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

        <Image className={styles.img100} width={400} height={100} src="/Dk-Care-LLC-customers-4.jpg"
          alt="Patient comfort and care" />
        <div className={cls("gap40", styles.flex2)}>

          <div className={cls(styles.availableContent)}>
            <div className="wPer3">
              <h2 className={cls('white split-text pageTitle pageSubTitle', styles.availableTitle)}>Available In</h2>
            </div>
            <div className="wPer2">
              <p className={cls("split-text white regular ", styles.textL)}
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

          </div>
        </div>
      </div>

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

                <svg vx="0px" y="0px" className='beginnings-img'
                  viewBox="0 0 300 400"
                  style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '10' }}>
                  <path id="XMLID_14_" class="stW" d="M296,4v392H4V4H296 M300,0H0v400h300V0L300,0z" />
                </svg>
                <h1 className={cls('white tl', styles.titleLarge)}>2019</h1>
                <p className={cls('white tl split-text ', styles.textM, styles.textpd1)}>
                  DK Care LLC formed in September 2019 Poughkeepsie, NY, USA by Mr.Nemal Imaduwa with
                  only seven employees and a fleet of 10 cars</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

                <svg vx="0px" y="0px" className='beginnings-img'
                  viewBox="0 0 300 400"
                  style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '10' }}>
                  <path id="XMLID_14_" class="stW" d="M296,4v392H4V4H296 M300,0H0v400h300V0L300,0z" />
                </svg>
                <h1 className={cls('white tl', styles.titleLarge)}>2020</h1>
                <p className={cls('white tl split-text ', styles.textM, styles.textpd1)}>
                  Despite the challenges posed by the Covid-19 pandemic, our company was able to
                  add 20 full-time employees and 25 vehicles to our fleet. The NEMT industry faced
                  difficulties, but we persevered.</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

                <svg vx="0px" y="0px" className='beginnings-img'
                  viewBox="0 0 300 400"
                  style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '10' }}>
                  <path id="XMLID_14_" class="stW" d="M296,4v392H4V4H296 M300,0H0v400h300V0L300,0z" />
                </svg>
                <h1 className={cls('white tl', styles.titleLarge)}>2021</h1>
                <p className={cls('white tl split-text ', styles.textM, styles.textpd1)}>
                  Despite the challenges posed by the Covid-19 pandemic, our company was able to
                  add 20 full-time employees and 25 vehicles to our fleet. The NEMT industry faced
                  difficulties, but we persevered.</p>
              </div>
            </div>

            <div className="beginnings-wrapper" >
              <div className="beginnings" >

                <svg className='beginnings-img' vx="0px" y="0px"
                  viewBox="0 0 300 400"
                  style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '10' }}>
                  <path id="XMLID_14_" class="stW" d="M296,4v392H4V4H296 M300,0H0v400h300V0L300,0z" />
                </svg>
                <h1 className={cls('white tl', styles.titleLarge)}>2022</h1>
                <p className={cls('white tl split-text ', styles.textM, styles.textpd1)}>
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
        <Image className={styles.img100small} src="/Dk-Care-LLC-about-us-1.jpg" alt="Dk-care-llc-about-us"
          width={400} height={100} />


      </div>

      <div id="company-collaborations" className={cls('pageContainer', styles.container)}>

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
                        <div className={cls(styles.jobCon,)}>
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
        <h2 className={cls('white split-text  tc con-pd ', styles.secTitle2)}>
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
          <Link href='/home'> <button><NextPageBtn /></button></Link>
          <h1 className="title white">Home</h1>
        </div>
      </div>

    </div>

  )
}
export default CompanyHTML