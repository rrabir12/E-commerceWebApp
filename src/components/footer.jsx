import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Correct imports
import { faMap, faPaperPlane, faPhone, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Solid icons

function Footer() {
  return (
    <>
      <footer className="" style={{marginTop: "50px"}}>
        <div className="container py-5">
          <div className="row">
            <div className="first mb-4 col-lg-3 col-md-12 col-sm-12">
              <h4 className="mt-4 mb-5">
                E-
                <span style={{ color: "#ff414d", fontFamily: "GFS Didot" }}>Shop</span>
              </h4>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="icon">
                <FontAwesomeIcon icon={faFacebookF} className="me-2 i me-3" />
                <FontAwesomeIcon icon={faInstagram} className="me-2 i me-3" />
                <FontAwesomeIcon icon={faTwitter} className="me-2 i me-3" />
              </div>
            </div>
            <div className="second mb-4 col-lg-3 col-md-12 col-sm-12">
              <h5 className="mb-4">Quick Links</h5>
              <ul>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Home</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Shop</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Contact</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Terms & Conditions</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Blog</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className='me-1' /><a href="#">Feedback</a>
                </li>
              </ul>
            </div>
            <div className="third mb-4 col-lg-3 col-md-12 col-sm-12">
              <h5 className="mb-4">Categories</h5>
              <ul>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Mens</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Women</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Boys</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Girls</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Kids</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faAngleRight} className="me-1" /><a href="#">Ladies</a>
                </li>
              </ul>
            </div>
            <div className="fourth col-lg-3 col-md-12 col-sm-12">
              <h5 className="mb-4">Have a Question?</h5>
              <p><FontAwesomeIcon icon={faMap} className="me-2 i" /> Traffic Chowk-3, Birat</p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2 i" /> +977-9833234323
              </p>
              <p><FontAwesomeIcon icon={faPaperPlane} className="me-2 i" /> info@12gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright p-3" style={{ backgroundColor: "#0c1016" }}>
        <p className="text-center mt-4 fs-6" style={{ color: "#9e9e9e" }}>
          E-Shop &copy; 2024, all rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
