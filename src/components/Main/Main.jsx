import React, { useContext, useState, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate, Link } from "react-router";
import { dark } from "@clerk/themes";

function Main() {
  const navigate = useNavigate();
  const { user } = useUser();
  const handleClickOutside = (e) => {
    if (!e.target.closest(".user-menu")) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [dropdownVisible, setDropdownVisible] = useState(false); // Initialize state for dropdown visibility

  // We will get the states and functions from Context.jsx using Context API
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
    <div className="main">
      <div className="nav">
        <div
          className="brand"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={assets.lunarislogo} alt="Lunaris Logo" className="logo" />
          <p className="brand">Lunaris</p>
        </div>
        <div className="user-menu">
          {user ? (
            <UserButton
              className="user-icon"
              appearance={{ baseTheme: dark }}
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
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Go to Home
                  </p>
                  <p
                    className="dropdown-option"
                    onClick={() => {
                      navigate("/signin");
                    }}
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
        {/* if show result is false show all this */}
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
                  onClick={() => onSet(card.prompt)} // Pass the prompt directly to the onSet function
                >
                  <p>{card.prompt}</p>
                  <i className={card.icon} aria-hidden="true"></i>
                </div>
              ))}
            </div>
          </>
        ) : (
          // else show the result
          <div className="result">
            <div className="result-title">
              {user ? (
                <img className="usericon" src={user.imageUrl} alt="User Icon" />
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

              {
                // if loading is true display loader else the response
                loading ? (
                  <div className="loader">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                ) : (
                  // if we have displayed resultData directly then it would display all the tags as well from the result (response of gemini), so in order to hide those tags and display those tags as an HTML tags we use 'dangerouslySetInnerHTML' property
                  <p dangerouslySetInnerHTML={{ __html: resultData }}>
                    {/* {resultData} */}
                  </p>
                )
              }
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <form
              className="inputForm"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent page reload
                if (input) {
                  onSet(); // Call the function when Enter is pressed
                }
              }}
            >
              {/* making this input field controlled, as it will be saved in "input" state */}
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                {/* <img src={assets.gallery_icon} alt="" /> */}
                <i
                  className="fas fa-images"
                  onClick={() =>
                    alert(
                      "Not available yet, i will update soon, else you can contribute :)"
                    )
                  }
                ></i>

                {/* <img src={assets.mic_icon} alt="" /> */}
                <i
                  className="bi bi-mic"
                  onClick={() =>
                    alert(
                      "Not available yet, i will update soon, else you can contribute :)"
                    )
                  }
                ></i>

                {/* here we are calling the onSet() func which is responsible for passing the input to gemini and giving us the response, in Context.jsx we already passed "input" state which is automatically filled by the input box above when we type due to "onChange" hook, so we didnt have to pass "input" state again as params */}
                {input ? ( // if input field has data display the send icon, else hide
                  // <img onClick={() => onSet()} src={assets.send_icon} alt="" />
                  <i className="fas fa-paper-plane" onClick={() => onSet()}></i>
                ) : null}
              </div>
            </form>
          </div>

          <p className="bottom-info">
            Lunaris is greatly inspired by OpenAI's GPT and Google's Bard. While
            we strive for accuracy, always double-check sensitive information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
