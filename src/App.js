import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Skills from "./components/home/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experiences from "./components/home/Experiences";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Experiences />
      <Skills />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    <Footer />
  </BrowserRouter>
);

export default App;
