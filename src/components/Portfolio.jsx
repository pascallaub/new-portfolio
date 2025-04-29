import { useState } from "react";
import MorpheusScene from "./components/MorpheusScene";
import AboutMe from "./components/AboutMe"; // Import the new component
// Import other portfolio sections/components as needed (e.g., PortfolioHome)

function PortfolioContainer() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [portfolioSection, setPortfolioSection] = useState("home"); // 'home', 'aboutMe', etc.

  const handleEnterPortfolio = () => {
    setShowPortfolio(true);
    setPortfolioSection("home"); // Or your default section
  };

  // Navigation handlers within the portfolio
  const handleShowHome = () => {
    setPortfolioSection("home");
  };

  const handleShowAboutMe = () => {
    // Ensure this ONLY sets the section, not showPortfolio
    setPortfolioSection("aboutMe");
  };

  // Add handlers for other sections...

  return (
    <div>
      {!showPortfolio ? (
        <MorpheusScene onRedPillClick={handleEnterPortfolio} />
      ) : (
        <div>
          {/* Your Portfolio Navigation */}
          <nav className="p-4 bg-gray-800 text-white">
            <button onClick={handleShowHome} className="mr-4 hover:text-blue-400">Home</button>
            <button onClick={handleShowAboutMe} className="mr-4 hover:text-blue-400">About Me</button>
            {/* Add other navigation links/buttons */}
          </nav>

          {/* Your Portfolio Content Area */}
          <main>
            {/* {portfolioSection === 'home' && <PortfolioHome />} */} {/* Render Home component */}
            {portfolioSection === "aboutMe" && <AboutMe />} {/* Render AboutMe component */}
            {/* Add conditional rendering for other sections */}
          </main>
        </div>
      )}
    </div>
  );
}

export default PortfolioContainer;