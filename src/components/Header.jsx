import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <a className="flex items-center space-x-3" href="#">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-black text-lg">AZ</span>
            </div>
            <span className="text-xl font-black text-white tracking-tight">AKM Zakaria</span>
          </a>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Navbar />
          </div>
          <a href="#contact">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
              CONTACT NOW
            </button>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
