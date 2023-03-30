import cls from 'classnames'
import Image from "next/image"
import Link from "next/link"
import Button from "../../components/homepage/Button"
import styles from '../../src/styles/Services.module.css'
import Head from "next/head"

const ServicesHTML = () => {
 
  return (
    <div>
 <Head>
        <title>Services</title>
      </Head>
    <div id="services-intro" className={cls(styles.container)}>

      <div className={cls("gap40", styles.flex2)}>
        <div className="wPer40">
          
          <h1 className={cls("split-text blue bold text-large", styles.mainTitle)}>We are available in</h1>

          <p className={cls("text-med blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
          >We are currently adding more counties to our transportation network if your county
            is not listed here please contact us via phone or e-mail to find out more.</p>
          <br />
          <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
            <Button name="Read More" />
            <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}>Scroll down for more information</p>
          </div>
        </div>
        <Image alt="Reliability" className={styles.img50} width={400} height={100}
          src="/Dk-Care-LLC-about-us-2.jpg" />
      </div>



    </div>

    <div id="services-nemt" className={cls(styles.container)}>
      <h1 className={cls("split-text blue bold text-large", styles.mainTitle)}>NEMT Services</h1>
      <h2 style={{ paddingBottom: '4rem' }} className={cls("split-text blue semi-bold ", styles.textXL)}>Non-Emergency Medical Transportation</h2>


      <div className={cls(styles.servicesNemt)} >
        <div className={cls(styles.wPer45)}   >

          <div >
            <div className="title-bd-container hero-titles" >
              <h4 className="blue ">Transportation Services</h4>
              <div className="title-bd-blue single-line"></div>
            </div>
          </div>
          <div className={cls("flex blue bold ", styles.textS)} >
            <div className="section flex" style={{ flexWrap: 'wrap', }}>
              <div className={cls(styles.listItems, styles.tab2)}><span >01</span><h4>Doctors Appointments</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >02</span><h4 >Physical Therapy</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >03</span><h4 >Dialysis Treatment</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >04</span><h4 >Outpatient Surgery</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >05</span><h4 >Outpatient Programs</h4></div>
            </div>
            <div className="section flex" style={{ flexWrap: 'wrap' }}>
              <div className={cls(styles.listItems, styles.tab2)}><span >06</span><h4 >Dental Appointments</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >07</span><h4 >Treatment Centers</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >08</span><h4 >Optometrist Visits</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >09</span><h4 >Hospital Checkout</h4></div>
              <div className={cls(styles.listItems, styles.tab2)}><span >10</span><h4 >Emergency Room Pick Up</h4></div>
            </div>
          </div>
        </div>
        <p className={cls(" regular blue  ", styles.textL,styles.wPer45)}
        >Ensuring that everyone has access to the healthcare and other
          essential services they need.
        </p>
      </div>
    </div>

    <div id="services-types-emergencies" className={cls('blue-gr2 ', styles.container)}>
      <div className="">
        <h2 className={cls('split-text white', styles.mainTitle)}>Types of Non-Emergencies</h2>

      </div>
      <div className="">
        <div className="title-bd-container hero-titles">
          <p className="white bold">Comfort</p>
          <div className="title-bd-white" ></div>
        </div>

        <div className={cls('gap40', styles.flex2)}>
          <p className={cls("text-large white bold pdTopBtm wPer40", styles.pdTopBtm, styles.textL)}
          >Patient comfort and care is a top priority during non-medical emergency transportation.
          </p>
          <p className={cls(" semi-bold white  pdTopBtm wPer40", styles.pdTopBtm, styles.textM)}
          >Measures such as providing blankets and pillows, maintaining a comfortable temperature,
            and regularly checking on the patient&apos;s well-being can help ensure a comfortable journey.</p>
        </div>
        <div className={cls('gap40', styles.flex2)}>
          <div className={cls("wPer40", styles.flex2)} style={{ alignItems: 'center' }}>
            <Button name="Read More" />
            <p className={cls("text-med bold white  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
          </div>
          <div className={cls('wPer40')}>
            <div id="" className={cls(styles.textL)} >
              <div>
                <p className={cls(" white bd-btm textpd regular", styles.textL)} >DK Care Professional Drivers</p>
                <p className={cls(" white bd-btm textpd regular", styles.textL)} >Premium Quality Vehicles</p>
                <p className={cls(" white bd-btm textpd regular", styles.textL)} >GCP-Complaint</p>
                <p className={cls(" white bd-btm textpd regular", styles.textL)} >A Global Reference Laboratory</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="services-convenience" className={cls('', styles.container)}>
      <div className="">
        <h2 className={cls('split-text blue', styles.mainTitle)}>Where convenience meets comfort</h2>

      </div>
      <div className="">
        <div className="title-bd-container hero-titles">
          <p className="blue bold">DK Care Vehicles</p>
          <div className=" title-bd-blue" ></div>
        </div>

        <div className={cls('gap40', styles.flex2)}>
          <p className={cls("text-large blue bold pdTopBtm wPer40", styles.pdTopBtm, styles.textL)}
          >Experience modern luxury and comfort with DK Care&apos;s non-emergency medical transportation.
          </p>
          <div className={cls('wPer40')}>
            <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >
              We understand that transportation is a vital part of your healthcare journey. That&apos;s
              why we take great care in selecting and maintaining our vehicles to ensure that you have a
              comfortable and stress-free experience.
            </p>

            <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >
              Our fleet consist of modern and reliable cars that are regularly serviced and inspected to
              meet the highest safety standards.
            </p>
          </div>
        </div>
        <div className={cls('gap40', styles.flex2)}>
          <div className={cls("wPer40", styles.flex2)} style={{ alignItems: 'center' }}>
            <Button name="Read More" />
            <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textS)}>Scroll down for more information</p>
          </div>
          <div className={cls('wPer1', styles.orangeBox)}>
            <p className={cls('white semi-bold', styles.textS)}>100% Accident Free Record with
              3000+ completed Trips</p></div>
        </div>
        <Image className={styles.img100} src="/Dk-Care-LLC-about-us-1.jpg" alt="Dk-care-llc-about-us"
          width={400} height={100} />
      </div>
    </div>

    <div id="services-success" className={cls('', styles.container)}>
      <div className="">
        <h2 className={cls('split-text blue', styles.mainTitle)}>Our success depends on our drivers.</h2>

      </div>
      <div className="">
        <div className="title-bd-container hero-titles">
          <p className="blue bold">DK Care Drivers</p>
          <div className="title-bd-blue" ></div>
        </div>

        <div className={cls('gap40', styles.flex2)}>
          <p className={cls("text-large blue bold pdTopBtm wPer40", styles.pdTopBtm, styles.textL)}
          >We only hire the best and most qualified individuals to ensure you receive the highest
            level of service.
          </p>
          <div className={cls('wPer40')}>
            <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >
              Our drivers are fully licensed, insured, and undergo thorough background checks and drug
              test to ensure your safety. In addition, we carefully screen and monitor the health of our
              drivers to make sure that they are fit and healthy to drive.
            </p>

            <p className={cls(" semi-bold blue  pdTopBtm ", styles.pdTopBtm, styles.textS)}
            >
              You can rest assured that when you ride with DK Care, you are in the hands of highly trained
              professionals who are commited to your safety and well-being.
            </p>
          </div>
        </div>
        <div className={cls('gap40', styles.flex2)}>
          <div className={cls("wPer40", styles.flex2)} style={{ alignItems: 'center' }}>
            <Button name="Read More" />
            <p className={cls("text-med bold blue  pdTopBtm", styles.pdTopBtm, styles.textS)}>
              Read more about our staff</p>
          </div>

        </div>
        <Image className={styles.img100} width={400} height={100} src="/Dk-Care-LLC-customers-4.jpg"
          alt="Patient comfort and care" />
      </div>
    </div>

    <div id="services-safety" className={cls('blue-gr2 ', styles.container)}>
      <div className={cls("gap40", styles.flex2)}>
        <div className="wPer2">
          <h2 className={cls('split-text white', styles.mainTitle)}>Safety Protocols & Equipment</h2>

        </div>
        <div className="wPer40">
          <div className="title-bd-container hero-titles">
            <p className="white bold">Comfort</p>
            <div className="title-bd-white" ></div>
          </div>
          <p className={cls("text-large white bold pdTopBtm", styles.pdTopBtm, styles.textL)}
          >We have implemented rigorous safety protocols and invested in top-of-the-line
            equipment to ensure that you have a safe and secure journey.
          </p>
          <p className={cls(" regular white  pdTopBtm", styles.pdTopBtm, styles.textS)}
          >Our drivers are trained to follow strict safety protocols, including regular vehicle
            inspections, adherence to traffic rules, and defensive driving techniques</p>
          <p className={cls(" regular white  pdTopBtm", styles.pdTopBtm, styles.textS)}
          >We take every precaution to ensure that you arrive at your destination safely and
            without incident.
          </p>
        </div>
      </div>
      <Image className={styles.img100} width={400} height={100} src="/Dk-Care-LLC-customers-4.jpg"
        alt="Patient comfort and care" />
    </div>


    <div id="exp-covid" className={cls('blue-gr2 ', styles.container)}>
      <div className={cls("gap40", styles.flex2)}>
        <h2 className={cls('split-text white', styles.mainTitle)}>Covid Prevention Guidelines</h2>

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
              <h2 className="white">Thorough Sanitization</h2>
              <div className="title-bd-white"></div>
            </div>
            <p className="text-med" style={{ paddingRight: '1rem' }}>
              We take sanitization seriously and ensure that our vehicles are thoroughly
              cleaned and disinfected before and after each trip.
            </p>
            <br />
            <p className="text-small">We pay special attention to hight-touch
            surfaces such as door handles, seat belts, and armrests to ensure that they
            are free from harmful bacteria and viruses.
            </p>
          </div>
          <br />
          <div className="wPer1 white exp-text-boxes">

            <div className="title-bd-container hero-titles">
              <h2 className="white">Personal Protective Equipment</h2>
              <div className="title-bd-white"></div>
            </div>

            <p className="text-med">
              (PPE) Our Drivers wear masks and gloves during each trip to prevent the spread
              of COVID-19.
            </p>
            <br />
            <p className="text-small">We also provide masks and hand sanitizer for our customers,
            and encourage them to wear masks during their trips to help minimize the risk
            of transmission.
            </p>
          </div>
          <br />
          <div className="wPer1 white exp-text-boxes">
            <div className="title-bd-container hero-titles">
              <h2 className="white">Social Distancing</h2>
              <div className="title-bd-white"></div>
            </div>
            <p className="text-med">
              To help prevent the spread of COVID-19, we follow social distancing
              guidelines and limit the number of passengers in our vehicles to ensure 
              adequate spacing.
            </p>
            <br />
            <p className="text-small">
              This helps to reduce the risk of transmission between passengers and ensures
              everyone can travel safely.
            </p>
          </div>
          <br />
          <div className="wPer1 white exp-text-boxes">

            <div className="title-bd-container hero-titles">
              <h2 className="white">Employee Health & Safety</h2>
              <div className="title-bd-white"></div>
            </div>

            <p className="text-med">
              We take the health and safety of our employees seriously and ensure that 
              they are healthy and fit to work before each shift.
            </p>
            <br />
            <p className="text-small">
              We also provide an overview of their health and encourage them to safety
              home if they feel unwell or have been in contact with someone who has tested positive for
              COVID-19.
            </p>
          </div>
          <br />
        </div>
      </div>

      <div id="" className="nextBtn">
        <Link href='/technologies'> <button><Image alt="Dk Care LLC " width={50} height={50} src="/right-arrow.svg" /></button></Link>
        <h1 className="title white">Technologies</h1>
      </div>
    </div>


  </div>
  )
}
export default ServicesHTML