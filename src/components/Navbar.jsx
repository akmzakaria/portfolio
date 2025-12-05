import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

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
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '')
          const isActive = activeSection === sectionId
          return (
            <li key={item.name}>
              <a
                className={`px-4 py-2 rounded-full transition-all duration-300 inline-block font-medium text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Right - Contact Button */}
      <a href="#contact">
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-2 px-5 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 text-sm">
          CONTACT NOW
        </button>
      </a>
    </nav>
  )
}

export default Navbar
