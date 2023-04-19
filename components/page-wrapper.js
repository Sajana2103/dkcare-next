import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { gsap } from "gsap/dist/gsap";
import { useRef ,useState} from 'react';
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin';
import { useEffect } from 'react';
import Footer from './homepage/footer';
import Navigation from './navigation';
import { setupMenuTextAnimation,setupSplits } from './gsapFuncs';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PageWrapper = (props) => {
  const [pixelRatio, setPixelRatio] = useState(1)
  const [titles,setTitles] = useState([])
  const [anchors,setAnchors] = useState([])
  const router = useRouter()
  const scrollSmooth = useRef()
  const contentRef = useRef()
  const wrapperRef= useRef()

  // function setupSplits() {
  //   let quotes = document.querySelectorAll('.split-text')
  //   let quotesSmall = document.querySelectorAll('.split-text-small')
  //   let quotesMedium= document.querySelectorAll('.split-text-medium')

  //   let lineWrapper = document.querySelectorAll('.bd-line-wrapper')
  //   let lines = document.querySelectorAll('.bd-line')
  //   if(lineWrapper){
  //     lineWrapper.forEach((line,idx) =>{
  //      let currentIdx = idx*2
  //      gsap.set(lines[currentIdx],{scaleX:0})
  //      gsap.set(lines[currentIdx+1],{scaleX:0})
  //         gsap.to(lines[currentIdx], {
  //           scaleX: 1,
  //           duration: 2,
  //           transformOrigin: "left center",
  //           ease: "power2.inOut",
  //           scrollTrigger: {
  //             trigger: lineWrapper[idx],
  //             start: "top 85%",
  //             toggleActions: "play none none reverse",
  //             // markers:true,
  //             // id:'lines'
  //           }
  //         });
  //         gsap.to(lines[currentIdx+1], {
  //           scaleX: 1,
  //           duration: 2,
  //           transformOrigin: "left center",
  //           ease: "power2.inOut",
  //           scrollTrigger: {
  //             trigger: lineWrapper[idx],
  //             start: "top 85%",
  //             toggleActions: "play none none reverse"
  //           }
  //         });
  //     })
  //   }   
  //   quotes.forEach(quote => {
  //     // Reset if needed
  //     if (quote.anim) {
  //       quote.anim.progress(1).kill();
  //       quote.split.revert();
  //     }
  //     quote.split = new SplitText(quote, {
  //       type: "lines,words",
  //       linesClass: "split-line"
  //     });
  //     // Set up the anim
  //     quote.anim = gsap.from(quote.split.words, {
  //       scrollTrigger: {
  //         trigger: quote,
  //         toggleActions: "restart pause resume reverse",
  //         start: "top 85%",
  //       },
  //       duration: 0.5,
  //       ease: "circ.out",
  //       y: 150,
  //       stagger: 0.1,
  //     });
  //   });
  //   quotesSmall.forEach(quote => {
  //     // Reset if needed
  //     if (quote.anim) {
  //       quote.anim.progress(1).kill();
  //       quote.split.revert();
  //     }
  //     quote.split = new SplitText(quote, {
  //       type: "lines,words",
  //       linesClass: "split-line-small"
  //     });
  //     // Set up the anim
  //     quote.anim = gsap.from(quote.split.words, {
  //       scrollTrigger: {
  //         trigger: quote,
  //         toggleActions: "restart pause resume reverse",
  //         start: "top 85%",
  //       },
  //       duration: 0.5,
  //       ease: "circ.out",
  //       y: 150,
  //       stagger: 0.1,
  //     });
  //   });
  //   quotesMedium.forEach(quote => {
  //     // Reset if needed
  //     if (quote.anim) {
  //       quote.anim.progress(1).kill();
  //       quote.split.revert();
  //     }
  //     quote.split = new SplitText(quote, {
  //       type: "lines,words",
  //       linesClass: "split-line-medium"
  //     });
  //     // Set up the anim
  //     quote.anim = gsap.from(quote.split.words, {
  //       scrollTrigger: {
  //         trigger: quote,
  //         toggleActions: "restart pause resume reverse",
  //         start: "top 85%",
  //       },
  //       duration: 0.5,
  //       ease: "circ.out",
  //       y: 150,
  //       stagger: 0.1,
  //     });
  //   });
   
  
    
  // }
  
  // let useeffect = 0
  
  useEffect(() => {
    if(wrapperRef.current && contentRef.current){
      
      let isDesktop = window.devicePixelRatio < 2
      // console.log('SCROLL SMOOTHER',ScrollSmoother.get())
      gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText,InertiaPlugin)
      gsap.set('.navigation-main',{yPercent:-100})
      gsap.set('.loadingScreen',{yPercent:0})

      if(!scrollSmooth.current && isDesktop){
        
        scrollSmooth.current = ScrollSmoother.create({
          content: '.page-content',
          wrapper:'.page-wrapper',
          smooth:1.5 ,
          effcts:true,
          // normalizeScroll: true, 
          // ignoreMobileResize: true,
          // preventDefault: true,
          // smoothTouch:0.01,
        })
        scrollSmooth.current.scrollTop(0)
    
        
      }
      gsap.to('.page-content-wrapper',{height:'auto',duration:0})
      
      if(!titles.length){
        setTitles(prevState => {
        let titles = document.querySelectorAll('.pageTitle')
        return [...prevState,...titles]
      })
    }
      setPixelRatio(window.devicePixelRatio)
      if(titles.length && (scrollSmooth.current || !isDesktop)){
      let otherPages = document.querySelector('.page-content-wrapper') 
        setupMenuTextAnimation(otherPages,gsap)
        setupSplits(SplitText,gsap)
        setTimeout(()=> {
          let navigationHeight = document.querySelector('.navigation-main').getClientRects().height
          console.log('scrollsmoother',scrollSmooth.current)

          
          if(router.asPath.length > router.pathname.length){
            let {asPath,pathname} = router
            let anchor = asPath.replace(pathname,'')
            if(isDesktop)scrollSmooth.current.scrollTo(anchor,false,`top ${navigationHeight}px`)
            window.history.replaceState('','',pathname)
        
          } else {
            if(!isDesktop) window.scrollTo(0,0)

          }
          
          let loadTransition = gsap.timeline({defaults:{duration:1,ease:'Power1.easeIn'},})
          .fromTo('#anchors',{display:'none'},{display:'block'})
          .to('.loadingScreen',{yPercent:-100,duration:1})
          .to('.navigation-main',{yPercent:0,duration:0.3},)
          .fromTo('.loadingScreen',{display:'grid'},{display:'none',duration:1})
          .fromTo('body',{overflowY:'hidden'},{overflowY:'scroll',duration:1},'<+=10%')
          if(isDesktop)gsap.fromTo('#anchors',{opacity:0,xPercent:-100},{xPercent:0,opacity:1,duration:1})
        },2* 1000) 
        
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
      
    <div ref={wrapperRef} className='page-wrapper'>
      <Navigation/>
      {
        pixelRatio < 2 &&
        <div id="anchors">
          <div id="anchors-con" className="flex wrap  bold blue">
        {
         titles.length  ?
          titles.map((title,idx) => {
           const AnchorTag = <span className="a-tags" onClick={() => {
            if(scrollSmooth.current){
              scrollSmooth.current.scrollTo(titles[idx],0.2,'top 100px')
            }
            }}  >{title.innerText}</span>
          
            return AnchorTag
          }) : <></>
        }
          </div>
        </div>
      }
      <div ref={contentRef} className='page-content'>
      <div className='loadingScreen'>
      <Image src="/logo.png" width={400} height={100} alt="Dk Care Expertise Logo"  />

      </div>

    {props.children}
    <Footer/>
      </div>
      
    </div>
    </div>
  )
}

export default PageWrapper