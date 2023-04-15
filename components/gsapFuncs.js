export const setupMenuTextAnimation = (page,gsap) => {
  console.log('blue gr2',page)
  page.childNodes.forEach((child) => {
    let toggleActions ='play complete restart reset'
    console.log('menuTextANIMATIONS',child)
    if(child.classList.contains('blue-gr2')){
      // console.log('wrapper children',child.classList.contains('blue-gr2'))
      gsap.to('.st0',{
        scrollTrigger:{
          trigger:child,
          start:'top top',
          // end:'bottom bottom',
          toggleActions:toggleActions,
        },fill:'white',stroke:'white',duration:0.2
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top top',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },color:'white',duration:0.2
      })
    } else {
      // console.log('wrapper children',child.classList.contains('blue-gr2'))

      gsap.to('.st0',{
        scrollTrigger:{
          trigger:child,
          start:'top top',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },fill:'var(--blue)',stroke:'var(--blue)',duration:0.2
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top top',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },color:'var(--blue)',duration:0.2
      })
    }
   
  })
}