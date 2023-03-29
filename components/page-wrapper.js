import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import gsap from 'gsap/dist/gsap';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from './homepage/footer';
import Navigation from './navigation';

const PageWrapper = ({title,page}) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
  
  useEffect(() => {
    gsap.fromTo('body',{overflowY:'hidden'},{overflowY:'scroll'})
    gsap.to('.page-content-wrapper',{height:'auto'})

    let scrollSmoother = ScrollSmoother.create({
      content: '.page-content',
      wrapper:'.page-wrapper',
      smooth:2,
      effcts:true
    })

    
  },[])
  return(
    <div>
      <Head>
        <title>{title}</title>
      </Head>
   
    <div className='page-wrapper'>
      <Navigation/>
      <div className='page-content'>
    {page}
    <Footer/>
      </div>
      
    </div>
    </div>
  )
}

export default PageWrapper