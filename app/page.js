'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Profile Picture */}
            <motion.img
              src="https://placehold.co/150x150/7e22ce/ffffff?text=FMC"
              alt="FMC"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              FMC
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 px-4 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Developer Muda • SMK TKJ • Spesialis <span className="text-accent font-semibold">Node.js</span>, <span className="text-yellow-600 font-semibold">JavaScript</span>, dan <span className="text-orange-500 font-semibold">HTML</span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="https://wa.me/6288708644467" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 text-white hover:bg-green-600">
                WhatsApp
              </a>
              <a href="https://github.com/FmcStore" target="_blank" rel="noopener noreferrer" className="btn bg-gray-800 text-white hover:bg-gray-900">
                GitHub
              </a>
              <a href="mailto:guardianmarx@gmail.com" className="btn bg-red-500 text-white hover:bg-red-600">
                Email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Keahlian Utama
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Project Contoh
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Realtime Visitor Tracker",
                desc: "Sistem pelacakan pengunjung real-time dengan Node.js & Telegram Bot.",
                img: "https://images.unsplash.com/photo-1551650971-8dd8ec698ebc?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Modern Admin Panel",
                desc: "Panel admin responsif dengan HTML, CSS, dan JavaScript vanilla.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              }
            ].map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{proj.title}</h3>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <span className="text-sm text-gray-500">Contoh proyek dari GitHub (referensi visual)</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 bg-gray-900 text-white">
        <p className="font-medium">© {new Date().getFullYear()} FMC • Developer Muda Indonesia</p>
        <p className="mt-2 text-sm opacity-80">SMK Teknik Komputer dan Jaringan</p>
      </footer>
    </div>
  );
                     }
