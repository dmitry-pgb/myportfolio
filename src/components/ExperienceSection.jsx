import { motion } from "motion/react";
import { easeInOut } from "motion/react";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Blockchain Developer",
      company: "Tohoku Blockchain Association",
      location: "Sendai, Japan",
      period: "2024 – 2025",
      workType: "On-site",
      icon: "T",
      description: "Developed an upgradeable stable token for green energy on Ethereum mainnet using Solidity, and built a complete blockchain module with Node.js and React-based investor/admin panels. Also contributed to DeFi data aggregation and created an automated market-making bot."
    },
    {
      id: 2,
      title: "Senior Engineer / Blockchain Developer",
      company: "CryptoLab Inc",
      location: "Sendai, Japan",
      period: "2022 – 2024",
      workType: "On-site",
      icon: "C",
      description: "Developed NFT smart contracts in Rust on the MultiversX (Elrond) blockchain with advanced minting and merging logic, and deployed full-stack NFT dApps using Next.js, TypeScript, AWS, and IPFS. Implemented relay transactions and automated deployments via AWS Lambda and Serverless Framework."
    },
    {
      id: 3,
      title: "Blockchain Developer",
      company: "Chaintope Inc",
      location: "Fukuoka, Japan",
      period: "2020 – 2022",
      workType: "On-site",
      icon: "C",
      description: "Built a sports trading platform using Hyperledger Fabric with governance features on a private blockchain, and deployed it on Kubernetes with automated CI/CD pipelines. Integrated sports APIs for real-time data synchronization across games and teams."
    },
    {
      id: 4,
      title: "Senior Full-stack Engineer",
      company: "Nextrope",
      location: "Sapporo, Japan",
      period: "2018 – 2020",
      workType: "On-site",
      icon: "N",
      description: "Improved performance and scalability in TypeScript and Angular apps by optimizing async APIs, fixing memory leaks, and refactoring legacy jQuery/Bootstrap systems. Designed and implemented a signal management system for stock market analytics."
    },
    {
      id: 5,
      title: "Full-stack Developer",
      company: "INDETAIL Co., Ltd",
      location: "Sapporo, Japan",
      period: "2016 – 2018",
      workType: "On-site",
      icon: "I",
      description: "Enhanced back-end scalability by migrating databases from MySQL to MongoDB and developed secure user authentication and payment systems. Implemented order tracking and responsive UI for seamless e-commerce experiences across all devices."
    }
  ];

  return (
    <>
      <div id="Experience" className="flex justify-center">
        <div className="w-full px-3 max-w-[60rem] h-full">
          {/* Title Section */}
          <div className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <motion.div className="z-30">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                My
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                Professional
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                Journey
              </motion.div>
            </motion.div>
          </div>

          {/* Experience Cards */}
          <div className="py-20 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden"
              >
                {/* Card Background with Enhanced Gradient */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gradient-to-r from-color1/30 via-color2/20 to-color1/30 rounded-3xl p-8 shadow-2xl hover:shadow-color1/20 transition-all duration-500">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-color1/20 via-color2/10 to-color1/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-8">
                    {/* Enhanced Company Icon */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-color1 to-color2 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-color1 via-color2 to-color1 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                          {exp.icon}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        {/* Job Title */}
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          className="text-white text-2xl font-bold tracking-tight group-hover:text-color1 transition-colors duration-300"
                        >
                          {exp.title}
                        </motion.h3>
                        
                        {/* Enhanced Period Badge */}
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-color1/20 to-color2/20 border border-color1/30 rounded-full text-color1 text-sm font-semibold backdrop-blur-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.period}
                        </motion.div>
                      </div>
                      
                      {/* Enhanced Company and Location */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        className="flex flex-wrap items-center gap-6 mb-6 text-gray-300"
                      >
                        <div className="flex items-center gap-3 group/location">
                          <div className="w-8 h-8 bg-gradient-to-br from-color1/20 to-color2/20 rounded-full flex items-center justify-center group-hover/location:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-color1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-200">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 group/work">
                          <div className="w-8 h-8 bg-gradient-to-br from-color2/20 to-color1/20 rounded-full flex items-center justify-center group-hover/work:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-color2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-200">{exp.workType}</span>
                        </div>
                      </motion.div>
                      
                      {/* Enhanced Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        className="relative"
                      >
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-color1 to-color2 rounded-full opacity-60"></div>
                        <p className="text-gray-300 text-base leading-relaxed pl-6 font-light">
                          {exp.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-color1/5 to-color2/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-color2/5 to-color1/5 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
