
import PageWrapper from "../../components/page-wrapper"
import cls from 'classnames'
import styles from '../styles/Expertise.module.css'
import Image from "next/image"
import Button from "../../components/homepage/Button"
const Expertise = () => {
  let title = "Expertise"
  let page =
    <div >
      <div id="exp-intro" className={cls(styles.container)}>

        <h1 className={cls(" blue bold text-large", styles.mainTitle)}>Our Expertise</h1>
        <div className={cls("gap40", styles.flex2)}>
          <p className={cls("text-large blue bold wPer40 pdTopBtm", styles.pdTopBtm, styles.textL)}>We provide a vital lifeline
            for individuals who need to get to medical appointments.</p>
          <p className={cls("text-med semi-bold blue wPer40 pdTopBtm", styles.pdTopBtm, styles.textM)}>Ensuring that everyone has access to the healthcare and other
            essential services they need.</p>

        </div>
        <Image className={styles.img100} src="/Dk-Care-LLC-about-us-1.jpg" alt="Dk-care-llc-about-us"
          width={400} height={100} />
        <br />
        <div className={cls(styles.marText5)}>

          <h2 className={cls("blue bold ", styles.textL)} >Non-Emergency Medical Transportation(NEMT) covers
            all transportation services provided to patients not in an emergency situation.
          </h2>
          <br />
          <h4 className={cls("blue semi-bold wPer3", styles.textM)} >NEMT is most often utilized by
            eligible Medicaid and Medicare members requesting a ride to their
            medical appointment or the pharmacy.</h4>
        </div>
      </div>

      <div id="exp-reliability " className={cls(styles.container)}>
        <h2 className={cls('blue', styles.secTitle)}>Reliability</h2>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer40">
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >Dedicated to ensure that our customers have a positive
              experience from the moments they book their ride to the
              moments they are dropped at their destination.</p>
            <p className={cls("text-med semi-bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We understand that working with multiple transportation providers can be frustrating, which is why
              we strive to provide a seamless and high-quality experience from start to finish.</p>
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls('blue bold')}>Read more on our services page.</p>
            </div>
          </div>
          <Image alt="Reliability" className={styles.img50} width={400} height={100} src="/Dk-Care-LLC-about-us-2.jpg" />
        </div>

      </div>

      <div id="exp-passenger-safety " className={cls(styles.container)}>
        <h2 className={cls('blue', styles.secTitle)}>Passenger Safety</h2>
        <div className={cls("gap40", styles.flex2)}>
          <Image className={styles.img50} width={400} height={100} src="/Dk-Care-LLC-customers-1.jpg"
            alt="passenger safety" />

          <div className="wPer40">
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >Key Benefit of DK Care transportation service is safety. Our well trained drivers
              have undergone extensive training to provide a safe and comfortable ride.</p>
            <p className={cls("text-med semi-bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We understand that working with multiple transportation providers can be frustrating, which is why
              we strive to provide a seamless and high-quality experience from start to finish.</p>
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls('blue bold')}>Read more on our services page.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="exp-autonomy " className={cls(styles.container)}>
        <h2 className={cls('blue', styles.secTitle)}>Autonomy</h2>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer40">
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >We help individuals to maintain their autonomy and independence.
              Rather than relying on friends or family members to drive them to appointments
              or other destinations.
            </p>
            <p className={cls("text-med semi-bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We understand that working with multiple transportation providers can be frustrating, which is why
              we strive to provide a seamless and high-quality experience from start to finish.</p>
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls('blue bold')}>Read more on our services page.</p>
            </div>
          </div>
          <Image alt="Autonomy" className={styles.img50} width={400} height={100} src="/Dk-Care-LLC-customers-2.jpg" />
        </div>

      </div>

      <div id="exp-convenience" className={cls(styles.container)}>
        <h2 className={cls('blue', styles.secTitle)}>Convenience</h2>
        <div className={cls("gap40", styles.flex2)}>
          <Image className={styles.img50} width={400} height={100} src="/Dk-Care-LLC-customers-3.jpg"
            alt="Convenience" />

          <div className="wPer40">
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >DK Care Non-Emergency Medical Transportation (NEMT) services allow individuals to access the medical care
              they need, regardless of their ability to drive or use public transportation.
            </p>
            <p className={cls("text-med semi-bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We understand that working with multiple transportation providers can be frustrating, which is why
              we strive to provide a seamless and high-quality experience from start to finish.</p>
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls('blue bold')}>Read more on our services page.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="exp-patient-comfort-care" className={cls('blue-gr2 ', styles.container)}>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer2">
            <h2 className={cls('white', styles.mainTitle)}>Patient Comfort and Care</h2>

          </div>
          <div className="wPer40">
            <div className="title-bd-container hero-titles">
              <p className="white bold">Comfort</p>
              <div className="title-bd-white" ></div>
            </div>
            <p className={cls("text-large white bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >Patient comfort and care is a top priority during non-medical emergency transportation.
            </p>
            <p className={cls(" semi-bold white  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >Measures such as providing blankets and pillows, maintaining a comfortable temperature,
              and regularly checking on the patient's well-being can help ensure a comfortable journey.</p>
          </div>
        </div>
        <Image className={styles.img100} width={400} height={100} src="/Dk-Care-LLC-customers-4.jpg"
          alt="Patient comfort and care" />
      </div>

      <div id="exp-collaborations" className={cls(styles.container)}>

        <h1 className={cls(" blue bold text-large", styles.mainTitle)}>Collaborations with Healthcare</h1>
        <div className="title-bd-container hero-titles ">
          <p className="blue bold">Comfort</p>
          <div className="title-bd-blue" ></div>
        </div>
        <div className={cls("gap40", styles.flex2)}>
          <p className={cls("text-large blue bold wPer40 pdTopBtm", styles.pdTopBtm, styles.textL)}
          >Patient comfort and care is a top priority during non-medical emergency transportation.

          </p>
          <p className={cls("text-med semi-bold blue wPer40 pdTopBtm", styles.pdTopBtm, styles.textM)}
          >Ensuring that everyone has access to the healthcare and other
            essential services they need.
          </p>

        </div>

        <br />
        <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
          <Button name="Read More" />
          <p className={cls('blue bold')}>Read more on our services page.</p>
        </div>
        <div className={cls(styles.container2)}>
        <p className={cls('blue text-large ', styles.pdTopBtm)} style={{textAlign:'center',}}>Ensuring that everyone has access to the healthcare and other
            essential services they need.</p>
            <div className={cls(styles.collab)}>
          <div ><Image src="/logo.png" className={cls(styles.collabImg)} width={100} height={100}/></div>
          <div><Image src="/logo.png" className={cls(styles.collabImg)} width={100} height={100}/></div>
          <div><Image src="/logo.png" className={cls(styles.collabImg)} width={100} height={100}/></div>
          <div><Image src="/logo.png" className={cls(styles.collabImg)} width={100} height={100}/></div>

        </div>
        </div>
        
      </div>

      <div id="serving" className={cls('blue-gr2 ', styles.container)}>
        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer2">
            <h2 className={cls('white', styles.mainTitle)}>Serving To A Diverse Community</h2>

          </div>
          <div className={cls(styles.flex2)}>
           
            <p className={cls(" white semi-bold pdTopBtm wPer2", styles.pdTopBtm, styles.textM)}
            >We believe that diversity is one of our greatest strenghts, and we are commited to building a 
            team that reflects the communities we serve.
            </p>
            <br/>
            <p className={cls(" white semi-bold pdTopBtm wPer2", styles.pdTopBtm, styles.textM)}
            >
            Our drivers and staff are chosen for their kindness, compassion, and commitment to providing
            the highest level of care to our customers.
            </p>
            <p className={cls("text-small semi-bold white  pdTopBtm wPer2", styles.pdTopBtm, styles.textS)}
            >We are here to make your transportation experience as comfortable and stress-free as possible,
            and to nesure that you have the support you need to get to and from your medical appointments.
            </p>
            <br/>
            
            <p className={cls("text-small semi-bold white  pdTopBtm wPer2", styles.pdTopBtm, styles.textS)}
            >Thank you for considering DK Care for your transportation needs. We look forwards to serving and helping
            you get to and from your appointments safely and comfortably.
              </p>
          </div>
        
        </div>
        <div id="" className="nextBtn">
        <button><img src="/right-arrow.svg"/></button>
        <h1 className="title white">Services</h1>
        </div>
      </div>

    </div>




  return (
    <PageWrapper title={title} page={page} />
  )
}
export default Expertise