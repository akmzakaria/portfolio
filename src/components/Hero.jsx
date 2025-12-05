import { motion } from 'framer-motion'
import Navbar from './Navbar'

// Text Content Component
const HeroText = () => {
  return (
    <div className="w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
        <p className="text-purple-400 font-semibold tracking-widest text-sm">
          FULL STACK DEVELOPER
        </p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight mb-6"
      >
        Hi, I'm
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          AKM Zakaria
        </span>
        <br />
        <span className="text-4xl md:text-5xl lg:text-6xl">Full Stack Developer</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-gray-300 max-w-xl mb-8"
      >
        Building modern web applications with React, Node.js, and cutting-edge AI technologies
      </motion.p>
      <motion.a
        href="https://drive.google.com/file/d/10RNqNeJe29lF4Bt-colD-_vFvvZHfRgy/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
        >
          Resume
        </motion.button>
      </motion.a>
    </div>
  )
}

// Image Component
const HeroImage = () => {
  return (
    <div className="relative w-full max-w-lg">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-full blur-3xl"
      ></motion.div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="relative w-full h-auto object-contain rounded-t-2xl"
      />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative pt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end px-6">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-start lg:w-3/5 py-12 lg:py-20">
            <HeroText />
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-end justify-end lg:w-2/5 self-end"
          >
            <HeroImage />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Hero
