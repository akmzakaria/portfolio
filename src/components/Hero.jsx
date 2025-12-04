import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <main className="relative max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center pt-32 pb-16 lg:pt-0 lg:pb-0 px-6 lg:px-12 xl:px-24">
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
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
              >
                VIEW MY WORK
              </motion.button>
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative min-h-[500px] lg:min-h-screen overflow-hidden flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center p-8">
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
                className="relative w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero
