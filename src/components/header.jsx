import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import Home from './home'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand mt-1" href="">
            <h4>
              E-<span style={{ color: "#ff414d", fontFamily: "GFS Didot" }}>Shop</span>
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#ff414d" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active px-3" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="about.html">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="listing.html">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="blog.html">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3"  href="cart.html">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3"  href="account.html">
                <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
