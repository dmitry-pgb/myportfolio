import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { ProjectSection } from "./components/ProjectSection";
import { AboutMe } from "./components/AboutMe";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactUs } from "./components/contactUs";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
        <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
          <Navbar />
          <HeroSect />
          <ProjectSection />
          <AboutMe />
          <ExperienceSection />
          <ContactUs />
        </div>
        <Analytics/>
    </>
  );
}
export default App;