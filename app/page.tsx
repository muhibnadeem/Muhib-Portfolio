// app/page.tsx
'use client'

import { useRef, useState, useEffect, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { IconType } from 'react-icons'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiCode, FiBriefcase, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, SiN8N, 
  SiTensorflow, SiPython, SiCplusplus, SiC, SiDotnet, SiFlutter,
  SiOpenjdk, SiMysql, SiMongodb, SiFirebase, SiSupabase, SiGit,
  SiGithub, SiDocker
} from 'react-icons/si'

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  darkColor?: string;
}

type Theme = {
  name: string;
  image: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  accent10: string;
  accent20: string;
  accent30: string;
  accentGlow: string;
  accent2: string;
  accent2_20: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    darkColor: "text-white",
  },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-black",
    darkColor: "text-white",
  },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
  { name: "n8n", icon: SiN8N, color: "text-[#EA4B71]" },
  { name: "Machine Learning", icon: SiTensorflow, color: "text-[#FF6F00]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
  { name: "C#", icon: SiDotnet, color: "text-[#512BD4]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
  { name: "Java", icon: SiOpenjdk, color: "text-[#ED8B00]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#00758F]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3FCF8E]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-black",
    darkColor: "text-white",
  },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
]

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Ecoflitz (UK)",
    period: "Jul 2025 - Oct 2025",
    desc: "Completed a paid remote 3-month internship. Built full-stack web projects with Next.js, React, MySQL, and Node.js. Implemented secure authentication, REST APIs, and optimized backend queries. Collaborated with cross-functional teams to ship production-ready features.",
    icon: FiCode,
  },
  {
    title: "Marketing Intern",
    company: "Air University Incubation Center (Air University)",
    period: "Oct 2025 - Jan 2026",
    desc: "Completed another paid remote internship focused on digital marketing. Developed and executed social media campaigns, created content, and analyzed performance metrics to increase brand awareness and engagement for the incubation center.",
    icon: FiTarget,
  },
  {
    title: "Chief Executive Officer",
    company: "Khuda Hafiz (Startup)",
    period: "2025 - Present",
    desc: "Founded a digital funeral management startup serving clients across Pakistan. Led development of mobile and web apps using React Native, Next.js, Node.js, MongoDB, Tailwind, and Gemini API. Integrated AI chatbot, therapist agent, and live location features. Oversaw product strategy, marketing, and vendor operations. Achievements: 1st Runner-up at Air University Incubation Center; representing in Hult Prize 2025.",
    icon: FiBriefcase,
  },
  {
    title: "Marketing Director",
    company: "Google Developer Groups (Air University)",
    period: "2024 - Present",
    desc: "Managed promotional strategies for AirMUN'25 and AirTech'25, boosting participation by 800+ and creating visual and written content for digital campaigns and event branding.",
    icon: FiTrendingUp,
  },
  {
    title: "Sponsorship Lead",
    company: "Microsoft Learn Student Ambassador Society (Air University)",
    period: "2025 - Present",
    desc: "Negotiated and secured sponsorships for university-level tech events and workshops, collaborating with cross-functional teams to build brand partnerships and enhance visibility.",
    icon: FiUsers,
  },
]

const socials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/muhibnadeem", handle: "muhibnadeem" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/muhibullah-nadeem-540547360", handle: "muhibullah-nadeem-540547360" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/923057834162", handle: "+92 305 783 4162" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/muhib_nadeem/", handle: "@muhib_nadeem" },
]

