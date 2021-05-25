import "./styles.css";
import React from "react";
import {
  Profile,
  Cross,
  RightArrow,
  linkedin,
  github,
  instagram,
  facebook
} from "./exportFiles";

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }
  open() {
    this.setState({
      isActive: false
    });
  }
  close() {
    this.setState({
      isActive: true
    });
  }
  render() {
    return (
      <div className="main center">
        <div className="box center">
          <div className="right_container">
            <img src={Profile} className="profile-img" alt="IMG" />
            <div>
              <p className="user_name">Harshit Chandani</p>
              <p className="skill">Software developer</p>
            </div>
            <div className="arr_container center">
              <img
                src={RightArrow}
                alt="arrow"
                type="button"
                onClick={() => this.open()}
              />
            </div>
          </div>
          <div
            className="left_container"
            id={this.state.isActive ? "off" : null}
          >
            <p className="left_container-title">Skills</p>
            <div className="skills">
              <div className="skillsName">HTML</div>
              <div className="skillsName">CSS</div>
              <div className="skillsName">JS</div>
              <div className="skillsName">React JS</div>
              <div className="skillsName">Python</div>
            </div>
            <div className="icons">
              <img src={linkedin} className="linkedIn_icons" alt="linked in" />
              <img src={github} className="github_icons" alt="linked in" />
              <img src={instagram} className="github_icons" alt="instagram" />
              <img src={facebook} className="github_icons" alt="facebook" />
            </div>
            <div className="cancel_container center">
              <img
                src={Cross}
                alt="arrow"
                type="button"
                onClick={() => this.close()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
