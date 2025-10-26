import { RadarChart } from "./radarChart";
import { easeInOut, motion } from "motion/react";
import character from "../assets/images/character-removebg-preview.png";
import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import solidity from "../assets/icons/skills-icon/solidity.svg";
import rust from "../assets/icons/skills-icon/rust.svg";
import go from "../assets/icons/skills-icon/go.svg";
import haskell from "../assets/icons/skills-icon/haskell.svg";
import foundry from "../assets/icons/skills-icon/foundry.png";
import ipfs from "../assets/icons/skills-icon/IPFS.svg";
import vue from "../assets/icons/skills-icon/vue.svg";
import fastapi from "../assets/icons/skills-icon/FastApi.svg";
import AI from "../assets/icons/skills-icon/AI.svg";
export const AboutMe = () => {
  const skillIcons = [ react,next,vue,  solidity, AI, rust, go, haskell,foundry, ipfs,  fastapi,node,md,py, tailwind,];
  return (
    <>
      <div id="About" className="flex justify-center">
        <div className="w-full px-3 max-w-[60rem] h-full">
          <div className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <motion.div className="z-30 ">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                behind
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="will-change-transform will-change-opacity"
              >
                the code
              </motion.div>
            </motion.div>
          </div>
          <div className="Me h-screen relative flex max-md:flex-col items-center py-5 md:mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, filter: "blur(50px)", scale: 0 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.7 }}
                className="image w-full max-w-[25rem] flex justify-center z-20 relative will-change-transform will-change-opacity"
              >
                <img
                  className="w-2/3 max-w-[20rem] z-20"
                  src={character}
                  alt=""
                />
                <div className="absolute w-full h-full z-10 bg-color1 custom-radius"></div>
              </motion.div>
            </div>
            <div className="AboutMeText p-5 flex flex-col mt-5 gap-y-3 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.7 }}
                className="text-white text-3xl font-semibold "
              >
                About Me
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.7 }}
                className="about-me text-white text-sm leading-5 mt-3 text-justify"
              >
                Hi, I&apos;m Yamamoto Naoki! I’m dedicated to crafting secure, efficient, and user-driven blockchain and web applications that push the boundaries of digital innovation.
              </motion.div>
              <a href='https://drive.google.com/file/d/1RB_M5bWjpe7uSvO7ccVVi5ePrsVLvKXz/view?usp=sharing' target="_blank">
                <button
                  className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-widest text-sm mt-5"
                >
                  Download CV
                </button>
              </a>
            </div>
            <div className="button"></div>
          </div>
          <div className="project-title h-screen flex justify-center items-center">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <div className="z-30 font-extrabold uppercase text-white leading-snug md:leading-snug text-5xl md:text-8xl tracking-wide">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Developer&apos;
                <span className="lowercase">s</span>{" "}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Skills
              </motion.div>
            </div>
          </div>
          <div className="h-screen flex max-md:flex-col md:items-center gap-5">
            <div className="flex flex-col md:w-1/2 h-3/4">
              <div className="flex flex-col justify-center p-5 max-md:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.7 }}
                  className="text-white text-3xl tracking-wide font-semibold mt-5 self-start"
                >
                  About Skills
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.7 }}
                  className="about-me text-white text-lg leading-6 mt-3 text-justify max-w-[40rem]"
                >
                  With a focus on both aesthetics and functionality, I build responsive, dynamic websites that turn creative concepts into real-world digital solutions.
                </motion.div>
              </div>
              <div className="skill-icons flex justify-center items-center px-5">
                <div className="grid grid-cols-5 gap-5 w-full justify-items-center">
                  {skillIcons.map((icon, index) => (
                    <motion.img
                      initial={{ rotate: 360, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      key={index}
                      className="size-10"
                      src={icon}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-1/2 h-3/4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-color3 px-3 text-lg font-semibold tracking-wide bg-color2 rounded-3xl md:text-base"
              >
                Skills Overview Radar
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.7 }}
                className="w-full h-full will-change-transform will-change-opacity"
              >
                <RadarChart />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
