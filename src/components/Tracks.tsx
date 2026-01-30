'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const tracks = [
  {
    title: 'AI Diagnostics',
    description: 'Build machine learning models for early disease detection and medical imaging analysis.',
    icon: '🧠',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Patient Care',
    description: 'Create tools that improve patient experience, communication, and care coordination.',
    icon: '💊',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mental Health',
    description: 'Develop solutions for mental wellness, therapy access, and emotional support.',
    icon: '🧘',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Health Data',
    description: 'Work with healthcare data to uncover insights and improve decision-making.',
    icon: '📊',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Accessibility',
    description: 'Make healthcare more accessible to underserved communities and people with disabilities.',
    icon: '♿',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Open Innovation',
    description: 'Have a unique idea? This track welcomes all healthcare-related innovations.',
    icon: '💡',
    color: 'from-rose-500 to-purple-500',
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tracks" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tracks</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose your focus area and build something that matters.
            Each track offers unique challenges and mentorship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {track.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-sm text-white/50">{track.description}</p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
