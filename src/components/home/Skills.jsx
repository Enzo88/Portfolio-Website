import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SkillCard from "./SkillCard";
import {
  skills
} from "../../editable-stuff/configurations.json";

const Skills = () => {
  const [skillsArray] = useState(skills);

  return (
    <div id="skills" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {skillsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">Skills</h1>
          <div className="row">
            {skillsArray.map((skill) => (
              <SkillCard value={skill} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
