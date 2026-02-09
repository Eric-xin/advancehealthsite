'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Register() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background gradient decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join <span className="gradient-text">Advance Health 2026</span>?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Join 80+ passionate changemakers from across Ireland to develop ethical, impactful solutions to real-world healthcare challenges.
              Applications are now open!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXjP4DGZXweGOdDQQV3VORPMJ6rreePVXZQ6kbApmwQpnDWA/viewform?pli=1"
                className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.canva.com/design/DAG4S599y08/KFhWWVulRq_F0pel8fOOVg/view?utm_content=DAG4S599y08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h41de68f344"
                className="btn-secondary text-lg px-10 py-4 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Sponsor
              </motion.a>
            </div>

            <p className="text-sm text-white/40">
              Event: 27-28th Feb & 15th March 2026 | The Business School, Trinity College Dublin
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
