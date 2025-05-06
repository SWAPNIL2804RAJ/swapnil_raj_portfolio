import { useRef } from "react";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

function App() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="min-h-screen h-screen min-w-screen w-full bg-background flex flex-col">
      <Header scrollContainerRef={scrollContainerRef} />
      <div
        ref={scrollContainerRef}
        className="w-full h-screen p-6 flex overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-cardVariant scroll-smooth xl:justify-center"
      >
        <div className="flex flex-col gap-24 w-full xl:w-3/4">
          <Hero />
          <Experience />
          <Technologies />
          <Projects />
          <Socials />
          <Contact />

          {/* Bottom Spacing and Padding */}
          <div className="p-1" />
        </div>
      </div>
    </div>
  );
}

export default App;
