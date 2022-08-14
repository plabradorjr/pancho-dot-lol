import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./links.css";
import pic from "../assets/cupcat.png";
import LinkTreeButton from "../components/LinkTreeButton";

export default class Links extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img
              src={pic}
              alt="profile pic"
              className="rounded-circle"
              id="cat"
            />
          </div>
        </div>
        <div className="row justify-content-center" id="recenter">
          <div className="col-sm-4">
            <Link to="/">
              <div className="row">
                <button type="button" id="btn-1">
                  Portfolio
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center" id="recenter">
          <div className="col-sm-4">
            <Link to="/resume">
              <div className="row">
                <button type="button" id="btn-2">
                  Resume
                </button>
              </div>
            </Link>
          </div>
        </div>
        <LinkTreeButton name="Github" link="https://github.com/plabradorjr" />

        <LinkTreeButton
          name="LinkedIn"
          link="https://www.linkedin.com/in/plabrador/"
        />

        <LinkTreeButton name="Twitter" link="https://twitter.com/0xSer" />
      </div>
    );
  }
}
