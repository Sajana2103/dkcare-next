import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useEffect, useRef, useState, } from "react";
import { useRouter } from "next/router";
import App from "./App";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";



let animation = {
  mixer: '',
  clips: ''
}
const Loading = () => {
  let hostname

  const router = useRouter()
  console.log('router path', router.basePath)
  const [model, setModel] = useState([])
  const [animations, setAnimations] = useState({})
  const manager = new THREE.LoadingManager()
  const objects = [
    { scene: '/poughkeepsie-sierra3.gltf', name: 'city', group: new THREE.Group() },
    // { path: '/car1.gltf', name: 'car', group: new THREE.Group() }

  ]
  let models = []
  const loader = new GLTFLoader(manager)
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  // loader.setPath(hostname)
  loader.setDRACOLoader(dracoLoader);
  objects.forEach((object, idx) => {
    if (typeof window !== 'undefined') {
      hostname = window.location.href;
      console.log('hostname', hostname)
      loader.load(hostname + 'poughkeepsie-sierra3.gltf', gltf => {
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
    }
  })



  gsap.registerPlugin(ScrollTrigger)
  const loadingRef = useRef()
  const progressRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)



  useEffect(() => {
    if (loadingRef.current) {
      
      const progressBar = document.querySelector('#progress-bar')
    
      manager.onStart = (url, itemsLoaded, itemsTotal) => {
        // console.log('Started Loading File : ' + url + 'Loaded ' + itemsLoaded + ' of '
        //   + itemsTotal + ' files.')

      }
      manager.onLoad = function () {
        if (models.length && animation.clips) {
          setModel(models)
          setAnimations(animation)
          setIsLoaded(true)
        }
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
        <Image src="/logo.png" id="logo-loading" width={400} height={100} alt="Dk Care Expertise Logo" style={{ padding: '2rem' }} />

        <progress value="0" max="100" id="progress-bar" ref={progressRef}>LOADING</progress>
      </div>


      <App isLoaded={isLoaded} objects={objects}
        models={model} animation={animations} />


    </>
  )
}

export default Loading