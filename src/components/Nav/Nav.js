import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      {/* top navbar */}
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <p className="navbar-brand">Navbar</p>
          {/* functionality of navbar collapse on small screen */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p className="nav-link active" aria-current="page">
                Home
              </p>
              <p className="nav-link">Questions</p>
              <p className="nav-link">Quiz</p>
              <p className="nav-link">About</p>
            </div>
          </div>
        </div>
      </nav>
      <p id="under-nav"></p>
    </div>
  );
};

export default Nav;
