import React, { useState, useEffect } from "react";
import Pdf from "../editable-stuff/CV-Europass-Pimpinella-IT.pdf";
import configurations from "../editable-stuff/configurations.json";

const { FirstName } = configurations;

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isTop ? "navbar-dark bg-transparent" : "navbar-light bg-gradient"
        } `}
    >
      <a className="navbar-brand ps-3" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${FirstName} />`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              CV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
