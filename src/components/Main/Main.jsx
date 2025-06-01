import React, { useContext, useState, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";

function Main() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClickOutside = (e) => {
    if (!e.target.closest(".user-menu")) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const {
    onSet,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="maindiv">
      <Sidebar />
      <div className="main">
        <div className="nav">
          <div className="brand" onClick={() => navigate("/")}>
            <img src={assets.lunarislogo} alt="Lunaris Logo" className="logo" />
            <p className="brand">Lunaris</p>
          </div>
          <div className="user-menu">
            {user ? (
              <UserButton
                className="user-icon"
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      border: "2px solid #f6c1e1",
                      borderRadius: "50%",
                    },
                    userButtonPopoverCard: {
                      background: "#f9ecf2",
                      borderRadius: "4px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    },
                    userButtonPopoverActionButton: {
                      color: "#333333",
                      "&:hover": {
                        background: "#f6c1e1",
                        color: "#ffffff",
                      },
                    },
                  },
                }}
              />
            ) : (
              <>
                <img
                  className="user-icon"
                  src={assets.user_icon}
                  alt="User Icon"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                />
                {dropdownVisible && (
                  <div className="dropdown">
                    <p
                      className="dropdown-option"
                      onClick={() => navigate("/")}
                    >
                      Go to Home
                    </p>
                    <p
                      className="dropdown-option"
                      onClick={() => navigate("/signin")}
                    >
                      Sign in Now
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p className="greet-header">
                  <span>
                    Hello,
                    {user ? ` ${user.username}` : <span> Newcomer</span>}.
                  </span>
                </p>
                <p className="greet-subtext">
                  How can I illuminate your path today?
                </p>
              </div>

              <div className="cards">
                {[
                  {
                    prompt:
                      "Where can I find the best travel destinations tailored to my preferences?",
                    icon: "fas fa-compass",
                  },
                  {
                    prompt:
                      "What are some innovative ideas for starting a new business?",
                    icon: "fas fa-lightbulb",
                  },
                  {
                    prompt:
                      "How can I improve my communication and presentation skills?",
                    icon: "fas fa-comment-dots",
                  },
                  {
                    prompt:
                      "What are the best practices for learning to code effectively?",
                    icon: "fas fa-code",
                  },
                  {
                    prompt:
                      "How do I maintain a healthy work-life balance while staying productive?",
                    icon: "fas fa-balance-scale",
                  },
                  {
                    prompt:
                      "What are the best tools and techniques for managing time efficiently?",
                    icon: "fas fa-clock",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="card"
                    onClick={() => onSet(card.prompt)}
                  >
                    <p>{card.prompt}</p>
                    <i className={card.icon} aria-hidden="true"></i>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                {user ? (
                  <img
                    className="usericon"
                    src={user.imageUrl}
                    alt="User Icon"
                  />
                ) : (
                  <img
                    className="usericon"
                    src={assets.user_icon}
                    alt="Default Icon"
                  />
                )}
                <p>{recentPrompt}</p>
              </div>

              <div className="result-data">
                <img className="lunarislogo" src={assets.lunarislogo} alt="" />
                {loading ? (
                  <div className="loader">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <form
                className="inputForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (input) {
                    onSet();
                  }
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Enter a prompt here"
                />
                <div>
                  <i
                    className="fas fa-images"
                    onClick={() =>
                      alert(
                        "Not available yet, I will update soon, else you can contribute :)"
                      )
                    }
                  ></i>
                  <i
                    className="bi bi-mic"
                    onClick={() =>
                      alert(
                        "Not available yet, I will update soon, else you can contribute :)"
                      )
                    }
                  ></i>
                  {input && (
                    <i
                      className="fas fa-paper-plane"
                      onClick={() => onSet()}
                    ></i>
                  )}
                </div>
              </form>
            </div>

            <p className="bottom-info">
              Lunaris is greatly inspired by OpenAI's GPT and Google's Bard.
              While we strive for accuracy, always double-check sensitive
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
