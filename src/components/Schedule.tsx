'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const schedule = {
  'Day 1 - Feb 27': [
    { time: '18:00', event: 'Registration', type: 'logistics' },
    { time: '18:30', event: 'Welcoming Speech & Sponsor Introductions', type: 'main' },
    { time: '18:45', event: 'Tracks Reveal + Problem Statements', type: 'activity' },
    { time: '19:25', event: 'Ice Breaking & Team Bonding', type: 'break' },
    { time: '20:00', event: 'Closing Remarks & Next-Day Briefing', type: 'main' },
  ],
  'Day 2 - Feb 28': [
    { time: '09:00', event: 'Keynote Speaker / Fireside Chat', type: 'main' },
    { time: '09:30', event: 'Workshop: Design Thinking (OpenIncubator)', type: 'workshop' },
    { time: '10:00', event: 'Tea Break', type: 'break' },
    { time: '10:15', event: 'Sprint 1: Group Ideation with Mentor Elevator Pitches', type: 'activity' },
    { time: '11:30', event: 'Lunch Served', type: 'break' },
    { time: '12:30', event: 'Sprint 2: Group Ideation & Building', type: 'activity' },
    { time: '15:00', event: 'Sprint 3: Final Ideation & Video Pitches', type: 'main' },
    { time: '16:00', event: 'Conclude', type: 'main' },
  ],
  'Day 3 - Mar 14': [
    { time: '09:00', event: 'Kick-Off', type: 'logistics' },
    { time: '09:15', event: 'Final Presentations', type: 'main' },
    { time: '12:00', event: 'Judging & Lunch', type: 'break' },
    { time: '14:00', event: 'Closing Remarks & Award Ceremony', type: 'main' },
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
  const [activeDay, setActiveDay] = useState('Day 1 - Feb 27');

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
            27th-28th February & 14th March at Portal, Trinity College Dublin.
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
