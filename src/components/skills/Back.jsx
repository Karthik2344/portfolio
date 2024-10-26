import React from "react";

const Back = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bxl-nodejs skills_icon"></i>
            <div>
              <h3 className="skills_name">NodeJS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bxl-php skills_icon"></i>
            <div>
              <h3 className="skills_name">PHP</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check skills_icon"></i>
            <div>
              <h3 className="skills_name">Express</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bxl-mongodb skills_icon"></i>
            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check skills_icon"></i>
            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back;
