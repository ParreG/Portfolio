import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setisNavOpen] = useState(false);

  // Stäng menyn när en länk klickas
  const handleLinkClick = () => setisNavOpen(false);

  return (
    <header>
      <section>
        <nav>
          <div
            className={`hamburger${isNavOpen ? " active" : ""}`}
            id="menu-toggle"
            aria-label="Meny"
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={isNavOpen ? "show-menu" : ""} id="nav-menu">
            <li><NavLink to="/Hem" className="nav-link" onClick={handleLinkClick}>Startsidan</NavLink></li>
            <li><NavLink to="/About" className="nav-link" onClick={handleLinkClick}>Om mig</NavLink></li>
            <li><NavLink to="/WorkExperience" className="nav-link" onClick={handleLinkClick}>Erfarenheter</NavLink></li>
            <li><NavLink to="/TechDeck" className="nav-link" onClick={handleLinkClick}>TechDeck</NavLink></li>
            <li><NavLink to="/Educations" className="nav-link" onClick={handleLinkClick}>Utbildningar</NavLink></li>
            <li><NavLink to="/Contact" className="nav-link" onClick={handleLinkClick}>Kontakt</NavLink></li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
