import { motion } from "motion/react";
import PropTypes from "prop-types";

export const ProjectInsights = ({
  stopScroll,
  handleInsightPanel,
  title,
  desc,
  category,
  techstack,
  reportLink,
  websiteLink,
}) => {
  // Map tech stack icons to readable names (same as ProjectCard)
  return (
    <>
      <div
        className={`project-insights will-change-transform will-change-opacity ${
          stopScroll ? "flex" : "hidden"
        } fixed top-0 w-full h-full justify-center items-center z-[100] bg-black/50 backdrop-blur-md overflow-hidden`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-2xl w-[28rem] max-w-[90vw] max-h-[90vh] overflow-y-auto border border-green-500 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => handleInsightPanel(false)}
            className="absolute top-3 right-3 w-8 h-8 bg-black border border-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-white text-3xl font-bold">{title}</h2>
            </div>

            {/* Overview Section */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-4">Overview</h3>
              <p className="text-white text-sm leading-relaxed">{desc}</p>
            </div>

            

            {/* Tech Stack Section */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techstack.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                    <img className="w-8 h-8 object-contain" src={item.icon} alt="" />
                    <span className="text-gray-300 text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="pt-4">
              <div className="flex flex-col items-center gap-4">
                {/* Website Button */}
                {websiteLink && (
                  <div className="text-center">
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-blue-400 text-white hover:from-blue-500 hover:to-blue-600 hover:border-blue-300 hover:scale-105 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-blue-500/30 transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Website
                      </button>
                    </a>
                  </div>
                )}                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

ProjectInsights.propTypes = {
  stopScroll: PropTypes.bool,
  handleInsightPanel: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  category: PropTypes.string,
  techstack: PropTypes.array,
  reportLink: PropTypes.string,
  websiteLink: PropTypes.string,
};