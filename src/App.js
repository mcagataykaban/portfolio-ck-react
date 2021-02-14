import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import sticker from "./images/cagatayemoji.webp";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonCircle from "./components/ButtonCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Bio from "./components/Bio";
import SocialArea from "./components/SocialArea";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";

function App() {
  const [showBio, setShowBio] = useState(false);
  const [selectedProject, setSelectedProject] = useState("1");
  const selectedProjectHandler = (e) => {
    setSelectedProject(e.target.value);
  };
  const showBioHandler = () => {
    setShowBio(!showBio);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="bio-area p-4 m-4 row">
          <div className="col-md-4">
            <SocialArea />
          </div>
          <div className="col-md-4">
            <img src={sticker} className="App-logo" alt="logo" />
            <h3>Hey, I am Cagatay</h3>
            <h4>Frontend Developer</h4>
            <ButtonCircle style={{ margin: "auto" }} onClick={showBioHandler}>
              <FontAwesomeIcon style={{ fontSize: 14 }} icon={faInfo} />
            </ButtonCircle>
          </div>
          <div className="col-md-4"></div>

          {showBio ? <Bio /> : null}
        </div>
        <div className="button-area">
          Projects :
          <select
            onChange={selectedProjectHandler}
            className="form-select ml-3"
            aria-label="Default select example"
          >
            <option value="1">Debt Book</option>
            <option value="2">Note Book</option>
            <option value="3">New Year Card</option>
            <option value="4">Blog</option>
            <option value="5">Recipe App</option>
          </select>
        </div>
        <Project selectedProject={selectedProject} />
      </header>
    </div>
  );
}

export default App;
