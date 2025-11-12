import React, { useState } from 'react'
import homeVideo from '../../assets/mtc_home.mp4'

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
  <div id="home" className="w-full mb-8 md:mb-12 lg:mb-16 mt-0.6">
      {/* Hero section with video background */}
      <div className="relative w-full h-screen md:h-[600px] lg:h-screen overflow-hidden bg-black">
        {/* Loading spinner - shown while video loads */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        )}

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-70">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
              PURITY IS OUR ESSENCE IN TEA
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home