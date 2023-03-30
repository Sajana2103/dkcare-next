import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from './homepage/footer';
import Navigation from './navigation';

const PageWrapper = ({title,page}) => {
  const contentRef = useRef()
  console.log('expertise ')
  function setupSplits() {
    let quotes = document.querySelectorAll('.split-text')
    let lineWrapper = document.querySelectorAll('.bd-line-wrapper')
    let lines = document.querySelectorAll('.bd-line')
    if(lineWrapper){
      lineWrapper.forEach((line,idx) =>{
       let currentIdx = idx*2
          gsap.from(lines[currentIdx], {
            scaleX: 0,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });
          gsap.from(lines[currentIdx+1], {
            scaleX: 0,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });
        
      })
    } 
      
    quotes.forEach(quote => {
      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type: "lines,words",
        linesClass: "split-line"
      });

      // Set up the anim
      quote.anim = gsap.from(quote.split.words, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "restart pause resume reverse",
          start: "top 75%",
        },
        duration: 0.6,
        ease: "circ.out",
        y: 150,
        stagger: 0.1,
      });
    });
  }
  useEffect(() => {
    if(contentRef.current){

      gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)
  
      gsap.fromTo('body',{overflowY:'hidden'},{overflowY:'scroll'})
      gsap.to('.page-content-wrapper',{height:'auto'})
  
      let scrollSmoother = ScrollSmoother.create({
        content: '.page-content',
        wrapper:'.page-wrapper',
        smooth:2,
        effcts:true
      })
      console.log('expertise useEffect',contentRef.current)
      setupSplits()
    }
    
  },[])
  return(
    <div>
      <Head>
        <title>{title}</title>
      </Head>
   
    <div className='page-wrapper'>
      <Navigation/>
      <div ref={contentRef} className='page-content'>
    {page}
    <Footer/>
      </div>
      
    </div>
    </div>
  )
}

export default PageWrapper