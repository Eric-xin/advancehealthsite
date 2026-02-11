'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Patricia',
    role: 'Trinity College Dublin',
    image: '/team/patricia.jpeg',
    bio: '',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Eric Xin',
    role: 'Trinity College Dublin',
    image: '/team/eric.jpg',
    bio: '😁',
    linkedin: 'https://www.linkedin.com/in/ericxin123/',
    twitter: '#',
  },
  {
    name: 'Christine',
    role: 'Trinity College Dublin',
    image: '/team/christine.jpeg',
    bio: '',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Rwan Elmileik',
    role: 'Trinity College Dublin',
    image: '/team/rwan.jpeg',
    bio: '',
    linkedin: '#',
    twitter: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Team() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Passionate innovators dedicated to transforming healthcare through collaboration and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6">
                <div className="mb-6 relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-purple-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/60 mb-4 min-h-[2.5rem]">
                    {member.bio}
                  </p>

                  <div className="flex gap-3 justify-center">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                      aria-label={`${member.name} Twitter`}
                    >
                      <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-6">
            Want to join our mission?
          </p>
          <motion.a
            href="mailto:contact@advancehealth.ie"
            className="btn-primary text-lg px-8 py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
