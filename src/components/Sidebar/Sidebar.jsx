import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSet, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSet(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <i
          onClick={() => setExtended(!extended)}
          className="fas fa-bars menu"
        ></i>
        <div onClick={() => newChat()} className="new-chat">
          <i className="fas fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts
              .slice(-5)
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="recent-entry test"
                >
                  <i className="fas fa-envelope message-icon"></i>
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              ))}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, I will update soon, else you can contribute :)"
            )
          }
        >
          <i className="fas fa-question-circle"></i>
          {extended ? <p>Help</p> : null}
        </div>
        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, I will update soon, else you can contribute :)"
            )
          }
        >
          <i className="fas fa-history"></i>
          {extended ? <p>Activity</p> : null}
        </div>
        <div
          className="bottom-item recent-entry"
          onClick={() =>
            alert(
              "Not available yet, I will update soon, else you can contribute :)"
            )
          }
        >
          <i className="fas fa-cog"></i>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
