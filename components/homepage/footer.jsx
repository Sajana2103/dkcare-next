import React, { useEffect, useRef } from "react";
import Button from "./Button.js";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother.js";
const Footer = ({ setPageName, openModal }) => {
  const footerRef = useRef()
  const router = useRouter()
  const pathname = useRef()
  const smoothScroll = useRef()
  const footerLinks = [
    {
      title:'Expertise',
      pathname:'/expertise',
        ids:[
          {id:'#exp-intro',name:'Our Expertise'},
          {id:'#exp-reliability',name:'Reliability'},
          {id:'#exp-passenger-safety',name:'Passenger Safety'},
          {id:'#exp-autonomy',name:'Autonomy'},
          {id:'#exp-convenience',name:'Convenience'},
          {id:'#exp-patient-comfort-care',name:'Patient Comfort and Care'},
          {id:'#exp-collaborations',name:'Collaborations with Healthcare'},
          {id:'#exp-serving',name:'Serving to A Diverse Community'},
        ]
    },
    {
      title:'Services',
      pathname:'/services',
        ids:[
          {id:'#services-intro',name:'Available In'},
          {id:'#services-nemt',name:'NEMT Services'},
          {id:'#services-types-emergencies',name:'Types of Non-Emergencies'},
          {id:'#services-convenience',name:'Where convenience meets comfort'},
          {id:'#services-success',name:'DK Care Drivers'},
          {id:'#services-safety',name:'Safety Protocols & Equipment'},
          {id:'#services-covid',name:'Covid Prevention Guidelines'},
        ]
    },
    {
      title:'Technologies',
      pathname:'/technologies',
        ids:[
          {id:'#technologies-intro',name:'Efficient NEMT Technologies'},
          {id:'#technologies-nemt',name:'Our Technologies'},
          {id:'#technologies-ai-powered',name:'AI-Powered Dash Camera'},
          {id:'#technologies-improved-driver',name:'Improved Driver Productivity'},
          {id:'#technologies-location-monitoring',name:'GPS Location Monitoring'},
          {id:'#technologies-downtime-preventive',name:'Downtime Preventive Strategies'},
          {id:'#technologies-additional-nemt',name:'Additional NEMT Technologies'},
        ]
    },
    {
      title:'How It Works',
      pathname:'/how-it-works',
        ids:[
          {id:'#how-intro',name:'How it works?'},
          {id:'#how-eligible',name:'Who is Eligible?'},
          {id:'#how-ride',name:'Get a Ride?'},
          {id:'#how-faq',name:'FAQ'},
          {id:'#how-getInTouch',name:'Get In Touch'},
        ]
    },
    {
      title:'Company',
      pathname:'/company',
        ids:[
          {id:'#companyIntro1',name:'DK Care LLC'},
          {id:'#company-about',name:'About DK Care'},
          {id:'#company-availableIn',name:'Available In'},
          {id:'#company-humble-beginnings',name:'Humble Beginnings'},
          {id:'#company-collaborations',name:'Collaborations'},
          {id:'#company-careers',name:'Work With Us'},
          {id:'#company-solutions',name:'Our Dedication'},

        ]
    }
  ]
  useEffect(() => {
    if(footerRef.current){
      pathname.current = router
      console.log('footer pathname',pathname) 
    }
  },[])

  return (
    <footer ref={footerRef} id="footer"
      className="main-section blue-gr2 con-pd" >
      <a id="footer-anchor"></a>
   

      <div id="footer-content" className="">

        <div className="footer-title ">
         
          <h2 className="white semi-bold" >
            We are here to support you.
          </h2>

          <div name="contact" className="wPer3" onClick={() => {
            setPageName({ pageName: 'contact', location: 'home' })
            openModal('home')
          }}>
            <Button name={'Contact us'} />
          </div>
          <p className="white text-small semi-bold">A member of our team will contact
            you shortly.
            </p>
        </div>

        <div className="links flex-container ">
          {
             footerLinks.map((link,linkIdx) => {
              return(
                <div key={linkIdx} className="semi-bold link-box wPer20" >
<p className="white text-med">
              {link.title}
            </p>
            <br />
                {
                  link.ids.map((ids,idsIdx) => {
                    return(
                      <div onClick={() => 
                        {
                          if(!smoothScroll.current)smoothScroll.current = ScrollSmoother.get()

                          if(pathname.current.pathname===link.pathname && smoothScroll.current){
                            console.log('onClick',pathname.current)
                            smoothScroll.current.scrollTo(ids.id,1,'top top')
                            return
                          }
                        }}>
                        <Link key={idsIdx} href={`${link.pathname}/${ids.id}`} scroll={false} target="_top">
                        <p className="link">
                          {ids.name}
                        </p>
                        </Link>
                        </div>
                    )
                  })
                }
                </div>
                
              )
            })
          }
          {/* <div className="semi-bold link-box wPer20" >
            <p className="white text-med">
              Expertise
            </p>
            <br />
            <p className="link">
              Available Locations
            </p>
            <p className="link">
              NEMT Services
            </p>
            <p className="link">
              Types of Non-Emergencies
            </p>
            <p className="link">
              Passenger Safety
            </p>
            <p className="link">
              Dk Care Vehicles
            </p>
            <p className="link">
              Dk Care Staff
            </p>
          </div> */}
          {/* <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              Services
            </p>
            <br />
         
            <p className="link">
              Patient Comfort And Care
            </p>
            <div onClick={() => 
            {
              if(pathname.current.pathname==="/services" && smoothScroll.current){
                // console.log('onClick',pathname.current)
                smoothScroll.current.scrollTo('#services-safety',1,'top top')
                return
              }
            }}>
            <Link href='/services/#services-safety' scroll={false} target="_top">
            <p className="link">
              Safety Protocols & Equipment
            </p>
            </Link>
            </div>
            <p className="link">
              Patient Privacy & Confidentiality
            </p>
            <p className="link">
              Collaborations With Healthcare
            </p>
            <p className="link">
              Serving To A Diverse Community
            </p>
            <p className="link">
              Covid19 Prevention Guidelines
            </p>
          </div> */}
          {/* <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              Technologies
            </p>
            <br />
            <p className="link">
              GPS Location Tracking
            </p>
            <p className="link">
              Scheduling and  Monitoring
            </p>
            <p className="link">
              AI-powered Dash Camera
            </p>
            <p className="link">
              Serving To A Diverse Community
            </p>
          </div> */}
          {/* <div className="semi-bold  link-box wPer20" >
            <p className="white text-med">
              How it works
            </p>
            <br />
            <p className="link">
              Who is Eligible
            </p>
            <p className="link">
              How can I get a ride
            </p>
            <p className="link">
              FAQ
            </p>
            <p className="link">
              Helpful Resources
            </p>
          </div> */}
          {/* <div className="semi-bold link-box wPer20" >
            <p className="white text-med">
              Company
            </p>
            <br />
            <p className="link">
              About
            </p>
            <p className="link">
              History
            </p>
            <p className="link">
              Culture
            </p>
            <p className="link">
              Mission
            </p>
            <p className="link">
              Careers
            </p>
          </div> */}

        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex-container wrap" >

        <p className="text-med white" style={{ width: '90%' }}>2023 C DK CARE LLC</p>
        <p className="text-med white" style={{ textAlign: 'right' }}>Made by XYZ</p>
      </div>
      <br />
      <hr />
    </footer>
  )
}

export default Footer