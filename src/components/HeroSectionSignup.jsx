import React from "react";
import { Helmet } from "react-helmet";
import { SignInButton } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
import ContactForm from "./ContactForm";

function HeroSectionSignup() {
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault(); // Prevents the default anchor behavior
        navigate("/");   // Navigates to the Contact route
    };

    const handleNavigation2 = (event) => {
        event.preventDefault(); // Prevents the default anchor behavior
        navigate("/contact");   // Navigates to the Contact route
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

            {/* navbar */}
            <div className="container-fluid sticky-top" style={{
                backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,

            }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <a onClick={() => { navigate("/") }} className="navbar-brand">
                            <h1 className="text-white">Lunaris</h1>
                        </a>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="" className="nav-item nav-link active" onClick={handleNavigation}>Home</a>
                                <a className="nav-item nav-link" onClick={handleNavigation2}>Contact</a>
                                <a className="nav-item nav-link" onClick={() => { navigate("/nonuser") }}>Talk to Lunaris</a>

                                <button onClick={() => { navigate('/signin') }}
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
                                </button>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {/* <!-- Hero Start --> */}
            <div
                className="container-fluid pt-5 hero-header mb-5"
                style={{
                    backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,

                }}
            >
                <div className="container pt-5" style={{ backgroundImage: `url(${assets.bg_hero})` }}>
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">Lunaris AI</div>
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Welcome to Lunaris AI!</h1>
                            <p className="text-white mb-4 animated slideInRight">
                                We’re thrilled to have you here! If you’re new to Lunaris, sign up below to unlock a world of cutting-edge AI tools and features designed to empower your creativity.
                                Start your journey now and join a growing community of innovators!
                            </p>
                            <a onClick={() => { navigate('/signin') }} className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight" style={{
                                backgroundColor: "#f4f4f9",  // Light color for normal state
                                color: "#0D0F14",  // Dark text for normal state
                                border: "2px solid #f4f4f9",  // Light border for normal state
                                padding: "12px 30px",  // Padding for the button
                                fontSize: "16px",  // Text size
                                fontWeight: "600",  // Bold text
                                borderRadius: "30px",  // Rounded corners
                                textAlign: "center",  // Center the text
                                cursor: "pointer",  // Pointer cursor on hover
                                transition: "all 0.3s ease",  // Smooth transition for hover effect
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#0D0F14";  // Dark background on hover
                                    e.target.style.color = "white";  // White text on hover
                                    e.target.style.border = "2px solid #0D0F14";  // Dark border on hover
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#f4f4f9";  // Light background on leave
                                    e.target.style.color = "#0D0F14";  // Dark text on leave
                                    e.target.style.border = "2px solid #f4f4f9";  // Light border on leave
                                }}> Already a member? Sign in and continue your journey.</a>

                        </div>

                        <div className="col-lg-6 align-self-end text-center text-lg-end">
                            <img className="img-fluid" src={assets.hero_img} alt="" />
                        </div>
                    </div>
                </div>



            </div>
            {/* <!-- Hero End --> */}




        </>
    )
}

export default HeroSectionSignup;