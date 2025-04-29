import { useEffect, useState } from "react";
import MorpheusScene from "./components/MorpheusScene";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"; // Import the Projects component
import Contact from "./components/Contact"; // Import the Contact component
import Quotes from "./components/Quotes"; // Import the Quotes component

function App() {
  // Initialize state from sessionStorage or defaults
  const initialShowContent =
    sessionStorage.getItem("hasTakenRedPill") === "true";
  const initialCurrentSection =
    sessionStorage.getItem("currentSection") || "home";

  const [showContent, setShowContent] = useState(initialShowContent);
  const [showMorpheusScene, setShowMorpheusScene] = useState(
    !initialShowContent
  );
  const [currentSection, setCurrentSection] = useState(initialCurrentSection); // State for current section
  const rainContainerId = "rain-container";

  // Effect to save state changes to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("hasTakenRedPill", showContent);
    sessionStorage.setItem("currentSection", currentSection);
  }, [showContent, currentSection]);

  useEffect(() => {
    let rainModule = null;

    const shouldStartRain =
      (showMorpheusScene || showContent) &&
      document.getElementById(rainContainerId);

    if (shouldStartRain) {
      import("./rain.js")
        .then((module) => {
          rainModule = module;
          if (rainModule && typeof rainModule.startRain === "function") {
            rainModule.startRain(rainContainerId);
          } else {
            console.error("startRain function not found in rain.js module.");
          }
        })
        .catch((err) => console.error("Failed to load rain.js", err));
    } else {
      import("./rain.js")
        .then((module) => {
          if (module && typeof module.stopRain === "function") {
            module.stopRain();
          }
        })
        .catch((err) =>
          console.error("Failed to load rain.js for stopping", err)
        );
    }

    return () => {
      import("./rain.js")
        .then((module) => {
          if (module && typeof module.stopRain === "function") {
            module.stopRain();
          } else {
            console.error("stopRain function not found in rain.js module.");
          }
        })
        .catch((err) =>
          console.error("Failed to load rain.js for cleanup", err)
        );
    };
  }, [showMorpheusScene, showContent, rainContainerId]);

  const handleAnimatedLinkClick = (event, targetUrl) => {
    event.preventDefault();
    document.body.classList.add("zoom-out");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 700);
  };

  const handleRedPillClick = () => {
    setShowContent(true);
    setShowMorpheusScene(false);
    setCurrentSection("home");
  };

  const handleShowAboutMe = (event) => {
    event.preventDefault();
    setCurrentSection("about");
  };

  const handleShowProjects = (event) => {
    event.preventDefault();
    setCurrentSection("projects");
  };

  const handleShowQuotes = (event) => {
    event.preventDefault();
    setCurrentSection("quotes");
  };

  const handleShowContact = (event) => {
    event.preventDefault();
    setCurrentSection("contact");
  };

  return (
    <>
      <div
        id={rainContainerId}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      ></div>

      {showMorpheusScene && (
        <div className="relative z-1">
          <MorpheusScene onRedPillClick={handleRedPillClick} />
        </div>
      )}

      {showContent && (
        <div className="relative z-1">
          <nav className="p-4 text-white text-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection("home");
              }}
              className="p-1 mr-4 hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={handleShowAboutMe}
              className="p-1 mr-4 hover:text-blue-400"
            >
              About
            </a>
            <a
              href="/projects"
              className="p-1 mr-4 hover:text-blue-400"
              onClick={handleShowProjects}
            >
              Projects
            </a>
            <a
              href="/quotes"
              className="p-1 mr-4 hover:text-blue-400"
              onClick={handleShowQuotes}
            >
              Quotes
            </a>
            <a
              href="/contact"
              className="p-1 hover:text-blue-400"
              onClick={handleShowContact}
            >
              Contact
            </a>
          </nav>

          <main>
            {currentSection === "home" && (
              <div>
                <h1 className="text-8xl text-center text-indigo-800 pt-20">
                  My Portfolio
                </h1>
                <p className="text-center text-white mt-4">
                  Welcome to the main portfolio page.
                </p>
              </div>
            )}
            {currentSection === "about" && <AboutMe />}
            {currentSection === "projects" && <Projects />}
            {currentSection === "contact" && <Contact />}
            {currentSection === "quotes" && <Quotes />}
          </main>
        </div>
      )}
    </>
  );
}

export default App;
