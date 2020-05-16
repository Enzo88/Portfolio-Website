import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ExperienceCard = ({ value }) => {
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">        
        <div className="card-body">
          <h5 className="card-title">{value.name} - {value.company}</h5>
          <p className="card-text">{value.description} </p>         
          <hr />
          <Language value={value.competences}></Language>
          <p className="card-text">            
            <small className="text-muted">{value.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

const Language = ({ value }) => {
  return (
    <div className="pb-3">
      Competences:{" "}
      {value.map((language) => (
        <p key={language} className="badge badge-light card-link">{language}</p>
      ))}
    </div>
  );
};

export default ExperienceCard;
