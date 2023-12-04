import React from "react";

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">X Connect</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            We Offer
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Course Name 1</a></li>
            <li><a className="dropdown-item" href="/">Course Name 2</a></li>
            <li><a className="dropdown-item" href="/">Course Name 3</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/guidelines">Guidelines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    );
}