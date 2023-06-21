import Link from "next/link";
import React from "react";

export default function NavBar({ onClick }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary position-sticky top-0"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/create"
              >
                Add Place
              </Link>
            </li>
            {/*  <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li> */}
            {/*   <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li> 

                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <button className="nav-link  " onClick={onClick}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
