import React from "react";
import GenrePicker from "./GenrePicker";

function TopMenu() {
  return (
    <nav className="menu">
      <button>
        <span className="profile-logo" role="img" aria-label="user">
          👤
        </span>
        <span className="profile-menu">username</span>
      </button>
    </nav>
  );
}

export default TopMenu;
