import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import myImage from './joystick.png';

export default function LandingPage() {
  return (
    <div className="container-landing">
      <h1 className="title-landing">Welcome to Henry Videogame App</h1>
      <Link to="/home" className="link-landing">
        <img
          src={myImage}
          alt="joystick to home"
          className="image-landing"
        />
      </Link>
    </div>
  );
}
