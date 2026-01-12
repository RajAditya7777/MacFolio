import { Navbar, Welcome, Dock, Desktop, Preloader } from '#components/index'
import { Draggable } from 'gsap/all'
import { Terminal, Safari, Resume, Finder, TxtFile, ImgFile, Contact, Photos } from '#windows/index'
import gsap from 'gsap'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'


gsap.registerPlugin(Draggable)


const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} videoLoaded={videoLoaded} />}
      </AnimatePresence>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source src="/video/MacLIve.mp4" type="video/mp4" />
      </video>

      <Navbar />
      <Welcome />
      <Desktop />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
      <Photos />
    </>
  )
}

export default App
