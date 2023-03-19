import { useContext, useRef, useEffect,useState } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as THREE from "three";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { useDebouncedCallback } from 'use-debounce'
import { useThrottledCallback } from 'use-debounce';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import Stats from 'stats.js'
import { sky } from './background.jsx';
import ContentContainer from './content-container.jsx';
import { chart } from './homepage/chart.jsx';

function App({ isLoaded, models, animation }) {
  // console.log('device pixal ratio :',window.devicePixelRatio)
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
  let scrollSmooth

  let size800 
  const debounced = useDebouncedCallback((value) => {
    setSizes(value)
  }, 1000)
  const checkPosition = () => {
    if (scrollY === 0) {
      backToHeroDesktop()
      // if(size800) backToHeroDesktop()
      // else backToHero()

    }
  }
  const posHandler = useThrottledCallback(checkPosition, 1000)
  let clip = 0
  let timeScale = 0.5
  let rotationSpeed = -0.2
  let reqAnimId
  const clock = new THREE.Clock();
  let stats 
  const { mixer, clips } = animation

  // document.body.appendChild(stats.dom)



  const mainRef = useRef()
  const container = useRef()
  // const mobileRef = useRef()
  const contentRef = useRef()

  let sectionHT = 0
  let sectionH,
    sections = '',
    sectionChildren = '',
    listening = false,
    direction = "down",
    current,
    next = 0,
    showScene = true,
    sectionHeights = [0]

  let desktopPages
let mobileHeroContent
  const touch = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    startTime: 0,
    dt: 0
  };
  let size

  let camera
  // const light = models[0].getObjectByName('Sun')
  let body 
  let frontWheels 
  let backWheels 
  let plane 
  // const orangeTrack = models[0].getObjectByName('Plane003')

  let sun 

  let pos 
  let position 
  let carLight 

  let renderer
  let renderTarget 
  let renderPass
  let composer 

  const sceneAnimation = () => {
    // --- CAMERA

  renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  // scene.add(city)
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap


  
  // const rover = models[0].getObjectByName('rover_pos')

  carLight.intensity = 50
  carLight.castShadow = true
  carLight.target = body
  carLight.shadow.mapSize.width = 1024
  carLight.shadow.mapSize.height = 1024
  carLight.shadow.bias = -0.001

  sun.shadow.camera.right = -50;
  sun.shadow.camera.top = -50
  sun.shadow.camera.left = 50;
  sun.shadow.camera.bottom = 50;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  sun.target = plane
  const camArea = 500
  let mapSize = 1024 * 4
  sun.castShadow = true
  sun.intensity = 10
  sun.shadow.bias = -0.01
  sun.shadow.mapSize.width = mapSize
  sun.shadow.mapSize.height = mapSize
  sun.shadow.camera.right = -camArea;
  sun.shadow.camera.top = -camArea
  sun.shadow.camera.left = camArea;
  sun.shadow.camera.bottom = camArea;
  sun.shadow.blurSamples = 1
  light.shadow.camera.far = 5000
  light.shadow.camera.near = 1000


  const helper = new THREE.CameraHelper(sun.shadow.camera);
  let d = 100;
  let r = 2;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x5B7DC2, 0.0025);
  // scene.add( new THREE.CameraHelper( sun.shadow.camera ) )
  const hemiLight = new THREE.HemisphereLight(0xE5F0FF, 0xffffff, 10);
  hemiLight.position.set(0, 1000, 0)
  const hemiHelper = new THREE.HemisphereLightHelper(hemiLight, 5);
  scene.add(hemiLight)
  // scene.add(hemiHelper)

  plane.receiveShadow = true

  camera.lookAt(body.position.x)

  new RGBELoader()
    .load('venice_sunrise_1k.hdr', function (texture) {

      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    })


  // --- RENDERER

  // CONTORLS ---------------------------------------------------
  // const camera = models[0].getObjectByName('Camera2')
  // camera.near= 10
  // camera.far = 10000
  // console.log(camera)
  // camera.far = 5000


  // const controls = new OrbitControls(camera,renderer.domElement);
  // controls.listenToKeyEvents(window); // optional

  // // controls.addEventListener('change', render); // call this only in static scenes (i.e., if there is no animation loop)
  // controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  // controls.dampingFactor = 0.05;

  // controls.screenSpacePanning = false;

  // controls.minDistance = 0.1;
  // controls.maxDistance = 10000;

  // controls.maxPolarAngle = Math.PI / 2;

  // scene.add(hemiLight);
  // scene.add(light);

  // scene.add(ground);
  scene.add(sky)
  scene.add(models[0])
  renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, { samples: 4 });

  renderPass = new RenderPass(scene, camera);
  composer = new EffectComposer(renderer, renderTarget);
  composer.addPass(renderPass);
  
  }
  useEffect(() => {
    if(isLoaded){
      size800 = document.body.clientWidth > 800
      size = { width: document.body.clientWidth, height: window.clientHeight }
      stats = new Stats()
      stats.showPanel(2)

      camera = models[0].getObjectByName('camera-main')
      // const light = models[0].getObjectByName('Sun')
      body = models[0].getObjectByName('body')
      frontWheels = models[0].getObjectByName('wheels_front')
      backWheels = models[0].getObjectByName('wheels_back')
      plane = models[0].getObjectByName('Plane')
    
      sun = models[0].getObjectByName('Sun')
    
      pos = new THREE.Vector3()
      position = models[0].getObjectByName('position')
      carLight = models[0].getObjectByName('Point')
      document.addEventListener("wheel", handleWheel);
            document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
      window.addEventListener('scroll', posHandler)
      window.addEventListener('resize', onResize)
      sceneAnimation()
      container.current.appendChild(renderer.domElement)
      onResize();
   
      tick();
    }
  },[isLoaded])

  const onResize = () => {
    if(isLoaded){

      size.height = window.innerHeight;
      size.width = document.body.clientWidth;
      size800 = size.width > 800
      // if (navRef.current) navRef.current.style.width = `${document.body.clientWidth}px`;
      camera.aspect = size.width / size.height
      camera.updateProjectionMatrix()
      
      renderer.setSize(size.width, size.height)
      composer.setSize(size.width, size.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    
    
  }
 

  // --- TICK
  // let mouse = { x: camera.position.x, y: camera.position.y }
  // window.addEventListener('mousemove',(e) => {
    //   e.preventDefault()
    //   mouse.x = (e.clientX/window.innerWidth) * 2 -1
    //   mouse.y = (e.clientY/window.innerHeight) * 2 -1
    //   // camera.position.set(camera.position.x + 1)
    //   camera.position.y -= mouse.y
    //   camera.position.x += -mouse.x
    //   // gsap.to(camera.position,{x:camera.position.x+(-mouse.x*3),y:camera.position.y+(mouse.y)})
    // })


  // console.log(camAndCar)
  // mixer.clipAction(animations[0]).play()
  // mixer.clipAction(animations[1]).play()
  // console.log(animations)
  // const changeAnimation = () => {


  //   mixer.clipAction(animations[clip]).play()
  //   mixer.clipAction(animations[clip]).loop = THREE.LoopOnce
  //    console.log('change animation',clip)
  //   mixer.addEventListener('finished', (e) => {
  //     // console.log('finished',e)
  //     mixer.clipAction(animations[clip]).fadeIn(0.3)
  //     mixer.clipAction(animations[clip]).reset()


  //     mixer.removeEventListener()
  // })
  // }
  // changeAnimation(clip)
  let rotation = 0
  const wheelsRotation = (z) => {
    frontWheels.rotation.x = z
    backWheels.rotation.x = z
  }


  const tick = () => {
    rotation -= rotationSpeed
    stats.begin()
    const delta = clock.getDelta();
    mixer.update(delta * timeScale)
    wheelsRotation(rotation)
    // controls.update()
    position.getWorldPosition(pos)
    camera.lookAt(pos)
    composer.render();
    // renderer.render(scene,camera)

    stats.end()
    reqAnimId = requestAnimationFrame(tick)


  }

  // mixer.clipAction(clips[2]).play()
  const changeAnimation = () => {
    // console.log(camera.rotation)
    const camTl = gsap.timeline({ defaults: { ease: `Power1.easeOut`, duration: 2 } })
    if (next === 0) {
      camTl.to(camera.position, { y: 100, x: -300, duration: 2 })
      camTl.to(position.position, { x: 200 }, '<')
      // camTl.to(camera.rotation, {  x: -3, duration: 2 },'<')
      mixer.clipAction(clips[0]).play()

    }

    // console.log(next)
    if (next === 2) {
      // console.log('clip', next)

      camTl.to(camera.position, { y: 3000, x: 3000, duration: 2 })
      camTl.to(position.position, { x: 200 }, '<')



    }
    else if (next === 3) {
      // console.log('clip', next)
      camTl.to(camera.position, { y: 200, x: -400, duration: 2 })


    }
    else if (next === 4) {
      camTl.to(camera.position, { y: 50, duration: 2 })


      console.log('clip', next)
      // mixer.clipAction(clips[0]).timeScale = 0
      gsap.to(mixer.clipAction(clips[0]), { timeScale: 0, duration: 2 })
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed >= 0) {
          clearInterval(interval)
          rotationSpeed = 0
          // console.log('clear slow down', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed + 0.02;
      }, 100);

      // mixer.clipAction(clips[0]).stop()
    }
    else {
      // console.log('reset', clip)

      // camTl.to(camera.position,{y:50,duration:3})
      let interval = setInterval(function () {
        console.log(rotationSpeed)
        if (rotationSpeed <= -0.4) {

          clearInterval(interval)
          rotationSpeed = -0.4
          // console.log('clear speed up', rotationSpeed)
        }
        else rotationSpeed = rotationSpeed - 0.02;
      }, 100);

      gsap.to(mixer.clipAction(clips[0]), { timeScale: 1, duration: 2 })
      // mixer.clipAction(clips[0]).startAt(clipTime*timeScale)
      // mixer.clipAction(clips[0]).play()
    }

  }
  const changeAnimationDesktop = () => {
    const camTl = gsap.timeline({ defaults: { ease: `Power1.easeOut`, duration: 2 } })
    if (next === 0) {
      camTl.to(camera.position, { y: 2, x: -4,z:6, duration: 2 })
      camTl.to(position.position,{ x: 200,y:-300,z:100}, '<')
      // camTl.to(camera.rotation, {  x: -3, duration: 2 },'<')
      mixer.clipAction(clips[0]).play()

    }

    console.log(next)
    if(next === 1){
      camTl.to(camera.position, { y: -1.3,x:-10,z:0, duration: 2 })

      camTl.to(position.position, { x: -300,y:-400,z:300}, '<')

    }
    else if (next === 2) {
      console.log('clip', next)
      camTl.to(camera.position, { y: 50, x: -7, duration: 2 })
      camTl.to(position.position, { x: -300,y:1000,z:300}, '<')
    }
    else if (next === 3) {
      console.log('clip', next)
      camTl.to(camera.position, { y: 200, x: -400, duration: 2 })


    }
    else if (next === 4) {
      camTl.to(camera.position, { y: 50, duration: 2 })


      console.log('clip', next)
      // mixer.clipAction(clips[0]).timeScale = 0
      gsap.to(mixer.clipAction(clips[0]), { timeScale: 0, duration: 2 })
      let interval = setInterval(function () {
        if (rotationSpeed >= 0) {
          clearInterval(interval)
          rotationSpeed = 0
        }
        else rotationSpeed = rotationSpeed + 0.02;
      }, 100);

      // mixer.clipAction(clips[0]).stop()
    }
    else {

      // camTl.to(camera.position,{y:50,duration:3})
      let interval = setInterval(function () {
        if (rotationSpeed <= -0.4) {

          clearInterval(interval)
          rotationSpeed = -0.4
        }
        else rotationSpeed = rotationSpeed - 0.02;
      }, 100);

      gsap.to(mixer.clipAction(clips[0]), { timeScale: 1, duration: 2 })
      // mixer.clipAction(clips[0]).startAt(clipTime*timeScale)
      // mixer.clipAction(clips[0]).play()
    }

  }
 
  // const touch = {
  //   startX: 0,
  //   startY: 0,
  //   dx: 0,
  //   dy: 0,
  //   startTime: 0,
  //   dt: 0
  // };
  let sectionDuration = 1
  const tlDefaults = {
    ease: "slow.inOut",
    duration: 0.1
  };

  useEffect(() => {
    if (mainRef.current && container.current && contentRef.current && isLoaded ) {

      if (size800) {
        changeAnimationDesktop()
      } else changeAnimation()
      console.log('size',size)

      if(contentRef.current && size800) {
      }
      desktopPages = document.querySelectorAll('.desktop-page')
      
      if(contentRef.current && !size800) {
        mobileHeroContent = document.querySelector('#mobile-hero-content')
        // sections = mobileHeroContent.querySelectorAll('section')
        sectionChildren = document.querySelectorAll('.sections')

      }
      
      // titles = document.querySelectorAll('.title')
      // const tl = gsap.timeline({
      //   ...tlDefaults,
      //   scrollTrigger: {
      //     trigger: '#App',
      //     start: 'top top',
      //     end: 'bottom bottom',
      //     ease: 'Power4.in',
      //     toggleActions: 'play complete reverse reverse',
      //     // markers: true
      //   }
      // })
      // tl.to('.title', { opacity: 1 })
      slideInDesktop()
      // if (size800) {
      //   slideInDesktop()
      // } else slideInMobile();
      // for (let i = 0; i < sections.length; i++) {
      //   sectionHeights.push(sections[i].offsetHeight + sectionHeights[i])
      //   contentHeight += sections[i].offsetHeight
      // }
      if(size800){

        scrollSmooth= ScrollSmoother.create({
          wrapper:'.smooth-wrapper',
          content:'.smooth-content',
          smooth:2,
          effects:true
        })
        scrollSmooth.paused(true)
      }
      

    }
  }, [isLoaded])

  const backToHero = () => {
    console.log('reverse End of SCENE')
    const backHero = gsap.timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        showScene = true
      }
    })
    gsapTimelines('desktop', 'hero')
    backHero.to('body', { overflow: 'hidden', overflowY: 'hidden' },)

    tick()
    backHero.fromTo('#homepage', { display: 'block', opacity: 0 }, { opacity: 1, duration: 1 })
      // .fromTo('#homepage', { display: 'none', duration: 0 })
      .to('#App', { position: 'fixed' }, '<')
      .to('#scene', { display: 'block', yPercent: 0, position: 'fixed' }, '<')
      .to('#scene', { opacity: 1, duration: 1 }, '<')
      .to('#mobile-hero-content', { display: 'block', opacity: 1 }, '<')
      .to('#scroll-skip', { opacity: 1 }, '<')
  }
  const backToHeroDesktop = () => {
    console.log('reverse End of SCENE')
    if(size800){

      scrollSmooth.scrollTop(0)
      scrollSmooth.paused(true)
    }
    // scrollSmooth.kill()

    const backHero = gsap.timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        showScene = true
      }
    })
    gsapTimelines('desktop', 'hero')
    backHero.to('body', { overflow: 'hidden', overflowY: 'hidden' },)

    tick()
    backHero
    .to('#anchors',{display:'none',opacity:0,duration:0.3})
    .fromTo('#homepage', { display: 'block', opacity: 0 }, { opacity: 1, duration: 1 })
      // .to('#homepage', { display: 'none', duration: 0 })
      .to('#App', { position: 'fixed' }, '<')
      .to('#scene', { display: 'block', yPercent: 0, }, '<')
      .to('#scene', { opacity: 1, duration: 1 }, '<')
      .to('#desktop-hero-content', { display: 'block', opacity: 1 }, '<')
      .to('#scroll-skip', { opacity: 1 }, '<')
      window.scrollTo(0,0)

  }
  const gsapTimelines = (screen, action) => {
    let ctx = gsap.context(() => {

      const expTl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '#expertise',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#services',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'Expertise',
        }
      })
      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#services',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#technologies',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'Services',
        }
      })
      const techTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#technologies',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#evolution',
          ease: 'Power4.in',
          toggleActions: 'play complete none none',
          pin: size800? true : false,
          scrub: true,
          // markers: true,
          id: 'technologies',
        }
      })
      const evoTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#evolution',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#customers',
          ease: 'Power0',
          toggleActions: 'play complete reverse reverse',
          pin: size800? true : false,
          onEnter:chart(),
          scrub: 1,
          // onEnter: chart(),
          // markers: true,
          id: 'evolution',
        }
      })



      const customerTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#customers',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '.final-wrapper',
          ease: 'Power0',
          toggleActions: 'play complete reverse reverse',
          pin: size800? true : false,
          pinSpacing: true,
          scrub: 3,
          // markers: true,
          id: 'customers',
        }
      })
      // const reviewContainer = document.querySelector('#review-con').scrollWidth
      // const reviewsTL = gsap.to({
      //   scrollTrigger: {
      //     ease: "none",
      //     trigger: '#review-con',
      //     start: 'top top',
      //     end: `+=${container.offsetWidth}`,
      //     endTrigger: '.final-wrapper',
      //     toggleActions: 'play complete reverse reverse',
      //     pin: size800? true : false,
      //     pinSpacing: true,
      //     scrub: 3,
      //     // markers: true,
      //     id: 'customers',
      //   }
      // })

      evoTl.timeScale(0.5)

      if (screen === 'desktop' && action === 'hero') {
        expTl.revert()
        servicesTl.revert()
        techTl.revert()
        evoTl.revert()
        customerTL.revert()
        return
      }
      if (screen === 'desktop' && action === 'homepage') {
        expTl.fromTo('#expertise-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('.exp-img', { scale: 0 }, { scale: 1, stagger: 1 }, '<')
          .fromTo('.exp-text-boxes', { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, stagger: 1 })

        servicesTl.fromTo('#services-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('.serv-right-top-img', { objectPosition:'0 20%'},  { objectPosition:'0 40%'}, '<')
          .fromTo('.serv-right-btm-img', {opacity: 0, objectPosition:'0 20%'},  {opacity: 1, objectPosition:'0 40%',stagger:1}, '<')
          .fromTo('.patient-health', { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, stagger: 1 })


        techTl.fromTo('#tech-title-main', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          .fromTo('#tech-img-box-1', { opacity: 0 }, { opacity: 1, stagger: 1 })
          .fromTo('#tech-bd-left', { opacity: 0, height: '0%' }, { opacity: 1, height: '100%' })
          .fromTo('#tech-bd-left', { opacity: 0, width: '0%' }, { opacity: 1, width: '100%' }, '<+=25%')
          .fromTo('#tech-img-box-2', { opacity: 0 }, { opacity: 1, }, '<+=25%')
          .fromTo('#tech-bd-straight', { opacity: 0, width: '0%' }, { opacity: 1, width: '100%' })
          .fromTo('#tech-img-box-3', { opacity: 0 }, { opacity: 1, stagger: 1 })
          // .fromTo('#tech-bd-right',{opacity:0,height:'0%'},{opacity:1,height:'100%'},)
          .fromTo('#tech-bd-right', { opacity: 0, width: '0%', translateY: '50%' }, { opacity: 1, width: '100%', translateY: '0%' })
          .fromTo('#tech-bd-right', { height: '0%' }, { height: '100%' }, '<+=50%')
          .fromTo('#tech-img-box-4', { opacity: 0 }, { opacity: 1 }, '<')


        evoTl.fromTo('#evo-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
        let svgItems = gsap.utils.toArray(".svg-items");
        let chartDetails = gsap.utils.toArray(".chart-details");

        let svgTween = gsap.timeline({
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: "#evolution",
            start:'+=200',
            pin: true,
            scrub: 3,
            //  markers: true,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=2500"
          }
        })
        svgTween
        .fromTo(svgItems[0],{xPercent: 0,},{xPercent: -100})
        .fromTo('#y2019',{xPercent:0,fontSize:'8rem'},{xPercent:-100,fontSize:'3rem'},'<')
        .fromTo(chartDetails[0],{xPercent: 0,opacity: 1,},{opacity: 0,xPercent: -100},'<+=50%')
        .fromTo(svgItems[0],{   opacity: 1,},{opacity: 0},'<')

        .fromTo(svgItems[1],{   opacity: 0,},{opacity: 1},'<+=50%')
        .fromTo(svgItems[1],{   xPercent: 0,},{   xPercent: -100},'<')
        .fromTo('#y2020',{translateX:'50vw',fontSize:'3rem',opacity:0.5},{opacity:1,translateX:'0',fontSize:'8rem'},'<')
        .fromTo(chartDetails[1],{xPercent: 0,opacity: 0,},{opacity: 1,xPercent: -100},'<')
        .fromTo('#y2019',{xPercent:-100,},{xPercent:-300,},)
        .fromTo('#y2020',{xPercent:0,fontSize:'8rem',opacity:0.5},{opacity:1,xPercent:-100,fontSize:'3rem'},'<')
        .fromTo(svgItems[1],{   xPercent: -100,},{   xPercent: -200},'<')
        .fromTo(chartDetails[1],{xPercent: -100,opacity: 1,},{opacity: 0,xPercent: -200},'<+=50%')
        .fromTo(svgItems[1],{   opacity: 1,},{opacity: 0},'<+=55%')

        .fromTo(svgItems[2],{   opacity: 0,},{opacity: 1},'<+=50%')
        .fromTo(svgItems[2],{   xPercent: -100,},{   xPercent: -200},'<')
        .fromTo('#y2021',{translateX:'60vw',fontSize:'3rem',opacity:0.5},{opacity:1,translateX:'0',fontSize:'8rem'},'<')
        .fromTo(chartDetails[2],{xPercent: -100,opacity: 0,},{opacity: 1,xPercent: -200},'<')
        .fromTo('#y2020',{xPercent:-100,},{xPercent:-300,},)
        .fromTo('#y2021',{xPercent:0,fontSize:'8rem',opacity:0.5},{opacity:1,xPercent:-100,fontSize:'3rem'},'<')
        .fromTo(svgItems[2],{   xPercent: -200,},{   xPercent: -300},'<')
        .fromTo(chartDetails[2],{xPercent: -200,opacity: 1,},{opacity: 0,xPercent: -300},'<+=50%')
        .fromTo(svgItems[2],{   opacity: 1,},{opacity: 0},'<+=55%')

        .fromTo(svgItems[3],{   opacity: 0,},{opacity: 1},'<+=50%')
        .fromTo(svgItems[3],{   xPercent: -200,},{   xPercent: -300},'<')
        .fromTo('#y2022',{translateX:'70vw',fontSize:'3rem',opacity:0.5},{opacity:1,translateX:'0',fontSize:'8rem'},'<')
        .fromTo(chartDetails[3],{xPercent: -200,opacity: 0,},{opacity: 1,xPercent: -300},'<')
        .fromTo('#y2021',{xPercent:-200,},{xPercent:-300,},)
     
        const reviewBox = document.querySelectorAll('.review-box-wrapper')

        let xPerReview = 100 * reviewBox.length
        customerTL.set(reviewBox, { translateX: size.width / 2 })
          .fromTo('#customer-title', { opacity: 0, yPercent: -25 }, { opacity: 1, yPercent: 0 })
          // .to(reviewBox,{xPercent:-xPerReview,stagger:0})
          // reviewsTL.to(reviewBox,{x:() => -(reviewContainer.scrollWidth - reviewBox[0].clientWidth) + "px"},)
        }
    //   else if(screen==='mobile' && action==='homepage'){
    //     const expMob = gsap.timeline({defaults:{duration:1,ease:'Power2.in'},
    //   scrollTrigger:{
    //     trigger: '#expertise',
    //       start: 'top 30%',
    //       end: 'bottom bottom',
    //       endTrigger: '.expertise-wrapper-2',
    //       ease: 'Power4.in',
    //       toggleActions: 'play complete reverse reverse',
    //       // pin: true,
    //       // scrub: true,
    //       // markers: true,
    //       id: 'Expertise-Mob'
    //   }})
    //   expMob.fromTo('#expertise-title',{yPercent:10,opacity:0},{yPercent:0,opacity:1})
    //   .fromTo('.exp-img', { scale:0}, { scale: 1, stagger: 1 }, '<')
    // }
    })
    return () => ctx.revert(); // cleanup! 
  }

  let funcRan = 0
  const skipHero = () => {

    showScene = false
    cancelAnimationFrame(reqAnimId)
    const sceneTl = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: () => {
        listening = true;
      }
    })
      .to('#scene', { opacity: 0, duration: 0 })
      .to('#mobile-hero-content', { display: 'none', opacity: 0 }, '<')
      .to('#scroll-skip', { opacity: 0 }, '<')
      .to('#scene', { display: 'none', yPercent: -100, duration: 0.1, position: 'relative' })
      .to('#App', { position: 'relative' }, '<')
      .to('#homepage', { display: 'block', }, '<')
      .fromTo('#homepage', { opacity: 0 }, { opacity: 1, duration: 1 })
    // .to('.sections', { translateY: sectionHeights[sectionHeights.length-1] },'<')

    setTimeout(() => {
      if (size.width < 800 && funcRan === 0) {
        // console.log('mobile homepage ran : ', funcRan)
        gsapTimelines('mobile', 'homepage')
        
        //end of set time out
      } 
    },!funcRan?  sceneTl.duration() * 1000 : 0)
    setTimeout(() => {
      sceneTl.to('body', { overflow: 'scroll', overflowY: 'scroll' },)
      
    },!funcRan? sceneTl.duration() * 1500 : 0)
    funcRan++
  }
  const skipHeroDesktop = () => {
    if(size800)scrollSmooth.paused(false)

    showScene = false
    cancelAnimationFrame(reqAnimId)
    const sceneTl = gsap.timeline({
      defaults: { duration: 0.5 },
      onComplete: () => {
        listening = true;
      }
    })
      .to('#scene', { opacity: 0, duration: 0 })
      .to('#desktop-hero-content', { display: 'none', opacity:0}, '<')
      .to('#scroll-skip', { opacity: 0 }, '<')
      .to('#scene', { display: 'none', yPercent: -100, duration: 0.1,})
      .to('#App', { position:size800? 'fixed' : 'relative' }, '<')
      .to('#homepage', { display: 'block', }, '<')
      .fromTo('#homepage', { opacity: 0 }, { opacity: 1, duration: 1 })
      .to('#anchors',{display:'flex',opacity:1,duration:2})
    console.log('duration', sceneTl.duration())
    // .to('.sections', { translateY: sectionHeights[sectionHeights.length-1] },'<')
    console.log('sceneTl End of SCENE', listening)
    console.log(size)

    setTimeout(() => {
      if (size.width > 400 && funcRan === 0) {
        funcRan++
        console.log('homepage ran : ', funcRan)
        gsapTimelines('desktop', 'homepage')

        //end of set time out
      }
    }, sceneTl.duration() * 1000)
    setTimeout(() => {
      console.log('setTimeout body',funcRan)
      sceneTl.fromTo('body',{overflowY:'none'}, {  overflowY: 'scroll' },)
    

    }, sceneTl.duration() * 1000 )
  }
  // Slides a section in on scroll down
 
  let sectionCountMobile
  const slideInMobile = () => {
    if (current !== undefined) gsap.set(sectionChildren[current], { zIndex: 0 });
    sectionCountMobile = sectionChildren[next] ? sectionChildren[next].getElementsByTagName('section') : 'end'
    console.log('slide in section mobile',sectionCountMobile)
    changeAnimation()
    // gsap.set(sections[next], { zIndex: 1 });
    if(sectionCountMobile === 'end'){
      const tl = gsap
      .timeline({
        paused: true,
        defaults: tlDefaults,
        onComplete: () => {
          console.log('tl mobile runs')
            listening = true;
            current = next;
        }
      })
      .to(sectionChildren[current], { opacity: 0 },)
      .to(sectionChildren[current], { display: 'none' },)
  
    tl.play(0);
    } else {

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            console.log('tl mobile runs')
              listening = true;
              current = next;
          }
        })
        .to(sectionChildren[current], { opacity: 0 },)
        .to(sectionChildren[current], { display: 'none' },)
        .fromTo(sectionChildren[next], { display: 'none' }, { display: 'block' }, '<')
        .fromTo(sectionChildren[next], { opacity: 0 }, { opacity: 1 })
        .fromTo(sectionCountMobile, { opacity: 0 ,yPercent:-10}, { yPercent:0,opacity: 1 ,stagger:1})
      tl.play(0);
    }
  }

  // Slides a section out on scroll up
 
  function slideOutMobile() {
    desktopSlide--
    changeAnimationDesktop()
    console.log('slide out desktop', desktopSlide)
    // gsap.set(sections[current], { zIndex: 1, opacity: 1 });
    // gsap.set(sections[next], { zIndex: 0 });
    gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          listening = true;
          current = next;
        }
      })
      .to(sectionChildren[current], { opacity: 0 },)
      .to(sectionChildren[current], { display: 'none' },)
      .fromTo(sectionChildren[next], { display: 'none' }, { display: 'block' }, '<')
      .fromTo(sectionChildren[next], { opacity: 0 }, { opacity: 1 })
    // camTl.to(camera.position, camTrack[next])
  }
  function handleDirectionMobile() {
    listening = false;

    if (next === sectionChildren.length-1 && direction === 'down' && showScene) {

      skipHero()
    }

 
    if (direction === "down" && next < sectionChildren.length && showScene) {
      next = current + 1;

      slideInMobile();

    } else if (direction === "up" && next > 0 && showScene) {
      next = current - 1;

      slideOutMobile();
    } else if (showScene) listening = true
  }
 
  //DESKTOP SLIDE-IN
  let desktopSlide = 0
  let sectionCount 
 
  function slideInDesktop() {
    desktopSlide++
    console.log('slide in', desktopSlide)
    if (current !== undefined) gsap.set(desktopPages[current], { zIndex: 0 });
    sectionCount = desktopPages[next] ? desktopPages[next].getElementsByClassName('section') : 'end'
    changeAnimationDesktop()
    // gsap.set(sections[next], { zIndex: 1 });
    if(sectionCount === 'end'){
      const tl = gsap
      .timeline({
        paused: true,
        defaults: tlDefaults,
        onComplete: () => {
            listening = true;
            current = next;
        }
      })
      .to(desktopPages[current], { opacity: 0 },)
      .to(desktopPages[current], { display: 'none' },)
  
    tl.play(0);
    } else {

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
              listening = true;
              current = next;
          }
        })
        .to(desktopPages[current], { opacity: 0 },)
        .to(desktopPages[current], { display: 'none' },)
        .fromTo(desktopPages[next], { display: 'none' }, { display: 'block' }, '<')
        .fromTo(desktopPages[next], { opacity: 0 }, { opacity: 1 })
        .fromTo(sectionCount, { opacity: 0 ,yPercent:-10}, { yPercent:0,opacity: 1 ,stagger:1})
      tl.play(0);
    }
    // camTl.to(camera.position, camTrack[next])
  }
  function slideOutDesktop() {
    desktopSlide--
    changeAnimationDesktop()
    console.log('slide out desktop', desktopSlide)
    // gsap.set(sections[current], { zIndex: 1, opacity: 1 });
    // gsap.set(sections[next], { zIndex: 0 });
    gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          listening = true;
          current = next;
        }
      })
      .to(desktopPages[current], { opacity: 0 },)
      .to(desktopPages[current], { display: 'none' },)
      .fromTo(desktopPages[next], { display: 'none' }, { display: 'block' }, '<')
      .fromTo(desktopPages[next], { opacity: 0 }, { opacity: 1 })
    // camTl.to(camera.position, camTrack[next])
  }

  function handleDirectionDesktop() {
    // console.log('direction',direction,'next',next)

    listening = false;

    if (next === desktopPages.length-1 && direction === 'down' && showScene) {
      skipHeroDesktop()
      // if(size800){

      //   skipHeroDesktop()
      // } else skipHero()
    }

    console.log(next)
    if (direction === "down" && next < desktopPages.length && showScene) {
      next = current + 1;

      slideInDesktop();

    } else if (direction === "up" && next > 0 && showScene) {
      next = current - 1;

      slideOutDesktop();
    } else if (showScene) listening = true
  }

  function handleWheel(e) {
    if (!listening) return;
    direction = e.wheelDeltaY < 0 ? "down" : "up";
    // TESTING desktop with mobile
    handleDirectionDesktop();

    // if (size800) {
    //   handleDirectionDesktop();

    // } else handleDirectionMobile();

  }

  function handleTouchStart(e) {
    if (!listening) return;
    const t = e.changedTouches[0];
    touch.startX = t.pageX;
    touch.startY = t.pageY;
  }

  function handleTouchMove(e) {
    if (!listening) return;
    // e.preventDefault();
  }

  function handleTouchEnd(e) {
    if (!listening) return;
    const t = e.changedTouches[0];
    touch.dx = t.pageX - touch.startX;
    touch.dy = t.pageY - touch.startY;
    if (touch.dy > 10) direction = "up";
    if (touch.dy < -10) direction = "down";
    if (size800) {
      handleDirectionDesktop();

    } else handleDirectionDesktop();
  }


console.log('isMoblie:',size800,size)
  return (
    <div id="App"  className="smooth-wrapper" ref={mainRef}>
           <div  >
        
        <div id="scene" ref={container} >
        </div>
        <div className='cen' id="scroll-skip" style={{ display: 'flex', position: 'absolute', bottom: '4rem', right: '4rem' }}>
          <h3 className='text-large blue'>Scroll Down or </h3><h3 style={{ paddingLeft: '0.5ch' }} className="orange text-large skip"
            onClick={() => {
              //Testing Desktop for mobile
              skipHeroDesktop()
              // if(size.width>800) skipHeroDesktop()
              // else skipHeroDesktop()
              }}> Skip</h3>
        </div>
      </div>
          <div ref={contentRef}>
            <ContentContainer 
            backToHero={backToHero} backToHeroDesktop={backToHeroDesktop} isLoaded={isLoaded}/>
            </div> 
    </div>
  )
}

export default App
