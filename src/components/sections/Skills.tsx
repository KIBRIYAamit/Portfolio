"use client";

import { useState } from "react";
import {
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  RiNextjsFill, RiTailwindCssFill
} from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import { motion, AnimatePresence } from "framer-motion";

type Category = "All Tech" | "Frontend" | "Backend/DB" | "Tools" | "AI & Prompts";

// Custom SVG Icons for AI Tools & Services
const CodexIcon = ({ className }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="codex-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
    {/* Official Codex Purple Cloud Logo */}
    <path
      d="M18.8 10.5C18.8 7.5 16.3 5 13.3 5C11.8 5 10.5 5.6 9.5 6.6C8.6 5.6 7.3 5 5.8 5C3.3 5 1.3 7 1.3 9.5C1.3 10.5 1.6 11.4 2.2 12.1C1.6 13 1.3 14 1.3 15C1.3 17.8 3.5 20 6.3 20C7.5 20 8.6 19.6 9.5 18.8C10.5 19.6 11.8 20 13.3 20C16.1 20 18.3 17.8 18.3 15C18.3 14 18 13 17.4 12.1C18.3 11.4 18.8 10.5 18.8 10.5Z"
      fill="url(#codex-cloud-grad)"
    />
    {/* Terminal > _ Prompt */}
    <path
      d="M6.8 9.2L9.8 12.2L6.8 15.2"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8 15.2H15.8"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const ClaudeIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={{ color: "#D97757", ...style }} viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
    {/* Official Claude Code CLI Pixel Mascot Logo */}
    <path d="M3 5h18v11H3V5zm-3 5h3v3H0v-3zm21 0h3v3h-3v-3zm-16.5 6h1.8v3.5H4.5V16zm3 0h1.8v3.5H7.5V16zm7.2 0h1.8v3.5h-1.8V16zm3 0h1.8v3.5h-1.8V16zM6 8h1.6v3H6V8zm10.4 0h1.6v3h-1.6V8z" />
  </svg>
);

const CursorIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="https://cdn.simpleicons.org/cursor"
    alt="Cursor"
    width={36}
    height={36}
    className={className}
    style={{ filter: "brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(500%) hue-rotate(180deg)", ...style }}
  />
);

const GeminiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24Z" />
  </svg>
);

const AntigravityIcon = ({ className }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="antigravity-grad" x1="10%" y1="90%" x2="85%" y2="10%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="28%" stopColor="#06B6D4" />
        <stop offset="52%" stopColor="#10B981" />
        <stop offset="76%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    {/* Dark Theme Antigravity Curved 'A' Arch Logo */}
    <path
      d="M3.2 20.2C3.8 17.5 5.5 13.2 8.2 8.3C9.7 5.6 11 3.5 12 3.5C13 3.5 14.3 5.6 15.8 8.3C18.5 13.2 20.2 17.5 20.8 20.2C21.1 21.3 19.8 21.9 19.1 21C17.2 18.2 14.7 12 12 12C9.3 12 6.8 18.2 4.9 21C4.2 21.9 2.9 21.3 3.2 20.2Z"
      fill="url(#antigravity-grad)"
    />
  </svg>
);

const KimiIcon = ({ className }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    {/* Official Kimi Logo - Bold White K with Blue Teardrop */}
    <path
      d="M4.5 4H7.8V20H4.5V4ZM7.8 12.8L14.2 4.8H18.2L11 13.5L18.8 20H14.5L7.8 14.2V12.8Z"
      fill="#FFFFFF"
    />
    <path
      d="M17.5 5.2C17.5 3.7 18.7 2.5 20.2 2.5C21.7 2.5 22.8 3.7 22.8 5.2C22.8 7 20.2 9.2 20.2 9.2C20.2 9.2 17.5 7 17.5 5.2Z"
      fill="#2563EB"
    />
  </svg>
);

