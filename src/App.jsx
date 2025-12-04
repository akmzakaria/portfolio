import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-display bg-black text-gray-200">
      <div
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950/40 to-black"
        id="home"
      >
        <Header />
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black via-purple-950/20 to-black">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
