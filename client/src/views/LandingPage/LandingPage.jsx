import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container-landing">
      <h1 className="title-landing">Welcome to Henry Videogame App</h1>
      <Link to="/home" className="link-landing">
        To Home
      </Link>
    </div>
  );
}
