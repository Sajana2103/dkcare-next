import cls from 'classnames'
import Image from "next/image"
import Link from "next/link"
import Button from "../../homepage/Button"
import styles from '../../../src/styles/Pages.module.css'
import Head from "next/head"
import NextPageBtn from '../../svg-components/nextpage-btn'
import { customLoader } from '../custom-loader'

const TechnologiesHTML = () => {

  return (
    <div className='page-content-wrapper'>
      <Head>
        <title>Technologies</title>
      </Head>
      <div id="technologies-intro" className={cls('pageContainer',styles.container)}>

        <div className={cls("", styles.flex2)}>
          <div className="wPer47">

            <h1 className={cls("split-text-small blue bold text-large pageTitle", styles.techMainTitle)}>Efficient NEMT Technologies</h1>

            <p className={cls("text-med blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >Technologies improve driver productivity and safety, ensure on-time arrival, and
              reduce the risk of accidents and vehicle breakdowns. Overall, they enhance the quality of transportation
              service.
            </p>
            <br />
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}>Scroll down for more information</p>
            </div>
          </div>
          <Image loader={customLoader} alt="Reliability" className={cls('wPer47',styles.techMainImg)} width={400} height={100}
            src="/images/technologies/technologies-main-image.png" />
        </div>
      </div>

      <div id="technologies-nemt" className={cls('pageContainer',styles.container)}>
        <h1 className={cls("split-text blue bold text-large pageTitle", styles.mainTitle)}>Our Technologies</h1>
        <h2 style={{ paddingBottom: '4rem' }} className={cls("split-text-small blue semi-bold ", styles.textXL)}
        >Non-Emergency Medical Transportation</h2>


        <div className={cls('fg5',styles.servicesNemt)} >
          <div className={cls('wPer47',)}   >


            <div id='' className={cls(" blue semi-bold ",styles.flex2, styles.ourTechnologies, styles.textS)} >
              <div className={cls('section',styles.flex2, )} style={{ flexWrap: 'wrap', }}>
                <div className={cls('bd-btm-blue2 semi-bold', styles.textL, styles.listItems, styles.tab2)}><h4>Doctors Appointments</h4><span >&gt;</span></div>
                <div className={cls('bd-btm-blue2 semi-bold', styles.textL, styles.listItems, styles.tab2)}><h4 >Physical Therapy</h4><span >&gt;</span></div>
                <div className={cls('bd-btm-blue2 semi-bold', styles.textL, styles.listItems, styles.tab2)}><h4 >Dialysis Treatment</h4><span >&gt;</span></div>
                <div className={cls('bd-btm-blue2 semi-bold', styles.textL, styles.listItems, styles.tab2)}><h4 >Outpatient Surgery</h4><span >&gt;</span></div>
              </div>

            </div>
          </div>
          <p className={cls(" semi-bold blue wPer47 ", styles.textL,)}
          >NEMT is most often utilized by eligible Medicaid and Medicare memebers
            requesting a ride to their medical appointments.
          </p>
        </div>
      </div>

      <div id="technologies-ai-powered" className={cls('blue-gr2 pageContainer', styles.container)}>
        <div className="">
          <h2 className={cls('split-text white pageTitle', styles.mainTitle)}>AI-Powered Dash Camera</h2>

        </div>
        <div className="">
          <div className="title-bd-container hero-titles">
            <p className="white bold">Comfort</p>
            <div className="title-bd-white" ></div>
          </div>

          <div className={cls('fw flex', styles.fg2)}>
            <div className='wPer2' >
              <p className={cls("text-large white bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
              >Equipped with advanced computer vision and artificial intelligence to detect
                and analyze data in real-time.
              </p>
              <p className={cls(" semi-bold white  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >These cameras are designed to capture footage of the road ahead and provide
                drivers with real-time alerts about potential hazards, such as pedestrians
                or other vehicles.
              </p>
              <div className={cls("fw flex ",)} style={{ alignItems: 'center' }}>
                <Button name="Read More" />
                <p className={cls("text-med bold white  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
              </div>

            </div>
            <div className='wPer40' >
              <p className={cls("text-large white bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
              >Improving driver safety, AI-powered dash cameras also help to reduce the risk
                of accidents and incidents by providing an additional layer of oversight and accountability.
              </p>
              <p className={cls(" semi-bold white  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >This footage can be used to investigate accidents and incidents, verify compliance with safety
                protocols, and provide evidence in legal disputes.
              </p>
              <p className={cls(" semi-bold white  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >Powered by NextBase
              </p>
            </div>
          </div>
          <div className={cls(styles.aiPoweredImg)}>

            <Image className={cls(styles.aiPoweredImg1)} src="/images/technologies/F2NfDCJv_4x.png" alt="Dk-care-llc-about-us"
              width={400} height={100} />
            <div className={cls(styles.aiPoweredImgGap)}></div>
            <Image className={cls(styles.aiPoweredImg2)} src="/images/technologies/aiPowered2.png" alt="Dk-care-llc-about-us"
              width={400} height={100} />
          </div>
        </div>
      </div>

      <div id="technologies-improved-driver" className={cls('pageContainer', styles.container)}>
        <div className="">
          <h2 className={cls('split-text blue pageTitle', styles.mainTitle)}>Improved Driver Productivity</h2>

        </div>
        <div className="">
          <div className="title-bd-container hero-titles">
            <p className="blue bold">DK Care Vehicles</p>
            <div className=" title-bd-blue" ></div>
          </div>

          <div className={cls('fw flex', styles.fg2)}>
            <div className='wPer2' >
              <p className={cls("text-large blue bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
              >Equipped with advanced computer vision and artificial intelligence to detect
                and analyze data in real-time.
              </p>
              <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >These cameras are designed to capture footage of the road ahead and provide
                drivers with real-time alerts about potential hazards, such as pedestrians
                or other vehicles.
              </p>
              <div className={cls("fw flex ",)} style={{ alignItems: 'center' }}>
                <Button name="Read More" />
                <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
              </div>

            </div>
            <div className='wPer40' >
              <p className={cls("text-large blue bold pdTopBtm ", styles.pdTopBtm, styles.textL)}
              >Improving driver safety, AI-powered dash cameras also help to reduce the risk
                of accidents and incidents by providing an additional layer of oversight and accountability.
              </p>
              <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >This footage can be used to investigate accidents and incidents, verify compliance with safety
                protocols, and provide evidence in legal disputes.
              </p>
              <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >Powered by Netradyne
              </p>
            </div>
          </div>
          <div className={cls(styles.aiPoweredImg)}>

            <Image className={cls(styles.aiPoweredImg1)} src="/images/technologies/1.png" alt="Dk-care-llc-about-us"
              width={400} height={100} />
            <div className={cls(styles.aiPoweredImgGap)}></div>
            
            <Image className={cls(styles.aiPoweredImg2)} src="/images/technologies/2.png" alt="Dk-care-llc-about-us"
              width={400} height={100} />
          </div>
        </div>
      </div>

      <div id="technologies-location-monitoring" className={cls('blue-gr2 pageContainer', styles.container)}>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer2">
            <h2 className={cls('split-text white pageTitle', styles.mainTitle)}>GPS Location Monitoring</h2>
            <div className={cls("fw flex ",)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls("text-med bold white  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
            </div>
          </div>
          <div className="wPer40">
            <div className="title-bd-container hero-titles">
              <p className="white bold">Comfort</p>
              <div className="title-bd-white" ></div>
            </div>
            <p className={cls("text-large white bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >DK Care dispatchers can track the location of all our vehicles in real-time, allowing
              to manage trips more efficiently and respond quickly to any issues that may arise.
            </p>
            <p className={cls(" regular white  pdTopBtm", styles.pdTopBtm, styles.textS)}
            >Helps ensure timely arrivals and departures for passengers, but it also helps optimize routes,
              reduce fuel consumption, and minimize vehicle wear and tear.</p>
            <p className={cls(" regular white  pdTopBtm", styles.pdTopBtm, styles.textS)}
            >GPS location monitoring is a key technology for NEMT providers, enabling them to deliver
              safe, efficient, and reliable transportation services to their customers.
            </p>
          </div>
        </div>
        <div className={cls(styles.aiPoweredImg)}>

          <Image className={cls(styles.aiPoweredImg1)} src="/images/technologies/3.png" alt="Dk-care-llc-about-us"
            width={400} height={100} />
          <div className={cls(styles.aiPoweredImgGap)}></div>
          <Image className={cls(styles.aiPoweredImg2)} src="/images/technologies/4.png" alt="Dk-care-llc-about-us"
            width={400} height={100} />
        </div>
      </div>

      <div id="technologies-downtime-preventive" className={cls('pageContainer', styles.container)}>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer2">
            <h2 className={cls('split-text blue pageTitle', styles.mainTitle)}>Downtime Preventive Strategies</h2>
            <div className={cls("fw flex ",)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
            </div>
          </div>
          <div className="wPer40">
            <div className="title-bd-container hero-titles">
              <p className="blue bold">Comfort</p>
              <div className="title-bd-blue" ></div>
            </div>
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >Tracking important vehicle data such as fuel usage, vehicle maintenance histroy,
            and mean distance between failures is critical to maintaining efficiency and reliability.
            </p>
            <p className={cls(" regular blue  pdTopBtm", styles.pdTopBtm, styles.textS)}
            >Easier to identify when maintenance is needed, and repairs can be scheduled in advance. This
            helps prevent unexpected breakdowns and costly repairs, which can cause delays in transportation services.</p>
            <p className={cls(" regular blue  pdTopBtm", styles.pdTopBtm, styles.textS)}
            >Additionally, downtime preventive strategies help ensure that NEMT vehicles are always in optimal
            condition, allowing them to deliver the best possible service to clients.
            </p>
          </div>
        </div>
        <div className={cls(styles.aiPoweredImg)}>

          <Image className={cls(styles.aiPoweredImg1)} src="/images/technologies/5.png" alt="Dk-care-llc-about-us"
            width={400} height={100} />
          <div className={cls(styles.aiPoweredImgGap)}></div>
          <Image className={cls(styles.aiPoweredImg2)} src="/images/technologies/6.png" alt="Dk-care-llc-about-us"
            width={400} height={100} />
        </div>
      </div>

      <div id="technologies-additional-nemt" className={cls('blue-gr2 pageContainer', styles.container)}>
          <h2 className={cls('split-text white tc pageTitle', styles.mainTitle)}>Additional NEMT technologies we
          are implementing</h2>
        <div className={cls("gap40", styles.flex2)}>

          <div className={cls('gap40', styles.flex2)}>
            <div className=" wPer40">
              <p className={cls(" white semi-bold pdTopBtm", styles.pdTopBtm, styles.textM)}
              >We understand importance of preventing the spread of COVID-19. That&apos;s why
                we have implemented rigorous safety protocols to keep our customers and staff safe.
              </p>
              <br />
              <p className={cls(" white semi-bold pdTopBtm ", styles.pdTopBtm, styles.textM)}
              >
                We thoroughly sanitize and disinfect our vehicles before and after each trip, and our
                drivers wear masks and gloves to minimize the risk of transmission.
              </p>
            </div>
            <div className="wPer40">
              <p className={cls("text-small regular white  pdTopBtm ", styles.pdTopBtm, styles.textS)}
              >In addition, we follow social distancing guidelines and limit the number of passengers
                in our vehicles to ensure adequate spacing. We also provide hand sanitizer and encourage
                our customers to wear masks during their trips.
              </p>
              <br />

              <p className={cls("text-small regular white  pdTopBtm ", styles.pdTopBtm, styles.textS)}
              >Rest assured that when you ride with DK Care, you can have peace of mind knowing that we
                are doing everything we can to prevent the spread of COVID-19
              </p>
            </div>
          </div>

        </div>

        <div className="expertise-wrapper-2 " >

          <div className="flex-container wrap " style={{ paddingTop: '4rem' }} >

            <div className="wPer1 white exp-text-boxes"  >

              <div className="title-bd-container hero-titles">
                <h2 className="white">Electronic Health Records &#40;EHR&#41;</h2>
                <div className="title-bd-white"></div>
              </div>
              <p className="text-med" style={{ paddingRight: '1rem' }}>
                Allows for seamless integration between the transportation provider and
                healthcare providers.
              </p>
              <br />
              <p className="text-small">Enabling real-time access to medical records and reducing
              the risk of miscommunication. They are free from harmful bacteria and viruses.
              </p>
            </div>
            <br />
            <div className="wPer1 white exp-text-boxes">

              <div className="title-bd-container hero-titles">
                <h2 className="white">Mobile Apps</h2>
                <div className="title-bd-white"></div>
              </div>

              <p className="text-med">
                 Mobile apps can provide users with real-time information about their ride,
                 estimated time of arrival and the driver&apos;s location.
              </p>
              <br />
              <p className="text-small">They also allow users to book rides, track their ride history,
              and rate their driver mission.
              </p>
            </div>
            <br />
            <div className="wPer1 white exp-text-boxes">
              <div className="title-bd-container hero-titles">
                <h2 className="white">Booking and Ride Sharing</h2>
                <div className="title-bd-white"></div>
              </div>
              <p className="text-med">
                On-demand ride sharing models that allow multiple passengers to share a single vehicle.
              </p>
              <br />
              <p className="text-small">
                This can be more cost-effective for passengers and can help reduce traffic congestion and emissions.
              </p>
            </div>
            <br />
            <div className="wPer1 white exp-text-boxes">

              <div className="title-bd-container hero-titles">
                <h2 className="white">In-Vehicle Wi-Fi</h2>
                <div className="title-bd-white"></div>
              </div>

              <p className="text-med">
                Providing passengers with in-vehicle Wi-Fi can improve the passenger experience
                and make it easier for them to stay connected during transport.
              </p>
              <br />
              <p className="text-small">
                This can be particularly useful for longer trips or for passengers who need
                to work or stay in touch with family members.
              </p>
            </div>
            <br />
          </div>
        </div>

        <div id="" className="nextBtn">
          <Link href='/how-it-works'> <button><NextPageBtn/></button></Link>
          <h1 className="title white">How It Works</h1>
        </div>
      </div>


    </div>
  )
}
export default TechnologiesHTML