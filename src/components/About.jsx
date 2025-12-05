import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <p className="text-primary font-semibold tracking-widest text-sm">ABOUT ME</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer specializing in building exceptional digital
              experiences. With expertise in modern web technologies and AI integration, I create
              scalable, performant applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in web development has led me to master the MERN stack, Next.js, and
              explore the exciting world of Large Language Models and AI-powered applications.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-6 mt-8"
            >
              <span className="text-6xl font-black text-primary">6+</span>
              <div className="font-bold uppercase tracking-wider text-gray-400">
                <span>Months of</span>
                <br />
                <span>Learning</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
