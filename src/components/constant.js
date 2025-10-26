// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";
import ml from "../assets/icons/skills-icon/ml.png";
import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/next.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import solidity from "../assets/icons/skills-icon/solidity.svg";
import AI from "../assets/icons/skills-icon/ai.svg";
import rust from "../assets/icons/skills-icon/rust.svg";
import go from "../assets/icons/skills-icon/go.svg";
import haskell from "../assets/icons/skills-icon/haskell.svg";
import foundry from "../assets/icons/skills-icon/foundry.png";
import ipfs from "../assets/icons/skills-icon/IPFS.svg";
import vue from "../assets/icons/skills-icon/vue.svg";
import fastapi from "../assets/icons/skills-icon/FastApi.svg";
// projectImagess
import dappLocker from "../assets/images/projectImages/new1.png";
import towns from "../assets/images/projectImages/new2.png";
import sunpump from "../assets/images/projectImages/new3.png";
import swoop from "../assets/images/projectImages/new4.png";
import cliniclink from "../assets/images/projectImages/project12.png";
import arisescholar from "../assets/images/projectImages/project13.png";
import insightify from "../assets/images/projectImages/project11.png";
import qz from "../assets/images/projectImages/project2.png";
import tesla from "../assets/images/projectImages/project3.png";
import emd from "../assets/images/projectImages/project4.png";
import algo from "../assets/images/projectImages/project5.png";
// import furni from "../assets/images/projectImages/project6.png";
import ftc from "../assets/images/projectImages/project7.png";
// import ngo from "../assets/images/projectImages/project8.png";
import metashield from "../assets/images/projectImages/project9.png";

export const Projects = {
  dappLocker: {
    image: dappLocker,
    title: "DappLocker",
    subTitle: "Lung Disease Detection System",
    insights: {
      desc: ` DappLooker is a solid tool for blockchain analytics and dashboards—especially handy if you're working across chains and need a quick way to visualize data.`,
      // category: "Healthcare, ML, Web Application",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: ipfs, name: 'IPFS' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://dapplooker.com/",
  },
  ClinicLink: {
    image: towns, // replace with your imported image variable
    title: "Towns",
    subTitle: "Healthcare Management Platform",
    insights: {
      desc: `Towns Protocol is a decentralised communication protocol designed for real-time group chat / community spaces ("Spaces") that are ownable, programmable, and on-chain.`,
      category: "Healthcare, Full-Stack Web Application",
      techStack: [{ icon: md, name: 'MongoDB' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "", // add report link if available
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://www.towns.com/",
  },
  Insightify: {
    image: sunpump,
    title: "Sunpump",
    subTitle: "YouTube Comment Analyzer Tool",
    insights: {
      desc: `SunPump is a meme-coin launchpad platform built on the TRON network. 
It allows users to create and deploy their own meme tokens with minimal technical steps.`,
      category: "AI, NLP, React Native, Mobile App",
      techStack: [{ icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: py, name: 'Python' }, { icon: django, name: 'Django' }, { icon: ml, name: 'Machine Learning' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://sunpump.meme",
  },
  AriseScholar: {
    image: swoop, // replace with your imported image variable
    title: "Swoop Exchange",
    subTitle: "AI-Powered Study Companion",
    insights: {
      desc: `Swoop Exchange describes itself as a "Meta-DEX and Bridge Aggregator" meaning it aggregates many decentralized exchange (DEX) aggregators and cross-chain bridges into one interface`,
      category: "Education, AI, Web Application",
      techStack: [{ icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: django, name: 'Django' }, { icon: py, name: 'Python' }],
      reportLink: "", // add if you have a report or demo link
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://swoop.exchange/",
  },
  MetaShield: {
    image: metashield,
    title: "MetaShield",
    subTitle: "AI-Powered Sensitive Document Classification",
    insights: {
      desc: `MetaShield is an AI-powered solution that classifies documents as Sensitive (Y) or Non-Sensitive (N)
                  using only metadata—no content analysis required! It enhances security and compliance with regulations
                  like GDPR, HIPAA, and DPDP by automating document classification.`,
      category: "Cybersecurity, AI/ML, Web Application",
      techStack: [{ icon: py, name: 'Python' }, { icon: django, name: 'Django' }, { icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: ml, name: 'Machine Learning' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://metashield.example.com",
  },
  qzwz: {
    image: qz,
    title: "Quizwhiz Junction",
    subTitle: "Online Quiz Platform",
    insights: {
      desc: `Quizwhiz Junction is an interactive web-based quiz application designed to make learning engaging and enjoyable. It offers a wide range of quizzes across various topics, providing users with real-time feedback and performance tracking through a point-based system.`,
      category: "Education, Interactive Quiz Application, Web Development",
      techStack: [{ icon: php, name: 'PHP' }, { icon: html, name: 'HTML' }, { icon: css, name: 'CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://quizwhiz.example.com",
  },
  emd: {
    image: emd,
    title: "Emedicine",
    subTitle: "Healthcare E-commerce, Web Application",
    insights: {
      desc: `E-Medicine is an online platform designed to streamline the purchase and management of medicines. The application offers users a convenient way to browse, search, and order medications, ensuring quick access to essential healthcare products. `,
      category: "Healthcare site, Web Development",
      techStack: [{ icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: html, name: 'HTML' }, { icon: css, name: 'CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://emedicine.example.com",
  },
  algo: {
    image: algo,
    title: "Algorithm Analyzer",
    subTitle: "CMD based tool",
    insights: {
      desc: `AlgoAnalyzer is an interactive platform designed to help users understand and visualize the functioning of various algorithms and data structures. The application provides step-by-step visual representations, making complex concepts easier to grasp.`,
      category: "Education, Data Structures & Algorithms, Visualization Tool",
      techStack: [{ icon: cpp, name: 'C++' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "", // No website for CMD tool
  },
  ftc: {
    image: ftc,
    title: "Flip the Card",
    subTitle: "Card Game on web",
    insights: {
      desc: `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
      category: "Game, Web Development, Interactive Application",
      techStack: [{ icon: html, name: 'HTML' }, { icon: css, name: 'CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://flipthecard.example.com",
  },
  tesla: {
    image: tesla,
    title: "Tesla",
    subTitle: "A Cloned website",
    insights: {
      desc: `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
      category: "Web Design, Landing Page",
      techStack: [{ icon: html, name: 'HTML' }, { icon: css, name: 'CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "",
    },
    githubLink: "http://github.com/dmitry-pgb",
    websiteLink: "https://tesla-clone.example.com",
  },
};