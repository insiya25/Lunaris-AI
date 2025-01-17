import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { SignInButton } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault(); // Prevents the default anchor behavior
        navigate("/");   // Navigates to the Contact route
    };
    return (
        <>
            <Helmet>


                {/* <!-- Icon Font Stylesheet --> */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link rel="stylesheet" href="/lib/animate/animate.min.css" />
                <link rel="stylesheet" href="/lib/owlcarousel/assets/owl.carousel.min.css" />

                {/* Customized Bootstrap Stylesheet */}
                <link rel="stylesheet" href="/css/bootstrap.min.css" />

                {/* External Scripts */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            </Helmet>
            {/* // Newsletter Start */}
            <div className="container-fluid newsletter py-5" style={{
                backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,
            }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                            <img className="img-fluid" src={assets.newsletter} alt="" />
                        </div>
                        <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Join Us</div>
                            <h1 className="text-white mb-4">Sign up now and start chatting with Lunaris!</h1>
                            <p className="text-white-50 mb-4">Ready to experience the power of Lunaris? Join now to begin your AI-powered conversation with the next-generation chatbot.</p>
                            <div className="position-relative w-100 mt-3 mb-2">
                                <SignInButton
                                    className="nav-item nav-link"
                                    style={{
                                        background: "linear-gradient(145deg, #0e0e3c, #1f1f56)",  // Dark bluish gradient
                                        color: "#f4f4f9",  // Silver/white color for the text
                                        borderRadius: "30px",  // Rounded corners for a smooth, modern look
                                        padding: "12px 30px",  // Some padding to make the button larger and more clickable
                                        fontSize: "16px",  // Medium text size
                                        fontWeight: "600",  // Slightly bold text for emphasis
                                        textAlign: "center",  // Center the text
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2)",  // Soft shadow for depth
                                        border: "none",  // Remove default border
                                        cursor: "pointer",  // Pointer cursor to show it's clickable
                                        transition: "all 0.3s ease",  // Smooth transition for hover effect
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";  // Hover effect - slight scale increase
                                        e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)";  // Hover shadow
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";  // Reset scale on mouse leave
                                        e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2)";  // Reset shadow
                                    }}
                                >
                                    Sign In
                                </SignInButton>
                            </div>
                            <small className="text-white-50">Let Lunaris help you with your every query!</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Newsletter End */}

            {/* // Footer Start */}
            <div className="container-fluid text-white-50 footer pt-5" style={{
                backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,

            }}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <a href="index.html" className="d-inline-block mb-3">
                                <h1 className="text-white">Lunaris</h1>
                            </a>
                            <p className="mb-0">Explore the power of AI and engage with Lunaris. Start chatting today and experience a futuristic conversation model designed to assist you like never before!</p>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            {/* <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p> */}
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.kaggle.com/faizkhan7"><i className="fab fa-kaggle"></i></a>
                                <a className="btn btn-outline-light btn-social" target="_blank" href="https://github.com/faizkhan77"><i className="fab fa-github"></i></a>
                                {/* <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a> */}
                                <a className="btn btn-outline-light btn-social" target="_blank" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.linkedin.com/in/faiz-khan77/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 className="text-white mb-4">Popular Link</h5>
                            <a className="btn btn-link" onClick={handleNavigation}>About Us</a>
                            {/* <a className="btn btn-link" href="">Contact Us</a> */}
                            <a className="btn btn-link" onClick={handleNavigation}>Key Domains</a>
                            <a className="btn btn-link" onClick={handleNavigation}>Creator</a>
                            <a className="btn btn-link" onClick={handleNavigation}>Projects</a>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="text-white mb-4">My Field of Expertice</h5>
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
                                &copy; <a className="border-bottom" href="#">Lunaris</a>, All Right Reserved.

                                Developed By <a className="border-bottom" href="https://faizkhanpy.pythonanywhere.com/" target="_blank">Mohd Faiz Khan</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* // Footer End */}

        </>
    )
}

export default Footer