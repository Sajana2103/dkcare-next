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
import NumberBtn from '../how-it-works/numberBtn'

const ContactUsHTML = () => {
  return (
    <div className='page-content-wrapper'>   
       <Head>
        <title>Contact Us</title>
      </Head>
      <div id="contact-us" className={cls('blue-gr2 pageContainer', styles.container)}>

        <div className={cls('fg', styles.flex2)}>
          <h2 className={cls('split-text white pageTitle wPer40', styles.mainTitle)}>Contact Us</h2>
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
                  <div className={cls('section', styles.flex2)} style={{ flexWrap: 'wrap', }}>
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
              <div className='numberBtnWrapper'>

                <NumberBtn />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default ContactUsHTML