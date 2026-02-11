'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Eligibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-blue-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center border-2 border-green-400/20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 mb-6"
          >
            <span className="text-2xl">🎓</span>
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
              Eligibility
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Open to ALL Students</span>
            <br />
            <span className="text-white">Across Ireland</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
          >
            Whether you're studying medicine, engineering, computer science, design, business, or any other field—if you're a student in Ireland with a passion for healthcare innovation, you're welcome here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Undergraduate Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Postgraduate Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>All Disciplines Welcome</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
