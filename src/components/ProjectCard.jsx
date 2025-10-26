import PropTypes from "prop-types";
import { motion } from "motion/react";

export const ProjectCard = ({
  projectImage,
  title,
  subTitle,
  setOpenInsights,
  githubLink,
  projectData,
}) => {
  const openInsightsPanel = () => {
    setOpenInsights(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="group relative overflow-hidden"
      >
        {/* Main Card Container */}
        <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 w-[24rem] h-[32rem] md:w-[26rem] md:h-[34rem] lg:w-[28rem] lg:h-[36rem]">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-blue-500/10 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Visual Section */}
            <div className="relative h-3/5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-t-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-1 h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Project Image Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  src={projectImage}
                  alt={title}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Bottom Information Section */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              {/* Project Information */}
              <div className="mb-4">
                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {projectData && projectData.insights && projectData.insights.desc
                    ? projectData.insights.desc.substring(0, 120) + '...'
                    : `${title} provides a streamlined, developer-friendly platform that seamlessly integrates with modern technology stacks.`
                  }
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {projectData?.insights?.techStack?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/50 border border-green-500/30 text-green-400 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              {/* Action Icons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => openInsightsPanel()}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-full blur-xl"></div>
        </div>
      </motion.div>
    </>
  );
};
ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  setOpenInsights: PropTypes.func,
  githubLink: PropTypes.string,
  projectData: PropTypes.object,
};
