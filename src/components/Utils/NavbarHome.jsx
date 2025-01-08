import { useState, useEffect, useCallback } from "react";
import "../../assets/css/NavbarPortfolio.css";
import logo from "../../assets/images/img-portfolio/protfolio.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("nav-menu");
      const toggleButton = document.querySelector(".nav__toggle");
      if (
        menu &&
        !menu.contains(event.target) &&
        !toggleButton.contains(event.target)
      ) {
        setToggle("");
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle the menu
  const handleToggle = useCallback(() => {
    setToggle((prev) => (prev === "" ? "open" : ""));
  }, []);

  // Close the menu when clicking a link
  const handleClick = (id) => {
    setToggle("");
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close the menu explicitly
  const handleClose = () => {
    setToggle("");
  };

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode);
  };

  //IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Navbar items
  const navItems = [
    { id: "home", icon: "ri-home-5-line", label: "Home" },
    { id: "skills", icon: "ri-trophy-line", label: "Skills" },
    { id: "qualification", icon: "ri-book-open-line", label: "Qualification" },
    { id: "services", icon: "ri-briefcase-line", label: "Services" },
    { id: "projects", icon: "ri-window-fill", label: "Projects" },
    { id: "contact", icon: "ri-chat-3-line", label: "Contact" },
  ];

  return (
    <div className="header" id="header">
      <nav className="nav container">
        <a
          href="#home"
          className="nav__logo"
          onClick={() => handleClick("home")}
        >
          <img src={logo} alt="Logo" />
        </a>
        <div className={`nav__menu ${toggle}`} id="nav-menu">
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleClose}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__buttons">
          <i
            className={`ri-${isDarkMode ? "sun" : "moon"}-line change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>
          <div className="nav__toggle" onClick={handleToggle}>
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
