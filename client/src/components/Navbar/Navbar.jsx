import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-navbar">
      <div className="navbar-link">
        <Link to="/home" className="link-home">
          Home
        </Link>
        <Link to="/create" className="link-form">
          Form
        </Link>
      </div>
      <h1 className="navbar-title">Henry Videogames App</h1>
      <div className="navbar-search">
        <SearchBar />
      </div>
    </div>
  );
}
