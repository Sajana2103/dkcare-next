import NextPageBtn from "../svg-components/nextpage-btn";
import React from "react";
import Link from "next/link";
const Covid = () => {
  return (
    <div className="main-section blue-gr2 " id="covid">
      {/* <Image src="/mesh-gradient-2.png" className="mesh-gradient" height={500} width={500}/> */}
      <div className="final-wrapper con-pd" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        <a id="covid-anchor"></a>

        <h2 id="covid-title" className="title white text-large " >COVID-19 Guidelines and Preventive Measures</h2>
        <br />

        <div className="flex-container wrap " id="covid-home-content">
          <p className="white  " id="covid-para1">We understands the severity of the current global COVID-19 pandemic and assures all prospective customers that our
            drivers and staff will be observing all recommended
            precautions and social-distancing rules.</p>
          <div className="covid-para2-con wPer40">

            <p className="white semi-bold covid-para2 " >Due to the current situation of the COVID-19
              pandemic, we have made several changes to
              our services in order to meet new guidelines.
            </p>
            <br />
            <p className="white semi-bold covid-para2">
              Wash your hands often and well to avoid
              contamination. Avoid touching eyes, nose or
              mouth with unwashed hands. Clean frequently touched objects and surfaces with disinfectant wipes.
            </p>
          </div>
        </div>
        <div id="covid-aboutus">
        <div id="" className="nextBtn">
          <Link href='/company'> <button><NextPageBtn /></button></Link>
          <h1 className="title white">About Us</h1>
        </div>
         
        </div>
      </div>


    </div>
  )
}

export default Covid