import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";
import {
  experiences
} from "../../editable-stuff/configurations.json";

const Experiences = () => {
  const [experiencesArray] = useState(experiences);

  return (
    <div id="experiences" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {experiencesArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">Experiences</h1>
          <div className="row">
            {experiencesArray.map((experiece) => (
              <ExperienceCard value={experiece} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;
