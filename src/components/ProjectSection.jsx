import { useEffect, useState,useRef } from "react";
import { ProjectInsights } from "./projectInsights";
import {motion,useScroll} from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./constant";
export const ProjectSection = () => {
  const ref = useRef(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({target:ref});
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestScrollValue) => {
      if (inView && latestScrollValue > 0.1) {
        alert("Working");
        console.log("Working");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, inView]);


  const handleInsightPanel = (status, project = null) => {
    setStopScroll(status);
    setSelectedProject(project);
  };
  useEffect(() => {
    if (stopScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [stopScroll]);
  return (
    <>
      <div id="Projects" className="w-full h-full mt-20 flex flex-col relative">
        <div
          ref={ref}
        className="h-screen w-full flex justify-center items-center">
          <motion.div
          initial={{ opacity: 0,scale: 2}}
          whileInView={{ opacity: 1,scale: 1 }}
          onViewportBoxUpdate={(info) => setInView(info.isInView)}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`project-title z-10 text-white text-6xl md:text-8xl tracking-tight font-semibold uppercase flex justify-center items-center animate-pulse will-change-transform will-change-opacity`}>
            <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
            Projects
          </motion.div>
        </div>
        <div className="h-full px-3 flex flex-wrap justify-center gap-4 md:gap-6 max-w-[100rem] mx-auto">
          {Object.keys(Projects).map((key) => {
            const project = Projects[key];
            return (
              <ProjectCard
                key={key}
                projectImage={project.image}
                title={project.title}
                subTitle={project.subTitle}
                setOpenInsights={(status) =>
                  handleInsightPanel(status, project)
                }
                githubLink={project.githubLink}
                projectData={project}
              />
            );
          })}
        </div>
        {selectedProject && (
          <ProjectInsights
            stopScroll={stopScroll}
            handleInsightPanel={handleInsightPanel}
            title={selectedProject.title}
            desc={selectedProject.insights.desc}
            category={selectedProject.insights.category}
            techstack={selectedProject.insights.techStack}
            reportLink={selectedProject.insights.reportLink}
            websiteLink={selectedProject.websiteLink}
          />
        )}
      </div>
    </>
  );
};
