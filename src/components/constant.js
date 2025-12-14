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
import AI from "../assets/icons/skills-icon/AI.svg";
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
import velar from "../assets/images/projectImages/new5.png";
import ponchiqs from "../assets/images/projectImages/new6.png";
import ushark from "../assets/images/projectImages/new7.png";
import humanode from "../assets/images/projectImages/new8.png";
import lista from "../assets/images/projectImages/new9.png";
import bombcrypto from "../assets/images/projectImages/new10.png";
import grindery from "../assets/images/projectImages/new11.png";
import realmstudios from "../assets/images/projectImages/new12.png";
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
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://dapplooker.com/",
  },
  ClinicLink: {
    image: towns, // replace with your imported image variable
    title: "Towns",
    subTitle: "Healthcare Management Platform",
    insights: {
      desc: `Towns Protocol is a decentralised communication protocol designed for real-time group chat / community spaces ("Spaces") that are ownable, programmable, and on-chain.`,
      category: "Healthcare, Full-Stack Web Application",
      techStack: [{ icon: solidity, name: 'solidity' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: tailwind, name: 'Tailwind CSS' }, { icon: js, name: 'JavaScript' }],
      reportLink: "", // add report link if available
    },
    githubLink: "https://github.com/0xNaokiDev",
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
      techStack: [{ icon: rust, name: 'Rust' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: ipfs, name: 'IPFS' }, { icon: fastapi, name: 'FastAPI' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://sunpump.meme",
  },
  AriseScholar: {
    image: swoop, // replace with your imported image variable
    title: "Swoop Exchange",
    subTitle: "AI-Powered Study Companion",
    insights: {
      desc: `Swoop Exchange describes itself as a "Meta-DEX and Bridge Aggregator" meaning it aggregates many decentralized exchange (DEX) aggregators and cross-chain bridges into one interface`,
      category: "Education, AI, Web Application",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: md, name: 'MongoDB' }, { icon: fastapi, name: 'FastAPI' }],
      reportLink: "", // add if you have a report or demo link
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://swoop.exchange/",
  },
  velar: {
    image: velar,
    title: "Velar",
    subTitle: "AI-Powered Sensitive Document Classification",
    insights: {
      desc: `Velar is a decentralized finance(DeFi) protocol built on Bitcoin and various Bitcoin Layer-2(L2) scaling solutions, designed to bring advanced DeFi products like trading, liquidity pools, staking, leveraged derivatives and launchpad tools to the Bitcoin ecosystem. Its main objective is to leverage Bitcoin's security and decentralization while enabling smart contract like financial features that traditionally existed more on blockchains like Ethereum.`,
      category: "Cybersecurity, AI/ML, Web Application",
      techStack: [{ icon:  solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: haskell, name: 'haskell' }, { icon: foundry, name: 'Foundry' }, { icon: md, name: 'MongoDB' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://velar.com/",
  },
  ponchiqs: {
    image: ponchiqs,
    title: "Ponchiqs",
    subTitle: "Blockchain Gaming Ecosystem & Interactive Entertainment Platform",
    insights: {
      desc: `Ponchiqs is a next-generation blockchain gaming ecosystem and interactive entertainment platform that blends play-to-earn mechanics, Web3 integration, and immersive gameplay. The platform features multiple game experiences — including competitive multiplayer arenas, mini-games, and collectible elements — unified by a vibrant metaverse where users can engage, compete, and earn rewards using the native $PONCH token. Ponchiqs supports cross-platform accessibility (PC, consoles, mobile) and emphasizes community engagement, rewarding participation and creativity within its universe.`,
      category: "Blockchain Gaming, Web3, Play-to-Earn, Metaverse",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: ipfs, name: 'IPFS' }, { icon: rust, name: 'Rust' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://ponchiqs.com",
  },
  ushark: {
    image: ushark,
    title: "USHARK",
    subTitle: "Web3-Powered Startup Investment & Utility Token Platform",
    insights: {
      desc: `USHARK is a Web3-powered platform and utility token ecosystem designed to democratize access to startup investments and crypto utility. The project's core mission is to bridge the gap between the world of emerging startups and cryptocurrency markets by offering a token that unlocks special rewards, benefits, and financial opportunities traditionally dominated by large institutional investors.`,
      category: "Web3, DeFi, Investment Platform, Token Ecosystem",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: ipfs, name: 'IPFS' }, { icon: foundry, name: 'Foundry' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://ushark.org/",
  },
  humanode: {
    image: humanode,
    title: "Humanode",
    subTitle: "Layer-1 Blockchain with Biometric Authentication & Human-Centric Consensus",
    insights: {
      desc: `Humanode is an innovative Layer-1 blockchain that introduces a human-centric consensus and governance model by combining blockchain technology with biometric authentication. Unlike traditional Proof-of-Work or Proof-of-Stake systems, Humanode ensures one-human-one-node participation, eliminating Sybil attacks without relying on token ownership or energy consumption. The platform leverages private, decentralized biometric verification to establish unique human identity while preserving user privacy. This enables fair governance, decentralized decision-making, and equal voting power across participants — creating a foundation for truly democratic Web3 systems.`,
      category: "Layer-1 Blockchain, Biometric Authentication, Consensus Protocol, Web3",
      techStack: [{ icon: rust, name: 'Rust' }, { icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: go, name: 'Go' }, { icon: ipfs, name: 'IPFS' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://humanode.io/",
  },
  lista: {
    image: lista,
    title: "Lista",
    subTitle: "DeFi Protocol for Liquidity, Lending & Yield Generation",
    insights: {
      desc: `Lista is a decentralized finance (DeFi) protocol focused on building a robust liquidity, lending, and yield generation ecosystem. The platform enables users to efficiently manage digital assets through decentralized mechanisms such as borrowing, lending, staking, and yield optimization, while maintaining transparency, security, and composability with the broader DeFi landscape. Designed for scalability and capital efficiency, Lista provides on-chain financial primitives that allow users to unlock liquidity from their assets, participate in decentralized governance, and earn sustainable yields without relying on centralized intermediaries. The protocol emphasizes risk-aware design, smart-contract transparency, and user-friendly DeFi interactions, making advanced financial tools accessible to both retail and institutional participants.`,
      category: "DeFi, Lending Protocol, Liquidity, Yield Generation, Web3",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: foundry, name: 'Foundry' }, { icon: ipfs, name: 'IPFS' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://lista.org/",
  },
  bombcrypto: {
    image: bombcrypto,
    title: "BombCrypto",
    subTitle: "Blockchain-Based Play-to-Earn Game with NFT Ownership",
    insights: {
      desc: `BombCrypto is a blockchain-based Play-to-Earn (P2E) game that combines classic arcade-style gameplay with NFT ownership and tokenized rewards. Players control NFT characters ("heroes") to participate in automated and interactive game modes, earning in-game tokens through gameplay, strategy, and asset management. At its peak, BombCrypto attracted a large global user base during the early Web3 gaming boom, demonstrating how blockchain technology can support high-traffic gaming ecosystems, NFT economies, and real-time reward distribution. The project integrates smart contracts for asset ownership, token rewards, and marketplace interactions, enabling a fully decentralized in-game economy.`,
      category: "Blockchain Gaming, Play-to-Earn, NFT, Web3 Gaming",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: ipfs, name: 'IPFS' }, { icon: foundry, name: 'Foundry' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://bombcrypto.io/",
  },
  grindery: {
    image: grindery,
    title: "Grindery",
    subTitle: "Web3 Automation Platform with No-Code Workflows",
    insights: {
      desc: `Grindery is a Web3 automation platform designed to simplify blockchain interactions through no-code and low-code workflows. The project focuses on making on-chain actions—such as token transfers, contract interactions, DAO operations, and notifications—accessible to both technical and non-technical users by abstracting complex blockchain logic into intuitive automation flows. A key strength of Grindery is its integration with messaging platforms and Web3 tools, enabling users to trigger blockchain transactions, monitor on-chain events, and automate DAO or DeFi workflows directly from familiar interfaces. This lowers the barrier to entry for Web3 adoption and improves operational efficiency for DAOs, crypto teams, and developers.`,
      category: "Web3 Automation, No-Code Platform, DAO Tools, Workflow Automation",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: ipfs, name: 'IPFS' }, { icon: fastapi, name: 'FastAPI' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://grindery.com/",
  },
  realmstudios: {
    image: realmstudios,
    title: "Realm Studios",
    subTitle: "Web3-Native Game & Digital Entertainment Studio",
    insights: {
      desc: `Realm Studios is a Web3-native game and digital entertainment studio focused on building immersive gaming experiences that combine blockchain technology, digital ownership, and interactive gameplay. The studio develops game worlds and products where players can truly own in-game assets, participate in evolving economies, and engage with community-driven ecosystems. The project emphasizes the fusion of traditional game design principles with Web3 primitives such as NFTs, on-chain assets, and decentralized economies. Realm Studios positions itself as a bridge between mainstream gaming experiences and next-generation blockchain-enabled interaction, prioritizing user experience, scalability, and sustainable game economies.`,
      category: "Web3 Gaming, Game Studio, NFT, Digital Entertainment, Blockchain Gaming",
      techStack: [{ icon: solidity, name: 'Solidity' }, { icon: next, name: 'Next.js' }, { icon: node, name: 'Node.js' }, { icon: react, name: 'React' }, { icon: ipfs, name: 'IPFS' }, { icon: rust, name: 'Rust' }],
      reportLink: "",
    },
    githubLink: "https://github.com/0xNaokiDev",
    websiteLink: "https://www.realmstudios.gg/",
  },
};