const themes: Theme[] = [
  {
    name: "cyan",
    image: "Portfolio1.png",
    accent: "#06b6d4",
    accentStrong: "#0891b2",
    accentSoft: "#22d3ee",
    accent10: "rgba(6, 182, 212, 0.10)",
    accent20: "rgba(6, 182, 212, 0.20)",
    accent30: "rgba(6, 182, 212, 0.30)",
    accentGlow: "rgba(34, 211, 238, 0.55)",
    accent2: "#a855f7",
    accent2_20: "rgba(168, 85, 247, 0.20)",
  },
  {
    name: "darkGrey",
    image: "Portfolio2-darkGrey.png",
    accent: "#64748b",
    accentStrong: "#475569",
    accentSoft: "#94a3b8",
    accent10: "rgba(100, 116, 139, 0.10)",
    accent20: "rgba(100, 116, 139, 0.20)",
    accent30: "rgba(100, 116, 139, 0.30)",
    accentGlow: "rgba(148, 163, 184, 0.50)",
    accent2: "#1f2937",
    accent2_20: "rgba(31, 41, 55, 0.20)",
  },
  {
    name: "zinc",
    image: "Portfolio3-zinc.png",
    accent: "#8591aa",
    accentStrong: "#4f6587",
    accentSoft: "#a1a1aa",
    accent10: "rgba(113, 113, 122, 0.10)",
    accent20: "rgba(113, 113, 122, 0.20)",
    accent30: "rgba(113, 113, 122, 0.30)",
    accentGlow: "rgba(161, 161, 170, 0.45)",
    accent2: "#3f3f46",
    accent2_20: "rgba(63, 63, 70, 0.20)",
  },
  {
    name: "bottleGreen",
    image: "Portfolio5-bottleGreen.png",
    accent: "#10b981",
    accentStrong: "#059669",
    accentSoft: "#34d399",
    accent10: "rgba(16, 185, 129, 0.10)",
    accent20: "rgba(16, 185, 129, 0.20)",
    accent30: "rgba(16, 185, 129, 0.30)",
    accentGlow: "rgba(52, 211, 153, 0.55)",
    accent2: "#0f766e",
    accent2_20: "rgba(15, 118, 110, 0.20)",
  },
  {
    name: "navyBlue",
    image: "Portfolio6-navyBlue.png",
    accent: "#3b82f6",
    accentStrong: "#2563eb",
    accentSoft: "#60a5fa",
    accent10: "rgba(59, 130, 246, 0.10)",
    accent20: "rgba(59, 130, 246, 0.20)",
    accent30: "rgba(59, 130, 246, 0.30)",
    accentGlow: "rgba(96, 165, 250, 0.55)",
    accent2: "#1e3a8a",
    accent2_20: "rgba(30, 58, 138, 0.20)",
  },
]

const projects = [
  {
    title: "Mr Fix & Build",
    desc: "A modern service marketplace platform where users can find and hire professionals for home services with a clean UI and smooth user experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "API Integration"],
    image: "mrfixandbuild.png",
    live: "https://mr-fix-and-build.vercel.app",
    github: "https://github.com/muhibnadeem/Mr.FixAndBuild.git",
  },
  {
    title: "Bus Route Planner",
    desc: "Smart system to help users navigate city buses easily.",
    tech: ["React", "Node", "Maps API"],
    image: "https://via.placeholder.com/400x200?text=Bus+Route+Planner",
    live: "https://bus-route-planner.vercel.app",
    github: "https://github.com/yourusername/bus-route-planner",
  },
  {
    title: "Creepy Link",
    desc: "A creative experimental web project that explores user interaction and curiosity-driven navigation through dynamic link behavior. Designed to engage users with unexpected transitions and immersive UI patterns.",
    tech: ["Next.js", "React", "JavaScript", "UI/UX"],
    image: "creepylink.png",
    live: "https://creepy-link.vercel.app/",
    github: "https://github.com/yourusername/creepy-link",
  },
  {
    title: "AI Image Detector",
    desc: "An AI-powered web application that analyzes images to detect patterns and classify content using machine learning models. Designed with a clean interface and optimized for fast and accurate predictions.",
    tech: ["Next.js", "AI/ML", "API Integration", "Python/Model"],
    image: "imagedetector.png",
    live: "YOUR_LIVE_LINK",
    github: "https://github.com/muhibnadeem/AI-Image-Detector.git",
  },
  {
    title: "AI Text Extension",
    desc: "A browser-based AI tool that enhances text by generating, refining, and optimizing content using advanced language models. Focused on improving productivity through intelligent text processing.",
    tech: ["JavaScript", "AI API", "Browser Extension", "NLP"],
    image: "https://via.placeholder.com/400x200?text=AI+Text+Extension",
    live: "YOUR_LIVE_LINK",
    github: "https://github.com/muhibnadeem/AI-textDec-Extension",
  },
]

