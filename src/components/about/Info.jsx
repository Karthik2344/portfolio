import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">2 Years Working on Projects</span>
      </div>
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Capable</h3>
        <span className="about_subtitle">Developing User-Centric Web Applications.</span>
      </div>
      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <h3 className="about_title">Contact</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
