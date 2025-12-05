import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = currentScrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      if (currentScrollY < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Left - Name/Logo */}
      <a className="flex items-center space-x-2" href="#">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
          <span className="text-white font-black text-sm">AZ</span>
        </div>
        <span className="text-lg font-black text-white tracking-tight">AKM Zakaria</span>
      </a>

      {/* Middle - Nav Links */}
      <ul className="hidden md:flex items-center space-x-1 bg-black/80 backdrop-blur-xl px-2 py-2 rounded-full shadow-2xl border border-gray-800">
        {navItems.map((item, index) => {
          const sectionId = item.href.replace('#', '')
          const isActive = activeSection === sectionId
          return (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="relative"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`relative px-4 py-2 rounded-full inline-block font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
                href={item.href}
              >
                {/* Gradient background on hover for non-active items */}
                {!isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Text */}
                <span className="relative z-10">{item.name}</span>

                {/* Underline effect on hover */}
                {!isActive && (
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{ width: '70%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            </motion.li>
          )
        })}
      </ul>

      {/* Right - Contact Button (Desktop) */}
      <a href="#contact" className="hidden md:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-2 px-5 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 text-sm"
        >
          CONTACT NOW
        </motion.button>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white text-2xl p-2"
      >
        {mobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-64 bg-gradient-to-b from-black via-purple-950/40 to-black backdrop-blur-xl border-l border-purple-500/30 shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="self-end text-white text-3xl mb-8"
              >
                <HiX />
              </button>

              {/* Mobile Nav Links */}
              <ul className="flex flex-col space-y-4 flex-grow">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                            : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                        }`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Mobile Contact Button */}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-auto">
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/30">
                  CONTACT NOW
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
