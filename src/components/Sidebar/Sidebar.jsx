import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtented] = useState(false);

  // getting some data from the Context.jsx using context api
  const { onSet, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSet(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <i
          onClick={() => setExtented(!extended)}
          className="fas fa-bars menu"
        ></i>
        {/* <img onClick={() => setExtented(!extended)} className='menu' src={assets.menu_icon} alt="" /> */}
        <div onClick={() => newChat()} className="new-chat">
          {/* <img src={assets.plus_icon} alt="" /> */}
          <i className="fas fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {
              // Take the last 5 items and display them in descending order
              prevPrompts
                .slice(-5)
                .reverse()
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => loadPrompt(item)}
                      className="recent-entry test"
                    >
                      {/* <img src={assets.message_icon} alt="" /> */}
                      <i className="fas fa-envelope message-icon"></i>
                      {/* Use slice to ensure long texts are cutoff */}
                      <p>{item.slice(0, 18)} ...</p>
                    </div>
                  );
                })
            }
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, i will update soon, else you can contribute :)"
            )
          }
        >
          {/* <img src={assets.question_icon} alt="" /> */}
          <i className="fas fa-question-circle"></i>
          {extended ? <p>Help</p> : null}
        </div>

        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, i will update soon, else you can contribute :)"
            )
          }
        >
          {/* <img src={assets.history_icon} alt="" /> */}
          <i className="fas fa-history"></i>
          {extended ? <p>Activity</p> : null}
        </div>

        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, i will update soon, else you can contribute :)"
            )
          }
        >
          {/* <img src={assets.setting_icon} alt="" /> */}
          <i className="fas fa-cog"></i>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
