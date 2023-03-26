import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { Draggable } from 'gsap/dist/Draggable';

import { useThrottledCallback } from 'use-debounce';
import Image from "next/image";


const Stories = () => {
  const reviewRef = useRef()
  let reviewCards =useRef([])
  let oldx = 0
  let direction = ''
  let cardWidth
  let xPerCard 
  let xProgress = 0
  useEffect(() => {
    if (reviewRef.current) {
      if(window.devicePixelRatio < 2){
        let reivewBoxWrapper = document.querySelectorAll(".review-box-wrapper")
        let minX = -(reivewBoxWrapper[0].getBoundingClientRect().width * reivewBoxWrapper.length-1)
        console.log(minX,reivewBoxWrapper)
        gsap.registerPlugin(Draggable)
  
        Draggable.create('#review-con',
        {
          bounds: {minX:minX,maxX:0},
          type: 'x',
          
          inertia: true,
          // autoScroll: 1,
          edgeResistance: 0.65,
          // throwProps: true,
        })
      }
      // $(window).resize(function(){  
      //   Draggable.get('.slide').applyBounds("#container");
      // });
      
      cardWidth = document.querySelector('.review-box-wrapper').offsetWidth + 30
      reviewCards.current = gsap.utils.toArray('.review-box-wrapper')
      xPerCard = 100 / reviewCards.current.length - 1
    }
  }, [reviewRef.current])

  const slideBtns = gsap.timeline({ defaults: { duration: 0.3, ease: 'Power2.in', } })
  const leftBtn = () => {
    if (xProgress > (-cardWidth * reviewCards.current.length - 1)) {

      xProgress -= cardWidth
      // console.log('left', xProgress)
      slideBtns.to(reviewCards.current, { translateX: xProgress })
    }

  }
  const rightBtn = () => {
    if (xProgress < 0) {
      xProgress += cardWidth
      // console.log('right', xProgress)
      slideBtns.to(reviewCards.current, { translateX: xProgress })
    }
  }
  let dataSpeed = 0.1
  return (
    <div className="main-section" id="customers" >
        <a id="customers-anchor"></a>

      <div className="customers-wrapper con-pd con-tb" >
        <div>
          <h1 className="title blue bold tc" id="customer-title">Customer Stories</h1>
          <br />
        </div>

        <div ref={reviewRef} id="review-wrapper" >
          {/* <div className="arrow-btn-wrapper">
            <div className="black arrow-btn " onClick={rightBtn}><Image width={30} height={30} alt="Dk Care LLC reviews" style={{ transform: 'rotate(180deg)' }} src="/right-arrow.svg" /></div>
            <div className="black arrow-btn " onClick={leftBtn}><Image width={30} height={30} alt="Dk Care LLC reviews" src="/right-arrow.svg" /></div>
          </div> */}
          
          <div className="flex-container " style={{ gap: '30px' }} id="review-con"  >
            <div className="review-box-wrapper" >

              <div className="review-box" >
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div>
            <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper">

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper" >

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper" >

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper " >

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div> <div className="review-box-wrapper" >

              <div className="review-box">
                <p className="black semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mattis orci eu commodo ornare. Sed semper iaculis
                  mauris eget laoreet. Curabitur ante ipsum, ultricies vitae lorem et,
                  accumsan scelerisque mauris. Nunc porttitor aliquet sodales.
                  Sed ex lectus, vehicula a metus eget, pretium porta augue.
                  Cras erat eros, cursus sit amet augue nec, ultrices porttitor neque.
                  Vivamus lacinia dignissim fermentum.</p>
                <br />
                <h3 className="black">Trina Mazumder</h3>
                <h4 className="text-med gray">Company</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Stories