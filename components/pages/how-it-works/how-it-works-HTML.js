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

const HowItWorksHTML = () => {
  const howRef = useRef()

  function setupFaq() {
    let questionBoxes = document.querySelectorAll('.questionBox')
    let answers = document.querySelectorAll('.answer')

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
            defaults: { duration: 0.5, ease: 'Power4.easeIn' },
            onReverseComplete: () => faqTl.revert()
          })
          faqTl
            .pause()
            .to(q, { backgroundColor: 'white' }, '<')
            .to(question, { color: 'var(--blue)' }, '<')
            .to(number, { border: 'var(--blue) 1px solid', color: 'var(--blue)' }, '<')
            .fromTo(smallTitle[0], { opacity: 0 }, { opacity: 1 })
            .fromTo(smTitleLine, { width: '0px' }, { width: 'auto' },'<')
            .to(bdBtm[0], { width: 'auto' }, '<')
            .fromTo(answers[idx], { height: '0px' }, { height: 'auto', })
        }
        if (!clicked) {
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
          <div id="company-intro" >

            <div className={cls('', styles.container)}>
              <h1 className={cls("split-text blue bold text-large pageTitle", styles.mainTitle)}>How it works?</h1>


              <h2 className={cls('blue semi-bold', styles.textXL)}>It&apos;s simple...</h2>
              <div className={cls('', styles.flex2, styles.pdTopBtm)}>
                <div className={cls("gap40 wPer40", styles.callus)}>
                  <div className={cls('', styles.flex2, styles.pdTopBtm)}>
                    <p className={cls('white semi-bold', styles.orangeBox2, styles.textM)}>You</p>
                    <p style={{ paddingLeft: '0.5rem' }} className={cls('darkBlack semi-bold', styles.textM)}>Call your insurance provider</p>
                  </div>
                  <h2 className={cls('blue semi-bold', styles.textXL)}>Schedule</h2>
                  <p className={cls("darkBlack regular  ", styles.pdTopBtm, styles.textS)}>
                    Serve upstate counties in New York with reliable, safe and convenient transportation.</p>

                </div>
                <div className={cls("gap40 wPer40", styles.callus)}>
                  <div className={cls('', styles.flex2, styles.pdTopBtm)}>
                    <p className={cls('white semi-bold', styles.orangeBox2, styles.textM)}>DK Care</p>
                    <p style={{ paddingLeft: '0.5rem' }} className={cls('darkBlack semi-bold', styles.textM)}>
                      Will take care of
                    </p>
                  </div>
                  <h2 className={cls('blue semi-bold', styles.textXL)}>Pickup &gt; Return</h2>
                  <p className={cls("darkBlack regular  ", styles.pdTopBtm, styles.textS)}>
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
          <Image className={cls('', styles.img100small2)} src="/Dk-Care-LLC-about-us-1.jpg" alt="Dk-care-llc-about-us"
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
                  <div className={cls('section',styles.flex2, )} style={{ flexWrap: 'wrap', }}>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4>Doctors Appointments</h4><span >&gt;</span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >Medicaid.Gov</h4><span >&gt;</span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >United Healthcare</h4><span >&gt;</span></div>
                    <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >Nascentia Health</h4><span >&gt;</span></div>
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
              <div  className={cls(styles.pdTopBtm)} >

                <p className={cls('darkBlack semi-bold', styles.textM, styles.pdTopBtm)}>
                  You can always call us for support
                </p>
                <div style={{display:'grid',alignItems:'center',height:'20vh'}}>
     
                    <NumberBtn/>
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
          <Image className={styles.img100small} src="/Dk-Care-LLC-about-us-1.jpg" alt="Dk-care-llc-about-us"
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
{/* END OF FAQ */}
      </div>

      <div id="how-getInTouch" className={cls('blue-gr2 pageContainer', styles.container)}>
        <h2 className={cls('split-text white tc ', styles.pdTopBtm, styles.secTitle2)}>
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
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4>Doctors Appointments</h4><span >&gt;</span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >Medicaid.Gov</h4><span >&gt;</span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >United Healthcare</h4><span >&gt;</span></div>
                        <div className={cls('bd-btm-blue2 semi-bold', styles.textM, styles.listItems, styles.tab2)}><h4 >Nascentia Health</h4><span >&gt;</span></div>
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
        <div id="" className="nextBtn">
          <Link href='/company'> <button><NextPageBtn /></button></Link>
          <h1 className="title white">Company</h1>
        </div>
      </div>



    </div>
  )
}
export default HowItWorksHTML