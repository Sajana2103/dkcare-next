export const setupMenuTextAnimation = (page,gsap) => {
  console.log('blue gr2',page)
  page.childNodes.forEach((child) => {
    let toggleActions ='play complete restart reset'
    // console.log('menuTextANIMATIONS',child)
    if(child.classList.contains('blue-gr2')){
      if(child.id==='covid'){
        gsap.to('.st0',{
          scrollTrigger:{
            trigger:child,
            start:'top top',
            end: "+=2500",
            toggleActions:toggleActions,
          },fill:'white',stroke:'white',duration:0.2
        })
        gsap.to('.menu-text1',{
          scrollTrigger:{
            trigger:child,
            start:'top top',
            end: "+=2500",
            toggleActions:toggleActions
          },color:'white',duration:0.2
        })
      }
      gsap.to('.st0',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions,
        },fill:'white',stroke:'white',duration:0.2
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },color:'white',duration:0.2,
        // textShadow: '1px 1px 3px  white',

      })
    } else {
      // console.log('wrapper children',child.classList.contains('blue-gr2'))

      gsap.to('.st0',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },fill:'var(--blue)',stroke:'var(--blue)',duration:0.2,
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },color:'var(--blue)',duration:0.2
        // ,textShadow: '1px 1px 3px var(--blue)',
      })
    }
   
  })
}

export function setupSplits(SplitText,gsap) {
  let quotes = document.querySelectorAll('.split-text')
  let quotesSmall = document.querySelectorAll('.split-text-small')
  let quotesMedium= document.querySelectorAll('.split-text-medium')

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
          ease: "power2.inOut",
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
  quotesSmall.forEach(quote => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "split-line-small"
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
  quotesMedium.forEach(quote => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "split-line-medium"
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
