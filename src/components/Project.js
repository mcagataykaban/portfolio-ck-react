import React from "react";
import "./Project.css";

import Avatar from "./Avatar";
import {PROJECTS} from '../data/DummyData'

const Project = (props) => {
  
  const selectedProject = PROJECTS.find((x) => x.id === props.selectedProject);
  return (
    <div className="project p-4 mt-1 mx-4">
      { selectedProject.url ? (<a className="site-link" target="_blank" href={selectedProject.url}>
        Click Here!
      </a>) : null}
      <div className="row">
        <div className="col-md-4 mid-text">
          <img width="50" src={selectedProject.logo} alt="" />
          <h4>{selectedProject.desc}</h4>
          {selectedProject.username ? (
            <div>
              <p style={{ fontSize: 15 }}>
                username : {selectedProject.username}
              </p>
              <p style={{ fontSize: 15 }}>
                password : {selectedProject.password}
              </p>
            </div>
          ) : null}
        </div>
        <div className="col-md-4 img-area">
          {selectedProject.resimler.map((x, i) => {
            return (
              <img
                key={i}
                className="img-container"
                width="175"
                src={x}
                alt=""
              />
            );
          })}
        </div>
        <div style={{ fontSize: 16 }} className="col-md-4 logo-area">
          {selectedProject.logolar.map((x, i) => {
            return (
              <div key={i} className="p-2">
                <Avatar src={x.logo} /> {x.techName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
