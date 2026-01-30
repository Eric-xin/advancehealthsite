'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'Anyone passionate about healthcare innovation! We welcome developers, designers, healthcare professionals, researchers, and students. You can participate individually or in teams of up to 4 members.',
  },
  {
    question: 'Do I need to have a team beforehand?',
    answer: 'No! We have a team formation session at the beginning of the Ideathon where you can meet other participants and form teams. Solo participants are also welcome.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, and any hardware you might need for your project. We provide WiFi, power outlets, meals, snacks, and a comfortable building space.',
  },
  {
    question: 'Is there a participation fee?',
    answer: 'No, Advance Health is completely free to participate! We cover meals, snacks, and swag for all participants.',
  },
  {
    question: 'Do I need healthcare experience?',
    answer: 'Not at all! While healthcare knowledge is helpful, we value diverse perspectives. Mentors with healthcare expertise will be available to guide you.',
  },
  {
    question: 'What are the judging criteria?',
    answer: 'Projects are judged on innovation, technical implementation, potential impact on healthcare, and presentation quality. Each track may have additional specific criteria.',
  },
  {
    question: 'Can I work on a pre-existing project?',
    answer: 'All projects must be started from scratch at the Ideathon. However, you can come with ideas and use open-source libraries and APIs.',
  },
  {
    question: 'Will there be prizes?',
    answer: 'Yes! We have over $50,000 in prizes including cash awards, cloud credits, mentorship opportunities, and the chance to pilot your solution with healthcare partners.',
  },
];

function FAQItem({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-white/50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-lg text-white/60">
            Got questions? We have answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-white/50"
        >
          Still have questions?{' '}
          <a href="mailto:contact@advancehealth.ie" className="text-blue-400 hover:underline">
            Contact us
          </a>
        </motion.p>
      </div>
    </section>
  );
}
