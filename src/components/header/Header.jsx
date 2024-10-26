import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header show_header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          <span className="special logo">PORTFOLIO</span>
        </a>
        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (item, index) => (
                <li className="nav_item" key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActiveNav(`#${item.toLowerCase()}`);
                      setToggle(false); // Close the menu on item click
                    }}
                    className={
                      activeNav === `#${item.toLowerCase()}`
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    <i className={`uil uil-${item.toLowerCase()} nav_icon`}></i>
                    <span className="list">{item}</span>
                  </a>
                </li>
              )
            )}
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
