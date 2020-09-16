import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left-container">
            <h1 className="navbar-title">Digital Culture</h1>
            <h3 className="navbar-credits">By Marco Riesgo</h3>
        </div>
        <div className="navbar-right-container">
            <Link to="/">
                <h2 className="navbar-link">Home</h2>
            </Link>
            <Link to="/unit1">
                <h2 className="navbar-link">Unit 1</h2>
            </Link>
            <Link to="/unit2">
                <h2 className="navbar-link">Unit 2</h2>
            </Link>
            <Link to="/unit3">
                <h2 className="navbar-link">Unit 3</h2>
            </Link>
            <Link to="/unit4">
                <h2 className="navbar-link">Unit 4</h2>
            </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;