import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { SignInButton } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      </Helmet>
      <div
        className="container-fluid newsletter py-5"
        style={{
          backgroundImage: `linear-gradient(145deg, #f8e1e9, #fce8ec)`,
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src={assets.newsletter} alt="" />
            </div>
            <div
              className="col-md-7 py-5 newsletter-text wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3">
                Join Us
              </div>
              <h1 className="text-dark mb-4">
                Sign up now and start chatting with Lunaris!
              </h1>
              <p className="text-dark mb-4">
                Ready to experience the power of Lunaris? Join now to begin your
                AI-powered conversation with the next-generation chatbot.
              </p>
              <div className="position-relative w-100 mt-3 mb-2">
                {/* <SignInButton
                  className="nav-item nav-link"
                  style={{
                    background: "linear-gradient(45deg, #f6c1e1, #f7a7d7)",
                    color: "#ffffff",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.03)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  Sign In
                </SignInButton> */}
              </div>
              <small className="text-dark">
                Let Lunaris help you with your every query!
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-dark footer pt-5"
        style={{
          backgroundImage: `linear-gradient(145deg, #f8e1e9, #fce8ec)`,
        }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-dark">Lunaris</h1>
              </a>
              <p className="mb-0">
                Explore the power of AI and engage with Lunaris. Start chatting
                today and experience a futuristic conversation model designed to
                assist you like never before!
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-dark mb-4">Get In Touch</h5>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-dark btn-social"
                  target="_blank"
                  href="https://www.linkedin.com/in/insiya-rizvi-6459a52a0/"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-outline-dark btn-social"
                  target="_blank"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-dark btn-social"
                  target="_blank"
                  href="https://www.linkedin.com/in/insiya-rizvi-6459a52a0/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-dark mb-4">Popular Link</h5>
              <a className="btn btn-link" onClick={handleNavigation}>
                About Us
              </a>
              <a className="btn btn-link" onClick={handleNavigation}>
                Key Domains
              </a>
              <a className="btn btn-link" onClick={handleNavigation}>
                Creator
              </a>
              <a className="btn btn-link" onClick={handleNavigation}>
                Projects
              </a>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-dark mb-4">My Field of Expertise</h5>
              <a className="btn btn-link">Robotic Automation</a>
              <a className="btn btn-link">Machine learning</a>
              <a className="btn btn-link">Predictive Analysis</a>
              <a className="btn btn-link">Data Science</a>
              <a className="btn btn-link">Robot Technology</a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Lunaris
                </a>
                , All Right Reserved. Developed By{" "}
                <a
                  className="border-bottom"
                  href="https://www.linkedin.com/in/insiya-rizvi-6459a52a0/"
                  target="_blank"
                >
                  Insiya Rizvi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
