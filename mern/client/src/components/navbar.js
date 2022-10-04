import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <h1 className="logo ml-3">B</h1>
        </NavLink>
      </nav>
    </div>
  );
}
