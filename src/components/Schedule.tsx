'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const schedule = {
  'Day 1': [
    { time: '9:00 AM', event: 'Check-in & Registration', type: 'logistics' },
    { time: '10:00 AM', event: 'Opening Ceremony', type: 'main' },
    { time: '11:00 AM', event: 'Team Formation & Ideation', type: 'activity' },
    { time: '12:00 PM', event: 'Lunch Break', type: 'break' },
    { time: '1:00 PM', event: 'Building Begins!', type: 'main' },
    { time: '3:00 PM', event: 'Workshop: Healthcare APIs', type: 'workshop' },
    { time: '6:00 PM', event: 'Dinner', type: 'break' },
    { time: '8:00 PM', event: 'Mentor Office Hours', type: 'activity' },
    { time: '11:00 PM', event: 'Late Night Snacks', type: 'break' },
  ],
  'Day 2': [
    { time: '8:00 AM', event: 'Breakfast', type: 'break' },
    { time: '10:00 AM', event: 'Workshop: ML in Healthcare', type: 'workshop' },
    { time: '12:00 PM', event: 'Lunch Break', type: 'break' },
    { time: '1:00 PM', event: 'Progress Check-ins', type: 'activity' },
    { time: '3:00 PM', event: 'Workshop: Pitching Your Idea', type: 'workshop' },
    { time: '6:00 PM', event: 'Dinner', type: 'break' },
    { time: '9:00 PM', event: 'Code Freeze Warning', type: 'logistics' },
    { time: '11:59 PM', event: 'Submissions Due', type: 'main' },
  ],
  'Day 3': [
    { time: '9:00 AM', event: 'Breakfast & Prep', type: 'break' },
    { time: '10:00 AM', event: 'Demo Presentations Begin', type: 'main' },
    { time: '1:00 PM', event: 'Lunch During Demos', type: 'break' },
    { time: '3:00 PM', event: 'Judging Deliberation', type: 'activity' },
    { time: '4:00 PM', event: 'Awards Ceremony', type: 'main' },
    { time: '5:00 PM', event: 'Closing & Networking', type: 'main' },
  ],
};

const typeColors: Record<string, string> = {
  main: 'bg-blue-500',
  workshop: 'bg-purple-500',
  activity: 'bg-green-500',
  break: 'bg-orange-500',
  logistics: 'bg-gray-500',
};

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState('Day 1');

  return (
    <section id="schedule" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Three days of innovation, learning, and building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeDay === day
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {schedule[activeDay as keyof typeof schedule].map((item, index) => (
            <motion.div
              key={item.time + item.event}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-4 flex items-center gap-4 group hover:bg-white/5 transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${typeColors[item.type]} flex-shrink-0`} />
              <div className="w-24 text-sm font-mono text-white/50 flex-shrink-0">
                {item.time}
              </div>
              <div className="flex-1 font-medium">{item.event}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
        >
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <span className="text-white/50 capitalize">{type}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
