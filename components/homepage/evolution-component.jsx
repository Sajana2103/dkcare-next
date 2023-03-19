import React, { useEffect, useState,useRef } from "react";
import LineChart from "./linechart.jsx";

const EvolutionCom = ({homeLoaded}) => {
  const yearsArr = [2019, 2020, 2021, 2022]
  const [year, setYear] = useState(yearsArr[0])
  const translate = [0, 50, 60, 70]
  let translateNo = 0
  const selectYear = (e) => {
    let year = parseInt(e.target.innerText)
    console.log('year : ', year)
    setYear(year)
  }

  return (
    <div className="main-section" id="evolution">
      <a id="evolution-anchor"></a>

      <div className="evolution-wrapper blue-gr con-pd" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        <h1 className="title white " id="evo-title" >The evolution of our company</h1>
        <p className="text-med white evo-tagline max1080">DK Care LLC formed in September 2019 with a
          couple of fleet and drivers with the mission of providing exceptional NEMT services.</p>

        <div className="flex-container wrap years-wrapper " >
          <div id="years-wrapper" className="wPer1" >
            <div className="chart-vh" id="year">
              {
                yearsArr.map((y, idx) => {
                  if (y === year) {

                    return (
                      <p className="year-css  white year-large" id={`year${year}`} name={year} >{year}</p>

                    )
                  } else {
                    translateNo++
                    return (

                      <p className="year-css  white year-small" id={`year${year}`} name={year}
                        style={{ transform: `translate(${translate[translateNo]}vw,0)` }}
                        onClick={(e) => selectYear(e)}
                      >{y}</p>
                    )

                  }
                })
              }

            </div>

            <p className="text-med white evo-tagline">DK Care LLC formed in September 2019 with a
              couple of fleet and drivers with the mission of providing exceptional NEMT services.</p>
          </div>
          <div id="chart-container " className="wPer3">
            <div id="line-chart" >
              <LineChart homeLoaded={homeLoaded} year={year} yearsArr={yearsArr} />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default EvolutionCom