export default function Home() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [omniOpen, setOmniOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState<Theme>(themes[0])
  const [isTouch, setIsTouch] = useState(false)
  const omniRef = useRef<HTMLDivElement | null>(null)
  const [expandedExp, setExpandedExp] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Get initial theme preference (fallback to system preference)
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' ? true : (stored === 'light' ? false : prefersDark)
    setDark(isDark)

    // Apply theme to HTML element
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    setMounted(true)
    
    return () => {
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    try {
      document.documentElement.classList.toggle('dark', next)
      document.body.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
  }

  // Keep DOM in sync with `dark` state and persist preference
  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', dark)
      document.body.classList.toggle('dark', dark)
    } catch (e) {
      // ignore
    }
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {}
  }, [dark])


  const sections = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const toggleExp = (company: string) => {
    setExpandedExp((prev) => ({ ...prev, [company]: !prev[company] }))
  }

  useEffect(() => {
    if (!omniOpen || !isTouch) return
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null
      if (target && omniRef.current?.contains(target)) return
      setOmniOpen(false)
    }
    window.addEventListener('pointerdown', handlePointerDown)
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [omniOpen, isTouch])


  const themeStyle = {
    '--accent': activeTheme.accent,
    '--accent-strong': activeTheme.accentStrong,
    '--accent-soft': activeTheme.accentSoft,
    '--accent-10': activeTheme.accent10,
    '--accent-20': activeTheme.accent20,
    '--accent-30': activeTheme.accent30,
    '--accent-glow': activeTheme.accentGlow,
    '--accent-2': activeTheme.accent2,
    '--accent-2-20': activeTheme.accent2_20,
  } as CSSProperties

  const orbitThemes = themes.filter((t) => t.name !== activeTheme.name)

  return (
    <div className="bg-white dark:bg-[#0f172a] text-black dark:text-white transition duration-500" style={themeStyle}>
      {mounted && (
        <>
          <style jsx global>{`
            @keyframes omni-orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .omni-orbit {
              animation: omni-orbit 14s linear infinite;
            }
            .exp-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .exp-scroll::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/30">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Muhib's Portfolio</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(sections).map(([key, ref]) => (
              <button key={key} onClick={() => scrollTo(ref)} className="capitalize hover:text-[color:var(--accent-soft)] transition text-sm font-medium">
                {key}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onPointerDown={() => toggleTheme()} 
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>

            <button onClick={() => scrollTo(sections.contact)} className="hidden sm:block bg-[color:var(--accent)] px-4 py-2 rounded-full hover:scale-105 transition font-semibold text-sm">
              Contact
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-[#1a1f3a] border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {Object.entries(sections).map(([key, ref]) => (
                <button key={key} onClick={() => scrollTo(ref)} className="capitalize hover:text-[color:var(--accent-soft)] transition text-left font-medium py-2">
                  {key}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section ref={sections.home} className="pt-20 h-screen flex flex-col md:flex-row items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1">
          <h2 className="text-2xl">Hello, It's Me</h2>
          <h1 className="text-5xl font-bold mt-2" style={{ textShadow: '0 0 12px var(--accent-glow)' }}>Muhibullah Nadeem</h1>
          <h3 className="text-2xl text-[color:var(--accent)] mt-2 h-12">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Web Developer', 2000,
                'Web Designer', 2000,
                'App Developer', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={80}
              className="text-[color:var(--accent-soft)]"
              style={{ textShadow: '0 0 8px var(--accent-glow)' }}
            />
          </h3>
          <motion.a
            href="/Muhib-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-8 bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            View My CV
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex-1 flex justify-center mt-10 md:mt-0">
          <div
            ref={omniRef}
            className="relative"
            onPointerEnter={(e) => {
              if (e.pointerType === 'touch' || isTouch) return
              setOmniOpen(true)
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === 'touch' || isTouch) return
              setOmniOpen(false)
            }}
          >
            {omniOpen && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[300px] h-[300px] rounded-full border border-[color:var(--accent-30)] shadow-[0_0_24px_var(--accent-glow)]" />
              </div>
            )}
            <div
              className={`relative z-10 w-85 h-85 rounded-full flex items-center justify-center transition ${
                omniOpen
                  ? 'bg-[color:var(--accent-30)] shadow-[0_0_90px_var(--accent-glow)]'
                  : 'bg-[color:var(--accent-20)] shadow-[0_0_60px_var(--accent-glow)]'
              }`}
            >
              <button
                type="button"
                onPointerDown={(e) => {
                  if (e.pointerType === 'touch') {
                    setIsTouch(true)
                    setOmniOpen((v) => !v)
                  }
                }}
                onClick={() => {
                  if (!isTouch) setOmniOpen((v) => !v)
                }}
                className="relative w-100 h-100 rounded-full overflow-hidden focus:outline-none translate-x-3 -translate-y-9"
                aria-label="Hover to choose a theme"
              >
                <img src={activeTheme.image} className="w-full h-full object-contain rounded-full" />
              </button>
            </div>

            {omniOpen && (
              <div className="absolute inset-0 flex items-center justify-center omni-orbit z-20">
                {orbitThemes.map((theme, idx) => {
                  const angle = (360 / orbitThemes.length) * idx
                  return (
                    <button
                      key={theme.name}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveTheme(theme)
                        setOmniOpen(false)
                      }}
                      className="absolute w-20 h-20 rounded-full overflow-hidden border border-[color:var(--accent-30)] shadow-[0_0_25px_var(--accent-glow)] hover:shadow-[0_0_28px_var(--accent-glow)] hover:scale-120 transition"
                      style={{
                        transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`,
                      }}
                      aria-label={`Switch to ${theme.name} theme`}
                    >
                      <img src={theme.image} className="w-full h-full object-contain" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section ref={sections.about} className="py-20 px-6 bg-gray-50 dark:bg-[#0a0e27]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4"
          >
            <p>
              I'm a passionate full-stack developer with a strong foundation in web development. With expertise in modern technologies like React, Next.js, and Node.js, I build scalable and user-friendly applications.
            </p>
            <p>
              My journey in tech has been driven by a curiosity to solve real-world problems. I love collaborating with teams and continuously learning new technologies to stay ahead in this fast-paced industry.
            </p>
            <p>
              When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section ref={sections.experience} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

          <div className="exp-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
            {experiences.map((exp, i) => {
              const isExpanded = !!expandedExp[exp.company]
              const short =
                exp.desc.length > 160 ? `${exp.desc.slice(0, 160)}...` : exp.desc
              const Icon = exp.icon ?? FiBriefcase
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="min-w-[280px] md:min-w-[360px] snap-start p-5 rounded-xl bg-white dark:bg-[#0a0e27] border border-[color:var(--accent-30)] shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[color:var(--accent-10)] text-[color:var(--accent)] flex items-center justify-center text-xl shadow-[0_0_14px_var(--accent-glow)]">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                    {isExpanded ? exp.desc : short}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExp(exp.company)}
                      className="text-[11px] font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-soft)] transition"
                    >
                      {isExpanded ? 'Show less' : 'Learn More'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="h-1.5 w-3 rounded-full bg-[color:var(--accent)]" />
            <span className="h-1.5 w-3 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section ref={sections.skills} className="py-15 px-6 text-center">
        <h2 className="text-3xl font-bold">Skills and Frameworks</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            const iconColor = dark && skill.darkColor ? skill.darkColor : skill.color
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className={`text-6xl ${iconColor}`} />
                </motion.div>
                <p className="font-medium text-sm">{skill.name}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Projects */}
      <section ref={sections.projects} className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[color:var(--accent-20)] to-[color:var(--accent-2-20)] backdrop-blur border border-white/10 shadow-lg hover:shadow-xl transition group flex flex-col h-full"
            >
              {/* Image Preview */}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-full h-40 bg-black/50 relative overflow-hidden cursor-pointer flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-sm">View Live →</span>
                </div>
              </motion.a>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3 flex-1">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-[color:var(--accent-10)] border border-[color:var(--accent-20)] rounded-full text-[color:var(--accent-soft)]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 items-center">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-1 px-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-white font-semibold rounded-lg text-center transition text-xs"
                  >
                    Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-1 px-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg text-center transition text-xs"
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section ref={sections.contact} className="py-20 px-6 bg-gray-50 dark:bg-[#0a0e27]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <motion.a
              href="mailto:muhibnadeem79@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] hover:border-[color:var(--accent)] transition shadow-lg"
            >
              <div className="text-3xl text-[color:var(--accent)] mb-3"><FaEnvelope /></div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">muhibnadeem79@gmail.com</p>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="https://wa.me/923057834162"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] hover:border-[color:var(--accent)] transition shadow-lg"
            >
              <div className="text-3xl text-[color:var(--accent)] mb-3"><FaWhatsapp /></div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Chat with me</p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-lg bg-white dark:bg-[#020617] border border-[color:var(--accent-30)] shadow-lg"
            >
              <div className="text-3xl text-[color:var(--accent)] mb-3">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center gap-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[color:var(--accent-20)] flex items-center justify-center text-2xl text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white transition"
                    aria-label={social.name}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <motion.a
              href="mailto:muhibnadeem79@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] px-8 py-3 rounded-full shadow-lg font-semibold transition"
            >
              Let's Talk
            </motion.a>

            <motion.a
              href="https://wa.me/923057834162?text=Hello%20Muhib%21%20we%20want%20to%20collaborate%20with%20you."
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-full shadow-lg font-semibold transition text-white hover:brightness-110"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black dark:bg-[#020617] border-t border-[color:var(--accent-20)] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[color:var(--accent)]">Portfolio</h3>
              <p className="text-sm text-gray-400">
                A full-stack developer passionate about building amazing web experiences and solving real-world problems.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-[color:var(--accent)]">Quick Links</h3>
              <ul className="space-y-2">
                {Object.entries(sections).map(([key, ref]) => (
                  <li key={key}>
                    <button
                      onClick={() => scrollTo(ref)}
                      className="text-sm text-gray-400 hover:text-[color:var(--accent-soft)] transition capitalize"
                    >
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6 text-[color:var(--accent)]">Follow</h3>
              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent-soft)] transition"
                      aria-label={social.name}
                    >
                      <div className="text-3xl">
                        <Icon />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{social.name}</span>
                        <span className="text-xs text-gray-500">{social.handle}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-[color:var(--accent-10)] my-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Muhib Nadeem. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => scrollTo(sections.home)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--accent-10)] hover:bg-[color:var(--accent-20)] text-[color:var(--accent-soft)] text-sm transition"
            >
              Back to Top ↑
            </motion.button>
          </motion.div>
        </div>
      </footer>

        </>
      )}
    </div>
  )
}


