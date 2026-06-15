import ytRevampImg from '../assets/yt_revamp.png';
import skincareDesignImg from '../assets/skincare_design.png';
import cloudExplainerImg from '../assets/cloud_explainer.png';
import luxuryEstatesImg from '../assets/luxury_estates.png';
import fitlifeSaasImg from '../assets/fitlife_saas.png';
import paywiseWalletImg from '../assets/paywise_wallet.png';

export const projectsData = [
  {
    id: "yt-masterclass",
    title: "YouTube Channel Revamp",
    category: "Video Editing",
    shortDescription: "A complete edit styling and visual branding upgrade for an educational creator with 1M+ subscribers.",
    description: "We revamped the editing style, thumbnail guidelines, sound signatures, and pacing for an educational creator. The project focused on boosting retention and click-through rates.",
    client: "EduTech Creators Network",
    challenge: "The creator suffered a drop in viewer retention (down to 32%) and struggled to keep audiences engaged during complex technical explanations.",
    solution: "We restructured the narrative pacing, added micro-animations, integrated customized sound effects, and introduced interactive graphical sidebars to explain technical jargon.",
    result: "Average viewer retention increased from 32% to 54%, and subscriber acquisition rate doubled within 60 days of the launch.",
    image: ytRevampImg
  },
  {
    id: "aurora-branding",
    title: "Aurora Eco-Skincare Identity",
    category: "Graphic Design",
    shortDescription: "Organic, premium brand strategy, logo suite, packaging, and custom labels for a sustainable skin-care startup.",
    description: "Aurora Cosmetics required a luxurious yet earth-friendly visual system that highlighted their sustainable ingredient sourcing and organic formulation.",
    client: "Aurora Eco-Cosmetics LLC",
    challenge: "The client needed to stand out in a saturated cosmetic market while visually conveying their strictly eco-friendly ethos without looking cheap or overly rustic.",
    solution: "We designed a minimalist typography logo system using gold accents (#EE9B00) against rich burgundy (#8B2026) background colors, utilizing eco-certified cardboard texture printing.",
    result: "Successful retail launch in 15 premium stores, with the packaging design receiving features on three top design blogs.",
    image: skincareDesignImg
  },
  {
    id: "apex-explainer",
    title: "Apex Cloud Explainer",
    category: "Motion Graphics",
    shortDescription: "A 90-second animated explainer explaining automated hybrid-cloud infrastructure routing systems.",
    description: "An animated walkthrough simplifying automated cloud routing for enterprise B2B decision-makers. Built using highly detailed vector elements and fluid transitions.",
    client: "Apex Systems Inc.",
    challenge: "Enterprise managers failed to grasp how Apex's routing software reduced server costs, as the details were highly technical and abstract.",
    solution: "We designed a character-driven storyline using animated network packets visualized as packages on a modern hyper-speed rail system, resolving bottlenecks in real-time.",
    result: "The explainer video on the Apex landing page led to a 42% increase in demo requests from product page visitors.",
    image: cloudExplainerImg
  },
  {
    id: "zenith-real-estate",
    title: "Zenith Luxury Estates Site",
    category: "Web Design",
    shortDescription: "Ultra-premium property portal UI featuring interactive floorplans and booking modules.",
    description: "A luxury design prototype featuring sleek dark modes, full-screen image grids, high-contrast typography, and seamless property filtering interfaces.",
    client: "Zenith Real Estate Development",
    challenge: "Zenith's previous site felt generic, slow, and failed to showcase the premium value of their multi-million dollar property developments.",
    solution: "We crafted a dark-themed, glassmorphic layout using high-quality custom visuals, large editorial fonts, and clean, single-page scroll animations.",
    result: "Approved design handoff that directly inspired Zenith's current web frontend, leading to high praise from their international clients.",
    image: luxuryEstatesImg
  },
  {
    id: "fitlife-portal",
    title: "FitLife SaaS Platform",
    category: "Web Development",
    shortDescription: "A blazing-fast react dashboard system for scheduling fitness instructors and managing member portals.",
    description: "A React web application built with a responsive dashboard layout, featuring charts, scheduling tools, member registration forms, and Stripe integrations.",
    client: "FitLife Global Gyms",
    challenge: "FitLife relied on legacy scheduling databases that suffered high crash rates during peak class booking hours, causing member complaints.",
    solution: "We engineered a clean-coded React dashboard integrating state management, utilizing optimistic UI updates and robust API caching.",
    result: "Classes schedule page load time dropped to 0.4 seconds, booking failures dropped to zero, and customer service tickets decreased by 65%.",
    image: fitlifeSaasImg
  },
  {
    id: "paywise-wallet",
    title: "PayWise Wallet App",
    category: "Mobile App Development",
    shortDescription: "A secure cross-platform digital wallet and peer-to-peer transaction app developed in React Native.",
    description: "A fluid, secure mobile app featuring real-time transaction updates, biometric login, and dynamic SVG charts summarizing user spending.",
    client: "PayWise FinTech Group",
    challenge: "Users complained that the existing transaction history and card linking interfaces felt slow and confusing, resulting in high uninstall rates.",
    solution: "We rebuilt the core flows using React Native, utilizing hardware biometric triggers and highly polished, responsive visual confirmation animations.",
    result: "App Store ratings increased from 3.1 to 4.7 stars, with a 350% increase in daily active peer-to-peer transfers.",
    image: paywiseWalletImg
  }
];
