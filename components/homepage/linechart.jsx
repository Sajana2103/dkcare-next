import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
import { chart } from "./chart-component";
import * as d3 from 'd3'

// const LineChart = ({year,yearsArr,homeLoaded}) => {
//   let index = yearsArr.indexOf(year)

//   let trips = [
//     [1948,22558,1120],
//     [2555,30000,2000],
//     [3000,40000,3000],
//     [4000,50000,4000],

//   ]
//   const debounced = useDebouncedCallback((value) => {
//     setSizes(value)
//   }, 1000)

//   const svgCon = useRef()
//   useEffect(() => {

//     if(svgCon.current,homeLoaded){

//       console.log('home loaded',homeLoaded)
//       chart(year,yearsArr,homeLoaded)
//     }
//   },[year,svgCon.current,homeLoaded])
//   return (
//     <>
//       <div id="chart-div" ref={svgCon} className="chart-vh" >

//       </div>
//       <div className="flex" id="evo-color-boxes" >

//     {
//       trips.map((trip,idx) => {
//         if(idx === index){
//           return(
//             <div id="chart-details" className="trips-2019">
//             <div className="chart-box ">
//               <div className="trips evo-box " >
//               <p >
//               Trips Completed</p>
//               <h3>{trip[0]}</h3> 
//               </div>
//             </div>
//             <div className="chart-box ">
//             <div className="miles evo-box" >
//               <p>Total Miles Driven</p>
//               <h3>{trip[1]}</h3>
//               </div>
//             </div>
//             <div className="chart-box ">
//             <div className="evo-box clients">
//               <p>Total Clients Served</p>
//               <h3>{trip[2]}</h3>
//               </div>
//             </div>
//           </div>
//           )
//         }
//       })
//     }




//       </div>

//     </>
//   )
// }

const LineChart = ({ size }) => {

  const [sizes, setSizes] = useState(size)
  const debounced = useDebouncedCallback((value) => {
    setSizes(value)
  }, 1000)
  console.log(sizes)

  const svgCon = useRef()

  return (
    <>
      <div id="chart-div" ref={svgCon} className="chart-vh" >

      </div>
      <div className="flex" id="evo-color-boxes" style={{ width: '150%' }}>

        <div className="chart-details" >
          <div className="chart-box ">
            <div className="trips evo-box " >
              <p >
                Trips Completed</p>
              <h3>1948</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="miles evo-box" >
              <p>Total Miles Driven</p>
              <h3>22558</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="evo-box clients">
              <p>Total Clients Served</p>
              <h3>1120</h3>
            </div>
          </div>
        </div>

        <div className="chart-details" >
          <div className="chart-box ">
            <div className="trips evo-box " >
              <p >
                Trips Completed</p>
              <h3>2555</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="miles evo-box" >
              <p>Total Miles Driven</p>
              <h3>22558</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="evo-box clients">
              <p>Total Clients Served</p>
              <h3>1120</h3>
            </div>
          </div>
        </div>

        <div className="chart-details" >
          <div className="chart-box ">
            <div className="trips evo-box " >
              <p >
                Trips Completed</p>
              <h3>3555</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="miles evo-box" >
              <p>Total Miles Driven</p>
              <h3>22558</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="evo-box clients">
              <p>Total Clients Served</p>
              <h3>1120</h3>
            </div>
          </div>
        </div>

        <div className="chart-details" >
          <div className="chart-box ">
            <div className="trips evo-box " >
              <p >
                Trips Completed</p>
              <h3>4555</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="miles evo-box" >
              <p>Total Miles Driven</p>
              <h3>22558</h3>
            </div>
          </div>
          <div className="chart-box ">
            <div className="evo-box clients">
              <p>Total Clients Served</p>
              <h3>1120</h3>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default LineChart