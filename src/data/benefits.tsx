import {
  FiBarChart2,
  FiBookmark,
  FiBookOpen,
  FiHeadphones,
  FiLock,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiVolume2,
} from "react-icons/fi";

import { IBenefit } from "@/types";
import { LuLayoutPanelTop } from "react-icons/lu";
import { PiMoonStars } from "react-icons/pi";

export const benefits: IBenefit[] = [
  {
    title: "Your Spiritual Dashboard",
    description:
      "Visualize your self-growth across the 7 essential dimensions of a balanced Muslim life. The radar chart keeps your inner state visible—so you never grow lopsided.",
    bullets: [
      {
        title: "7 Dimensions of the Nafs",
        description:
          "Faith, Discipline, Knowledge, Character, Remembrance, Body, and Purpose—each one tracked, each one strengthened.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Know Where You're Weak",
        description:
          "Your lowest-scoring dimension is spotlighted, helping you realign your focus and intention.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "See Yourself Evolve",
        description:
          "As you complete tasks and maintain streaks, your spiritual profile updates in real time.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.png",
  },

  {
    title: "Daily Qur'anic Guidance",
    description:
      "Strengthen your bond with the Qur’an through a beautifully integrated system of reflection, habit, and knowledge—right at your fingertips.",
    bullets: [
      {
        title: "Daily Ayah & Reflections",
        description:
          "A new verse every day, paired with your thoughts or tafsir to keep you engaged and mindful.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Track Streaks & Save Gems",
        description:
          "Maintain a reading habit and bookmark your favorite ayahs and reflections for later.",
        icon: <FiBookmark size={26} />,
      },
      {
        title: "Listen, Search, Reflect",
        description:
          "Explore Qur’anic audio, search by Surah or keyword, and build your personal library of insights.",
        icon: <FiHeadphones size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.png",
  },
  {
    title: "A Better Way to Read the Qur’an",
    description:
      "Arabic, translation, audio, and tafsir—all in one place. Clean, simple, and built for reflection.",
    bullets: [
      {
        title: "Side-by-Side View",
        description:
          "Read Arabic with the English meaning together. No clutter, no confusion.",
        icon: <LuLayoutPanelTop size={26} />,
      },
      {
        title: "Audio & Tafsir Built-In",
        description:
          "Tap to listen or dive deeper into tafsir without switching screens.",
        icon: <FiVolume2 size={26} />,
      },
      {
        title: "Dark Mode Done Right",
        description:
          "A warm, easy-on-the-eyes theme that feels right—day or night.",
        icon: <PiMoonStars size={26} />,
      },
    ],
    imageSrc: "/images/mockup-3.png",
  },
];
