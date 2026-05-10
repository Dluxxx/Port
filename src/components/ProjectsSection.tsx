import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import GradientText from './GradientText';

const GAMES = [
  {
    title: 'Mobile Legends',
    rank: 'Mythic Immortal ⭐100',
    desc: 'Game MOBA 5v5 paling kompetitif di Asia Tenggara. Sudah mencapai rank tertinggi Mythic Immortal dengan bintang 100.',
    color: '#e8c84a',
    icon: '⚔️',
    tags: ['MOBA', 'Mythic Immortal', '5v5', 'Solo Rank'],
    link: '#',
  },
  {
    title: 'FC Mobile',
    rank: 'OVR 119',
    desc: 'Game sepak bola mobile terbaik. Berhasil membangun squad dengan Overall Rating 119, salah satu yang tertinggi.',
    color: '#00d46a',
    icon: '⚽',
    tags: ['Sports', 'OVR 119', 'Squad Builder', 'Ultimate Team'],
    link: '#',
  },
  {
    title: 'Honkai Star-Rail',
    rank: 'Level 70',
    desc: 'RPG turn-based dari HoYoverse. Sudah mencapai Trailblaze Level 70 dengan koleksi karakter yang solid.',
    color: '#c0a6f7',
    icon: '🌌',
    tags: ['RPG', 'Turn-Based', 'Level 70', 'HoYoverse'],
    link: '#',
  },
  {
    title: 'Free Fire',
    rank: 'Master',
    desc: 'Battle Royale mobile yang intens. Telah meraih rank Master dalam mode kompetitif ranked.',
    color: '#ff6b35',
    icon: '🔥',
    tags: ['Battle Royale', 'Master Rank', 'Ranked Mode', 'Survival'],
    link: '#',
  },
  {
    title: 'Chess',
    rank: 'ELO 910',
    desc: 'Permainan strategi klasik yang mengasah logika dan perencanaan. Rating ELO 910 dalam pertandingan online.',
    color: '#a0a0a0',
    icon: '♟️',
    tags: ['Strategy', 'ELO 910', 'Online Chess', 'Classic'],
    link: '#',
  },
];

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
              Games
            </span>
          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-tight">
            <GradientText
              colors={['#ffffff', '#888888', '#444444']}
              animationSpeed={12}
            >
              Games I
            </GradientText>

            <span className="ml-3" style={{ color: '#1e1e1e' }}>
              Play.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GAMES.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: 'easeOut',
              }}
              className="block group glass-card glass-card-hover rounded-2xl p-6 cursor-default"
              data-cursor="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${g.color}15`,
                    border: `1px solid ${g.color}30`,
                  }}
                >
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">{g.title}</h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: g.color }}>{g.rank}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666' }}>
                {g.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {g.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: `${g.color}10`,
                      border: `1px solid ${g.color}25`,
                      color: g.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
