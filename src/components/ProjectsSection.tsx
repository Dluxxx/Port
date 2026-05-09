import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import GradientText from './GradientText';

const PROJECTS = [];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: '#B19EEF' }}
            >
              Work
            </span>
          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-tight">
            <GradientText
              colors={['#ffffff', '#888888', '#444444']}
              animationSpeed={12}
            >
              Selected
            </GradientText>

            <span className="ml-3" style={{ color: '#1e1e1e' }}>
              Projects.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.length > 0 ? (
            PROJECTS.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: 'easeOut',
                }}
                className="block group"
                data-cursor="hover"
              >
                {/* Project Card */}
              </motion.a>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center py-24">
              <p
                className="text-sm font-mono tracking-wide"
                style={{ color: '#555' }}
              >
                No projects yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}