// Official OpenAI logo for ChatGPT
const OpenAIIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7712-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7469-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7947.7947 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.771.771 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3423 8.7909a4.4607 4.4607 0 0 1 2.3364-1.9733V12.44a.7757.7757 0 0 0 .388.6765l5.838 3.3686-2.0153 1.1685a.0758.0758 0 0 1-.071 0l-4.8303-2.7913A4.4944 4.4944 0 0 1 2.3423 8.7909zm16.5963 3.8558-5.838-3.3733 2.0153-1.1638a.0758.0758 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.682a.7757.7757 0 0 0-.4021-.6764zm2.0106-3.0137l-.142-.0852-4.7735-2.7582a.771.771 0 0 0-.7806 0L9.4103 10.158V7.8256a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7913a4.4992 4.4992 0 0 1 6.6758 4.6606zm-12.641-4.2154a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7947.7947 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V9.8258a4.504 4.504 0 0 1 4.4945-4.4944zm.6487 5.6454 2.8318 1.634-2.8318 1.634-2.8318-1.634z" />
  </svg>
);

type Skill = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
  category: Category;
};

const skills: Skill[] = [
  // Frontend
  { name: "TypeScript",   icon: SiTypescript,     color: "#3178C6", category: "Frontend" },
  { name: "JavaScript",   icon: FaJs,              color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5",        icon: FaHtml5,           color: "#E34F26", category: "Frontend" },
  { name: "CSS3",         icon: FaCss3Alt,         color: "#1572B6", category: "Frontend" },
  { name: "React",        icon: FaReact,           color: "#61DAFB", category: "Frontend" },
  { name: "Next.js",      icon: RiNextjsFill,      color: "#ffffff", category: "Frontend" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8", category: "Frontend" },
  // Backend / DB
  { name: "Node.js",  icon: FaNodeJs,  color: "#339933", category: "Backend/DB" },
  { name: "Express",  icon: SiExpress, color: "#ffffff",  category: "Backend/DB" },
  { name: "MongoDB",  icon: SiMongodb, color: "#47A248", category: "Backend/DB" },
  // Tools
  { name: "Git",    icon: FaGitAlt, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff",  category: "Tools" },
  // AI & Prompts
  { name: "Antigravity",          icon: AntigravityIcon, color: "#a78bfa", category: "AI & Prompts" },
  { name: "Claude Code Terminal", icon: ClaudeIcon,      color: "#d97706", category: "AI & Prompts" },
  { name: "Cursor",               icon: CursorIcon,      color: "#60a5fa", category: "AI & Prompts" },
  { name: "Codex",                icon: CodexIcon,       color: "#818cf8", category: "AI & Prompts" },
  { name: "Kimi",                 icon: KimiIcon,        color: "#f472b6", category: "AI & Prompts" },
  { name: "ChatGPT",              icon: OpenAIIcon,      color: "#10A37F", category: "AI & Prompts" },
  { name: "Gemini",               icon: GeminiIcon,      color: "#4285F4", category: "AI & Prompts" },
];

const categories: Category[] = ["All Tech", "Frontend", "Backend/DB", "Tools", "AI & Prompts"];

export function Skills() {
  const [active, setActive] = useState<Category>("All Tech");

  const filtered =
    active === "All Tech" ? skills : skills.filter((s) => s.category === active);

  return (
    <section className="mt-section-gap flex flex-col items-center reveal-section" id="skills">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Technologies</h2>
        <p className="font-label-md text-on-surface-variant mt-2">My Tech Stack</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
              active === cat
                ? "text-on-primary shadow-lg shadow-primary/30"
                : "bg-surface-container-high/50 text-on-surface-variant border border-primary/15 hover:border-primary/40 hover:text-on-surface"
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 bg-primary -z-10"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="w-full max-w-5xl min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap justify-center gap-stack-lg"
          >
            {filtered.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  className="flex flex-col items-center gap-3 cursor-pointer group"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div
                    className="tech-icon-container relative flex items-center justify-center rounded-full border border-primary/20 bg-surface-container-high/40 p-4 transition-all"
                    style={{ boxShadow: `0 0 15px rgba(155, 202, 255, 0.05)` }}
                  >
                    <Icon
                      className="size-9 transition-transform group-hover:rotate-6 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors text-center w-24 leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Infinite scrolling Marquee */}
      <div className="w-full overflow-hidden mt-16 bg-surface-container-low/30 border-y border-primary/10 py-6 relative">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee whitespace-nowrap gap-12 select-none hover:[animation-play-state:paused]">
          {[...skills, ...skills, ...skills].map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-on-surface-variant font-medium tracking-wide">
                <Icon className="size-6" style={{ color: skill.color }} />
                <span>{skill.name}</span>
                <span className="text-primary/20 mx-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
