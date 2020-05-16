import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const SkillCard = ({ value }) => {
  
  return (
    <div className="col-md-2">
      <div className="card shadow-lg p-2 mb-1 bg-white rounded">        
          <p class="text-center">{value} </p>          
      </div>
    </div>
  );
};

export default SkillCard;
