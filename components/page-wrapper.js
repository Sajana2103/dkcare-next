import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { useRef ,useState} from 'react';
import { gsap } from "gsap/dist/gsap";
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin';
import { useEffect } from 'react';
import Footer from './homepage/footer';
import Navigation from './navigation';

const PageWrapper = (props) => {
  const [pixelRatio, setPixelRatio] = useState(1)
  const [titles,setTitles] = useState([])
  const [anchors,setAnchors] = useState([])
  const scrollSmooth = useRef()
  const contentRef = useRef()
  function setupSplits() {
    let quotes = document.querySelectorAll('.split-text')
    let lineWrapper = document.querySelectorAll('.bd-line-wrapper')
    let lines = document.querySelectorAll('.bd-line')
    if(lineWrapper){
      lineWrapper.forEach((line,idx) =>{
       let currentIdx = idx*2
       gsap.set(lines[currentIdx],{scaleX:0})
       gsap.set(lines[currentIdx+1],{scaleX:0})
          gsap.to(lines[currentIdx], {
            scaleX: 1,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 85%",
              toggleActions: "play none none reverse",
              // markers:true,
              // id:'lines'
            }
          });
          gsap.to(lines[currentIdx+1], {
            scaleX: 1,
            duration: 2,
            transformOrigin: "left center",
            ease: "power2.inOut",onComplete:()=>console.log('complete',lines[currentIdx+1]),
            scrollTrigger: {
              trigger: lineWrapper[idx],
              start: "top 85%",
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
          start: "top 85%",
        },
        duration: 0.5,
        ease: "circ.out",
        y: 150,
        stagger: 0.1,
      });
    });
  }
  // let useeffect = 0
  useEffect(() => {
    if(contentRef.current){
      // useeffect++
      gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText,InertiaPlugin)

      gsap.fromTo('body',{overflowY:'hidden'},{overflowY:'scroll'})
      gsap.fromTo('#anchors',{display:'none'},{display:'block'})
      gsap.fromTo('#anchors',{opacity:0},{opacity:1})

      gsap.to('.page-content-wrapper',{height:'auto'})
      
      scrollSmooth.current = ScrollSmoother.create({
        content: '.page-content',
        wrapper:'.page-wrapper',
        smooth:1.5,
        effcts:true
      })
      if(!titles.length){
        setTitles(prevState => {
        let titles = document.querySelectorAll('.pageTitle')
        return [...prevState,...titles]
      })
    }
      setPixelRatio(window.devicePixelRatio)
      if(titles.length && scrollSmooth.current){
        
        setupSplits()
        
      }
      if(!anchors.length){
        setAnchors(prevState=> {
        let anchors = document.querySelectorAll('.a-tags')
        return [...prevState, ...anchors]
      })
    }
      if(anchors.length){
        let pageContainers = contentRef.current.querySelectorAll('.pageContainer')
        console.log('pageContainers',pageContainers)
        anchors.forEach((anchor,idx) => {
          gsap.timeline({ scrollTrigger: { trigger:pageContainers[idx],end:'bottom center', start: 'top center',  markers: false, toggleActions: 'play reset complete reset', } })
          .fromTo(anchor, { color: '#1e4d8c' }, { color: '#ed7036' })
         
          
        })
      }
      
      // console.log('useeffect runs',useeffect,anchors,titles)
    }
    
  },[titles.length,anchors.length])

  return(
    <div>
    
      <div  id='portal' ></div>
      
    <div className='page-wrapper'>
      <Navigation/>
      {
        pixelRatio < 2 &&
        <div id="anchors">
          <div id="anchors-con" className="flex wrap  bold blue">
        {
         titles.length  ?
          titles.map((title,idx) => {
           const AnchorTag = <span className="a-tags" onClick={() => {scrollSmooth.current.scrollTo(titles[idx],0.2,'top 100px')}}  >{title.innerText}</span>
          
            return AnchorTag
          }) : <></>
        }
          </div>
        </div>
      }
      <div ref={contentRef} className='page-content'>
   
    {props.children}
    <Footer/>
      </div>
      
    </div>
    </div>
  )
}

export default PageWrapper