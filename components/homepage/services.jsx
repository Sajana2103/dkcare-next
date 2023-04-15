import Image from "next/image.js";
import React from "react";
import Button from "./Button.js";

const Services = ({ setPageName, openModal }) => {
  return (
    <div className="main-section blue-gr2" id="services" >
      <a id="services-anchor"></a>

      <div className=" services-grid-1 " >
        <div className="services-left-img flex wrap f-align-cen" >
          <div style={{ width: '100%', padding: '2ch' }}>
            <Image width={400} height={300} alt="Dk Care LLc Services" 
            className="serv-left-img" src="/images/home/pexels-ketut-subiyanto-4545207.jpg" />

          </div>
          <div style={{ width: '100%', padding: '2ch' }}>
            <Image width={400} height={300} alt="Dk Care LLc Services" 
            className="serv-left-img" src="/images/home/pexels-luis-quintero-12775200.jpg" />

          </div>

        </div>
        <div className="services-wrapper " >
          <h2 className="title white split-text" id="services-title" >Services</h2>

          <div className="flex-container wrap ">
            <div className="">
              <article className=" ">
                <p className=" white" id="services-main-line" >Our services can provide a vital
                  lifeline for individuals and ensure that everyone has access to healthcare and other essential services they need.
                </p>
                <Image width={400} height={300} alt="Dk Care LLc Services" 
                className="serv-right-top-img mobile " src="/images/home/pexels-gustavo-fring-5163590.jpg" />

              </article>
              <br />

              <br />

              <article className="wPer3" style={{ paddingRight: '1ch' }}>
                <br />

                <div className="title-bd-container hero-titles">
                  <h4 className="white text-med" style={{ paddingRight: '5px' }}>
                    Patient & Healthcare Services</h4>
                  <div className="title-bd-white" style={{ width: '90%' }}></div>
                </div>

                <div className="tab2 patient-health"><span >01</span><h4 className=" semi-bold">Patient comfort and care</h4></div>
                <div className="tab2 patient-health"><span >02</span><h4 className=" semi-bold">Safety protocols and equipment</h4></div>
                <div className="tab2 patient-health"><span >03</span><h4 className=" semi-bold">Patient privacy and confidentiality</h4></div>
                <div className="tab2 patient-health"><span >04</span><h4 className=" semi-bold">Collaborations with healthcare</h4></div>
                <div className="tab2 patient-health"><span >05</span><h4 className=" semi-bold">Serving to a diverse community</h4></div>

              </article>
              <br />
              <p className="semi-bold wPer3">We understand that working with multiple transportation providers can be
                frustrating, which is why we strive to provide a seamless and high-quality experience from start to finish. Our team is experienced i</p>
              <br />
              <div className="flex-container wrap" style={{ alignItems: 'center' }}
               onClick={() => {
                setPageName({ pageName: 'services', location: 'home' })
                openModal('home','services')
              }}>
                <Button name="Services" />
                <p style={{ paddingRight: '1rem' }}>Read more on our services page.</p>
              </div>
              <div className=" mobile flex " style={{ flexWrap: 'nowrap' }} >
                <div>
                  <Image width={400} height={300} alt="Dk Care LLc Services" 
                  className="serv-right-btm-img mobile" src="/images/home/pexels-luis-quintero-12775200.jpg" />

                </div>
                <div >
                  <Image width={400} height={300} alt="Dk Care LLc Services" 
                  className="serv-right-btm-img mobile" src="/images/home/pexels-vlada-karpovich-5790713.jpg" />

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="" id="services-img" style={{ padding: '10rem 0 10rem 2rem', }}>
          <div >
            <Image width={400} height={300} alt="Dk Care LLc Services" className="serv-right-top-img " 
            src="/images/home/pexels-gustavo-fring-5163590.jpg" />
          </div>
          <div className="flex" style={{ height: "30%" }}>
            <div >
              <Image width={400} height={300} alt="Dk Care LLc Services" 
              className="serv-right-btm-img " src="/images/home/pexels-luis-quintero-12775200.jpg" />

            </div>
            <div >
              <Image width={400} height={300} alt="Dk Care LLc Services"
               className="serv-right-btm-img " src="/images/home/pexels-vlada-karpovich-5790713.jpg" />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services