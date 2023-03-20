import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {  useEffect, useRef, useState, } from "react";

import App from "./App";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";

const manager = new THREE.LoadingManager()
const camAndCar = new THREE.Group()
let animation = {
  mixer:'',
  clips:''
}
const objects = [
  { path: '../public/poughkeepsie-sierra.glb', name: 'city', group: new THREE.Group() },
  // { path: '/car1.gltf', name: 'car', group: new THREE.Group() }

]
const models = []
export const scene = new THREE.Scene()
const loader = new GLTFLoader(manager)
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
loader.setDRACOLoader(dracoLoader);
objects.forEach((object, idx) => {
  loader.load(object.path, gltf => {
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


const Loading = () => {

  gsap.registerPlugin(ScrollTrigger)
  const loadingRef = useRef()
  const progressRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
 
  camAndCar.add(models[1])


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

        }, 1500)
        setIsLoaded(true)
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
            models={models}  animation={animation} />
   
    </>
  )
}

export default Loading