import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Application',
      description:
        'Real-time chat application integrated with LLM for intelligent responses. Built with React, Node.js, Socket.io, and OpenAI API.',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Socket.io'],
      image:
        'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1470&auto=format&fit=crop',
      github: 'https://github.com/akmzakaria/akm-skillverse-client',
      live: 'https://akm-skillverse.web.app/',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['Next.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
      github: 'https://github.com/akmzakaria/hero-app',
      live: 'https://hero-io-app-akm.netlify.app/',
    },
    {
      title: 'Task Management System',
      description:
        'Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Chart.js'],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop',
      github: 'https://github.com/akmzakaria/toytopia-toystore',
      live: 'https://orchid-toystore-akm.web.app',
    },
    {
      title: 'AI Content Generator',
      description:
        'Content generation platform using LLMs for creating blog posts, social media content, and marketing copy.',
      tech: ['Next.js', 'OpenAI', 'MongoDB', 'Tailwind', 'Vercel'],
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
      github: 'YOUR_GITHUB_LINK_HERE',
      live: 'https://green-earth-akm.netlify.app/',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description:
        'Interactive analytics dashboard with real-time data visualization and customizable widgets for business insights.',
      tech: ['React', 'Express', 'MongoDB', 'D3.js', 'Redis'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      github: 'https://github.com/akmzakaria/zap-shift-client',
      live: 'https://zapshift-akm.netlify.app',
    },
    {
      title: 'Social Media Platform',
      description:
        'Full-stack social media application with posts, comments, likes, real-time notifications, and user profiles.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io'],
      image:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1474&auto=format&fit=crop',
      github: 'https://github.com/akmzakaria/dragon-news',
      live: 'https://dragon-news-akm.web.app',
    },
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
              className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border border-purple-500/30"
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
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
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
