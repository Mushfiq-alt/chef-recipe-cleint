import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="bg-warning text-white  mx-auto">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase font-weight-bold text-warning">
                KitKitchen
              </h5>
              <p>
                This is a service where we provide the best chefs according to
                your desires
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Information
              </h5>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  Terms of Services
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  Privacy Policies
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  Contact Us
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Address
              </h5>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  xxxxx@xxxxx.com
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  017-78396777
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  Sylhet, Bangladesh.
                </Link>
              </p>
            </div>

            <hr className="mb-4" />

            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p >
                  Copyright ©2023. All rights reserved by: Kitkitchen
                  <strong className="text-warning"> </strong>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-end">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <FaFacebookF />
                    </li>
                    <li className="list-inline-item">
                      <FaGithub />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                    <li className="list-inline-item">
                      <FaYoutube />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
