import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { SignInButton } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { useEffect } from "react";
import $ from 'jquery';
import { useNavigate, Link } from "react-router";


function Home() {

    const navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault(); // Prevents the default anchor behavior
        navigate("/");   // Navigates to the Contact route
    };

    const handleNavigation2 = (event) => {
        event.preventDefault(); // Prevents the default anchor behavior
        navigate("/contact");   // Navigates to the Contact route
    };

    useEffect(() => {
        // Function to handle scroll event for sticky navbar
        const handleScroll = () => {
            if (window.scrollY > 300) {
                document.querySelector('.sticky-top').classList.add('bg-primary', 'shadow-sm');
                document.querySelector('.sticky-top').style.top = '0px';
            } else {
                document.querySelector('.sticky-top').classList.remove('bg-primary', 'shadow-sm');
                document.querySelector('.sticky-top').style.top = '-150px';
            }
        };

        // Adding scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initialize CounterUp
        const initCounterUp = () => {
            window.$('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 2000,
            });
        };

        // Initialize Testimonials carousel
        const initTestimonialsCarousel = () => {
            window.$(".testimonial-carousel").owlCarousel({
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });
        };

        // Ensure required scripts are loaded before initializing plugins
        const interval = setInterval(() => {
            if (window.$ && window.$.fn.counterUp && window.$.fn.owlCarousel) {
                clearInterval(interval);
                initCounterUp();
                initTestimonialsCarousel();
            }
        }, 100);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []); // Empty dependency array ensures this effect runs only once

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
                                <a className="nav-item nav-link active" onClick={handleNavigation}>Home</a>
                                <a className="nav-item nav-link" onClick={handleNavigation2}>Contact</a>
                                <a className="nav-item nav-link" onClick={() => { navigate("/nonuser") }}>Talk to Lunaris</a>
                                {/* <Link to="/signin"> */}
                                <button onClick={() => { navigate('/signin') }}
                                    className="nav-item nav-link signinbtn"
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
                                {/* </Link> */}
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
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">Mohd Faiz Khan</div>
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Unlock the Power of AI Conversations</h1>
                            <p className="text-white mb-4 animated slideInRight">Engage with our advanced LLM model, Lunaris, and experience intelligent, seamless, and human-like conversations like never before.</p>
                            <a href="#aboutus" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Read More</a>
                            <a onClick={handleNavigation2} className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-lg-end">
                            <img className="img-fluid" src={assets.hero_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5" id="aboutus">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img" style={{ backgroundImage: `url(${assets.bg_about_img})` }}>
                                <img className="img-fluid" src={assets.about_img} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                            <h1 className="mb-4">Empowering Conversations with AI</h1>
                            <p className="mb-4">Lunaris leverages the power of the Gemini API combined with cutting-edge machine learning and natural language processing to deliver intelligent, seamless, and human-like conversations.</p>
                            {/* <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                                labore lorem sit. Sanctus clita duo justo et tempor.</p> */}
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Powered by Gemini API</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Advanced AI Algorithms</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Real-Time Interaction</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>24/7 Availability</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <a className="btn rounded-pill px-4 me-3" href="" style={{
                                    backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,
                                    color: 'white'

                                }} >Follow Me</a>
                                <a className="btn btn-outline-primary btn-square me-3" href="https://github.com/faizkhan77"><i className="fab fa-github"></i></a>
                                <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- Service Start --> */}
            <div className="container-fluid mt-5 py-5" id="domains">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Key Domains</div>
                            <h1 className="mb-4">Our Excellent AI Solutions for Your Business</h1>
                            <p className="mb-4">
                                Lunaris extends its versatility across various industries, harnessing the power of advanced AI to revolutionize fields such as automation, education, science, machine learning, and predictive analytics.
                            </p>

                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-robot fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Robotic Automation</h5>
                                                <p>
                                                    Empowering intelligent systems to perform tasks with speed, precision, and minimal human intervention.
                                                </p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-power-off fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Machine learning</h5>
                                                <p>
                                                    Unlocking the power of data to make predictions, identify patterns, and drive smarter decisions in real-time.
                                                </p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-graduation-cap fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Education & Science</h5>
                                                <p>
                                                    Enhancing research, learning, and scientific discovery through AI-powered tools and personalized experiences.
                                                </p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-brain fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Predictive Analysis</h5>
                                                <p>
                                                    Leveraging AI to forecast trends, predict outcomes, and support data-driven strategies for businesses and organizations.
                                                </p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

            {/* <!-- Feature Start --> */}
            <div id="whylunaris" className="container-fluid feature pt-5" style={{
                background: `linear-gradient(145deg, #0d1126, #1c2542)`,

            }}>
                <div className="container pt-5">
                    <div className="row g-5">
                        <div
                            className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
                            data-wow-delay="0.3s"
                        >
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Lunaris?</div>
                            <h1 className="text-white mb-4">
                                We're Best in AI Industry with 10 Years of Experience
                            </h1>
                            <p className="text-light mb-4">
                                Lunaris provides quick, reliable, and intelligent conversations powered by a sophisticated AI model, similar to Gemini. Here’s why you’ll love using it
                            </p>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Smart Conversations</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Fast Responses</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Always Available</span>
                            </div>
                            <div className="row g-4 pt-3">
                                <div className="col-sm-6">
                                    <div
                                        className="d-flex rounded p-3"
                                        style={{ background: "rgba(256, 256, 256, 0.1)" }}
                                    >
                                        <i className="fa fa-users fa-3x text-white"></i>
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">
                                                538
                                            </h2>
                                            <p className="text-white mb-0">Happy Users</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div
                                        className="d-flex rounded p-3"
                                        style={{ background: "rgba(256, 256, 256, 0.1)" }}
                                    >
                                        <i className="fa fa-check fa-3x text-white"></i>
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">
                                                7890
                                            </h2>
                                            <p className="text-white mb-0">Question Answered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
                            data-wow-delay="0.5s"
                            style={{ backgroundImage: `url(${assets.bg_hero})` }}
                        >
                            <img className="img-fluid" src={assets.feature} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- Case Start --> */}
            <div className="container-fluid py-5" id="projects">
                <div className="container py-5">
                    <div
                        className="mx-auto text-center wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: "500px" }}
                    >
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                            Other Projects
                        </div>
                        <h1 className="mb-4">Explore my other similar Projects</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={assets.project_1} alt="" />
                                <a className="case-overlay text-decoration-none" href="https://github.com/faizkhan77/EnlightenHub">
                                    <small>EnlightenHub</small>
                                    <h5 className="lh-base text-white mb-3">
                                        A platform where users can join study rooms, collaborate with others, and make new friends while learning. Ideal for study groups and social learning.
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={assets.project_2} alt="" />
                                <a className="case-overlay text-decoration-none" href="https://github.com/faizkhan77/GestureAI">
                                    <small>GestureAI</small>
                                    <h5 className="lh-base text-white mb-3">
                                        A computer vision-powered application that allows users to control their system with simple gestures. Paint in the air or navigate your device without touching anything.
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={assets.project_3} alt="" />
                                <a className="case-overlay text-decoration-none" href="https://github.com/faizkhan77/AlzheimInsight">
                                    <small>AlzheimInsight</small>
                                    <h5 className="lh-base text-white mb-3">
                                        A web app designed to predict whether someone is at risk for Alzheimer's. Users can input basic details, and the app will provide a risk assessment based on the data.
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Case End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-fluid py-5" id="creator">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Me</div>
                            <h1 className="mb-4">Meet the Creator</h1>
                            <p className="mb-4">
                                "Hi, I'm Mohd Faiz Khan, a passionate Python developer and data science enthusiast. I love building AI models, creating web applications, and diving deep into the world of machine learning and artificial intelligence. My mission is to create impactful solutions using technology, and I believe in continuously learning and growing. Welcome to my space where innovation meets passion!"
                            </p>
                            <a className="btn rounded-pill px-4" target="_blank" href="https://faizkhanpy.pythonanywhere.com/" style={{
                                backgroundImage: `linear-gradient(145deg, #0d1126, #1c2542)`,
                                color: 'white'
                            }}> View Portfolio</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="team-item text-center rounded p-4 pt-0" style={{
                                                background: `linear-gradient(145deg, #0d1126, #1c2542)`,

                                            }}>
                                                <img className="img-fluid rounded-circle p-4" src={assets.faiz_img1} alt="" />
                                                <h5 className="mb-0">Python Developer</h5>
                                                <small>Building AI models and web applications with Python</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="team-item text-center rounded p-4 pt-0" style={{
                                                background: `linear-gradient(145deg, #0d1126, #1c2542)`,

                                            }}>
                                                <img className="img-fluid rounded-circle p-4" alt="" src={assets.faiz_img2} />
                                                <h5 className="mb-0">AI Enthusiast</h5>
                                                <small>Passionate about AI and continuously learning in the field</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- Team End --> */}



            {/* // Testimonial Start */}
            <div className="container-xxl py-5" id="testimonials">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
                            <h1 className="mb-4">What Say Our Clients!</h1>
                            <p className="mb-4">Discover how Lunaris, your trusted AI-powered chatbot, has helped users streamline their tasks, find solutions quickly, and enhance their productivity. Don’t just take our word for it, hear from our satisfied users!</p>

                        </div>
                        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel border-start border-primary">
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">Lunaris has truly transformed the way I interact with AI. Whether I'm solving complex problems or just seeking quick answers, Lunaris is always right on point. The seamless integration and accuracy have made my workflow significantly more efficient. It's like having a personal assistant who never misses a beat!</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src={assets.testimonial_1}
                                            style={{ width: '60px', height: '60px' }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1" style={{ color: "#1363C6" }}>Emma Brown</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">I’ve tried several chatbots in the past, but Lunaris stands out because it genuinely understands the context of my queries. I no longer have to waste time rephrasing my questions. It’s fast, accurate, and the responses feel like they’re coming from a human expert. I can’t recommend it enough for anyone looking to save time!</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src={assets.testimonial_2}
                                            style={{ width: '60px', height: '60px' }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1" style={{ color: "#1363C6" }}>Michael</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">As someone who is passionate about artificial intelligence, I have experimented with many AI models, but Lunaris truly excels. The accuracy of its responses and its ability to adapt to a wide range of questions makes it one of the most impressive chatbots I’ve used. It’s an invaluable tool for both professionals and enthusiasts alike.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src={assets.testimonial_3}
                                            style={{ width: '60px', height: '60px' }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1" style={{ color: "#1363C6" }}>Greg stemberg</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Testimonial End */}


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
                            <a className="btn btn-link" href="#aboutus">About Us</a>
                            {/* <a className="btn btn-link" href="">Contact Us</a> */}
                            <a className="btn btn-link" href="#domains">Key Domains</a>
                            <a className="btn btn-link" href="#creator">Creator</a>
                            <a className="btn btn-link" href="#projects">Projects</a>
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
    );
}

export default Home;
