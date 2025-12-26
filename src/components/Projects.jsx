import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = [
    {
      title: 'TicketGhor',
      description:
        'TicketGhor is an online ticket booking platform where people can easily search, book, and manage tickets for different types of transportation such as buses, trains, and flights—all in one place.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/ticketghor-akm-2.png',
      github: 'https://github.com/akmzakaria/TicketBari-client',
      live: 'https://ticketghor-akm.vercel.app',
    },
    {
      title: 'ZapShift',
      description:
        'A full-stack parcel delivery platform with role-based access for customers, riders, and admins. Features real-time tracking, order management, and comprehensive admin dashboard for complete oversight.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/zapshift.png',
      github: 'https://github.com/akmzakaria/zap-shift-client',
      live: 'https://zap-shift-akm.web.app',
    },
    {
      title: 'AKM SkillVerse',
      description:
        'A comprehensive learning platform where users can browse and purchase courses, while instructors can create and publish their own educational content with full course management capabilities.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/akm-skillverse.png',
      github: 'https://github.com/akmzakaria/akm-skillverse-client',
      live: 'https://akm-skillverse.web.app',
    },
    {
      title: 'HERO.IO',
      description:
        'An innovative app store platform featuring a curated collection of various applications with smooth animations and modern UI, providing users with an intuitive browsing and installation experience.',
      tech: ['React.js', 'AOS Animation', 'Framer Motion'],
      image: '/hero.png',
      github: 'https://github.com/akmzakaria/hero-app',
      live: 'https://hero-app-akm.vercel.app',
    },
    {
      title: 'Toy Store',
      description:
        'An e-commerce platform dedicated to toys where customers can browse, search, and purchase a wide variety of toys with secure authentication and real-time inventory updates. Enjoy fast, secure, and seamless shopping.',
      tech: ['React.js', 'Firebase'],
      image: '/toyzone.png',
      github: 'https://github.com/akmzakaria/toytopia-toystore',
      live: 'https://orchid-toystore-akm.web.app',
    },
    {
      title: 'Green Earth',
      description:
        'An eco-friendly e-commerce platform for plant enthusiasts, featuring a beautiful catalog of plants with detailed care instructions, smooth animations, and seamless shopping experience. Enjoy a fast and seamless experience.',
      tech: ['React.js', 'Framer Motion', 'AOS Animation'],
      image: '/green-earth.png',
      github: 'https://github.com/akmzakaria/green-earth',
      live: 'https://green-earth-akm.vercel.app',
    },
    // {
    //   title: 'Dragon News',
    //   description:
    //     'A dynamic news portal delivering real-time news updates across various categories. Built with vanilla JavaScript, featuring responsive design and fast content loading for optimal user experience.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/dragon-news.png',
    //   github: 'https://github.com/akmzakaria/dragon-news',
    //   live: 'https://dragon-news-akm.web.app',
    // },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <p className="text-primary font-semibold tracking-widest text-sm">PORTFOLIO</p>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border border-purple-500/30 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium mb-4 text-left transition-colors"
                >
                  Read more →
                </button>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 font-semibold py-2 px-4 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 text-center"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-purple-950/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-2xl transition-colors"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 font-semibold py-3 px-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 text-center"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
