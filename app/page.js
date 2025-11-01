'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture */}
            <motion.img
              src="https://via.placeholder.com/150/6366f1/ffffff?text=FMC"
              alt="FMC Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <h1 className="text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-4">
              FMC
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Developer Muda • SMK TKJ • Spesialis <span className="text-accent font-semibold">Node.js</span>, <span className="text-yellow-600 font-semibold">JavaScript</span>, dan <span className="text-orange-500 font-semibold">HTML</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="https://wa.me/6288708644467" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition shadow-lg"
              >
                WhatsApp
              </a>
              <a 
                href="https://github.com/FmcStore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900 transition shadow-lg"
              >
                GitHub
              </a>
              <a 
                href="mailto:guardianmarx@gmail.com"
                className="px-6 py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition shadow-lg"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-12 text-gray-900">Keahlian Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68a063' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
              { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26' }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-shadow shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12 text-gray-900">Project Contoh</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Berikut beberapa contoh proyek open-source yang menginspirasi (diambil dari GitHub untuk referensi visual).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Realtime Visitor Tracker",
                desc: "Aplikasi pelacak pengunjung website real-time dengan Node.js & Telegram Bot.",
                img: "https://images.unsplash.com/photo-1551650971-8dd8ec698ebc?auto=format&fit=crop&w=600&q=80",
                link: "#"
              },
              {
                title: "Modern Admin Dashboard",
                desc: "Dashboard admin responsif dengan HTML, CSS, dan JavaScript vanilla.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                link: "#"
              }
            ].map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <a href={proj.link} className="text-accent font-medium hover:underline">Lihat Demo</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 bg-dark text-light">
        <p>© {new Date().getFullYear()} FMC. Built with ❤️ and Next.js.</p>
        <p className="mt-2 text-sm">SMK TKJ • Developer Muda Indonesia</p>
      </footer>
    </div>
  );
}
