import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      setSuccess(true)
      formRef.current.reset()
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <p className="text-primary font-semibold tracking-widest text-sm">GET IN TOUCH</p>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 border border-purple-500/30"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-500/40 bg-black/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 placeholder:text-gray-500 transition-all"
                  placeholder="AKM Zakaria"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-500/40 bg-black/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 placeholder:text-gray-500 transition-all"
                  placeholder="akm@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-purple-500/40 bg-black/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 placeholder:text-gray-500 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg border border-purple-500/40 bg-black/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 placeholder:text-gray-500 transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </motion.button>
          </form>

          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-3xl mb-2">📧</div>
                <p className="text-gray-300">akmzakaria.dev@gmail.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl mb-2">📱</div>
                <p className="text-gray-300">+8801784943674</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl mb-2">📍</div>
                <p className="text-gray-300">Mirpur-12, Dhaka, Bangladesh</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
