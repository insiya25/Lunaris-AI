import React from "react";
import { Helmet } from "react-helmet";
import { SignInButton } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
import ContactForm from "./ContactForm";

function HeroSection() {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleNavigation2 = (event) => {
    event.preventDefault();
    navigate("/contact");
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
        className="container-fluid sticky-top"
        style={{
          backgroundImage: `linear-gradient(145deg, #f8e1e9, #fce8ec)`,
        }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="navbar-brand"
            >
              <h1 className="text-dark">Lunaris</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a
                  href=""
                  className="nav-item nav-link active"
                  onClick={handleNavigation}
                >
                  Home
                </a>
                <a className="nav-item nav-link" onClick={handleNavigation2}>
                  Contact
                </a>
                <a
                  className="nav-item nav-link"
                  onClick={() => {
                    navigate("/nonuser");
                  }}
                >
                  Talk to Lunaris
                </a>
                <button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="nav-item nav-link signin-btn"
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
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="container-fluid pt-5 hero-header mb-5"
        style={{
          backgroundImage: `linear-gradient(145deg, #f8e1e9, #fce8ec)`,
        }}
      >
        <div
          className="container pt-5"
          style={{ backgroundImage: `url(${assets.bg_hero})` }}
        >
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Insiya Rizvi
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Looking to Bring Your Ideas to Life?
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Need a cutting-edge AI model or a dynamic web application? I’m
                here to help! As a freelance developer, I specialize in creating
                AI-powered solutions and scalable web apps tailored to your
                needs. Reach out below or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/insiya-rizvi-6459a52a0/"
                  target="_blank"
                  className="text-dark text-decoration-underline"
                >
                  LinkedIn
                </a>
                .
              </p>
              <a
                href="https://www.linkedin.com/in/insiya-rizvi-6459a52a0/"
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
                target="_blank"
              >
                Portfolio
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={assets.hero_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
