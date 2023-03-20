import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {  useEffect, useRef, useState, } from "react";
import { useRouter } from "next/router";
import App from "./App";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";



let animation = {
  mixer:'',
  clips:''
}
const Loading = () => {
  let hostname
  if (typeof window !== 'undefined') {
     hostname = window.location.href;
    console.log('hostname',hostname)
 }
  const router = useRouter()
  console.log('router path',router.basePath)
  const [model,setModel] = useState([])
  const [animations,setAnimations] = useState({})
  const manager = new THREE.LoadingManager()
const objects = [
  { scene: '/poughkeepsie-sierra.gltf', name: 'city', group: new THREE.Group() },
  // { path: '/car1.gltf', name: 'car', group: new THREE.Group() }

]
let models = []
const loader = new GLTFLoader(manager)
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
loader.setPath(hostname)
loader.setDRACOLoader(dracoLoader);
objects.forEach((object, idx) => {
  loader.load('poughkeepsie-sierra.gltf', gltf => {
    // console.log(gltf)
    gltf.scene.castShadow = true;
    animation.mixer = new THREE.AnimationMixer(gltf.scene)
    animation.clips = gltf.animations
    console.log(gltf.animations)
    
    animation.mixer.clipAction(animation.clips[0]).play()

    // animation.mixer.clipAction(animation.clips[3]).play()

    gltf.scene.traverse((child) => {
      // console.log(child)
    
      if (child instanceof THREE.Mesh) {
        const m = child
        m.receiveShadow = true
        m.castShadow = true
        // console.log(m)
      }
      if ((child instanceof THREE.DirectionalLight).isLight) {
        const l = child
        l.castShadow = true
        l.shadow.bias = -0.5
        l.shadow.mapSize.width = 1024
        l.shadow.mapSize.height = 1024
        // console.log(l)
      }
      
    }, (load) => console.log(load))
    objects[idx].group.add(gltf.scene)

    models.push(new THREE.Group())
    models[idx].add(gltf.scene)
  })   
})



  gsap.registerPlugin(ScrollTrigger)
  const loadingRef = useRef()
  const progressRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
 


  useEffect(() => {
    if (loadingRef.current ) {
      const progressBar = document.querySelector('#progress-bar')
      manager.onStart = (url, itemsLoaded, itemsTotal) => {
        console.log('Started Loading File : ' + url + 'Loaded ' + itemsLoaded + ' of '
          + itemsTotal + ' files.')

      }
      manager.onLoad = function () {
        setTimeout(() => {
          // loadingRef.current.style.display = 'none'
          gsap.timeline()
          .to(progressBar,{opacity:0,duration:1})
        .to(loadingRef.current,{opacity:0,duration:1},'<+=50%')
        .to(progressBar,{display:'none'})
        .to(loadingRef.current,{display:'none'})

        if(models.length && animation.clips){
          console.log('models Loaded?' ,models)
          setModel(models)
          setAnimations(animation)
          setIsLoaded(true)
        }
      }, 1500)

        console.log('Models ',models)
      };
      manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        progressBar.value = (itemsLoaded / itemsTotal) * 100
      };
      manager.onError = function (url, error) {
        progressRef.innerText = 'Error Loading.'
        loadingRef.current.style.display = 'none'

      };

    }
  }, [])

  return (
    <>
 
      <div id="loading-container" ref={loadingRef}>
        <Image src="/logo.png" width={400} height={100}  alt="Dk Care Expertise Logo"  style={{padding:'2rem'}}/>
    
        <progress value="0" max="100" id="progress-bar" ref={progressRef}>LOADING</progress>
      </div>
    
   
      <App isLoaded={isLoaded} objects={objects}
        models={model}  animation={animations} />
    
   
    </>
  )
}

export default Loading