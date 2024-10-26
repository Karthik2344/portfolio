import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./scrollup.css"; // Make sure this path is correct

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollup = document.querySelector(".scrollup");

      // Show scroll up button after scrolling down 560px
      if (window.scrollY >= 560) {
        scrollup.classList.add("show-scroll");
      } else {
        scrollup.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
      <FontAwesomeIcon icon={faArrowUp} className="scrollup_icon" />
    </a>
  );
};

export default Scrollup;
