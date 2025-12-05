import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      icon: '⚛️',
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'API Integration'],
      icon: '🔧',
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Firebase', 'Database Design', 'CRUD Operations'],
      icon: '🗄️',
    },
    {
      category: 'Animation',
      items: ['Framer Motion', 'AOS Animation', 'CSS Animations', 'Smooth Transitions'],
      icon: '✨',
    },
    {
      category: 'Tools & Others',
      items: ['Git & GitHub', 'Vercel', 'Netlify', 'VS Code', 'Vibe Coding'],
      icon: '🛠️',
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
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
            <p className="text-primary font-semibold tracking-widest text-sm">MY EXPERTISE</p>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:from-purple-900/40 hover:to-black/60 transition-all duration-300 border border-purple-500/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-5xl mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
