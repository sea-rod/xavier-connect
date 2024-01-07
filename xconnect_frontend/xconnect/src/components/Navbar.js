import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-gradient-purple" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand navbar-xconnect" href="/">XConnect</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another Action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">We Offer</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another Action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Process Guidelines</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Contact</a>
          </li>
          </ul>
      </div>
    </div>
  </nav>  
  )
}
