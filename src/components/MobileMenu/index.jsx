import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuSvg from "../../assets/menu.svg";

import "./style.scss";

export default function MobileMenu({ menuButton, setMenuButton }) {

  return (
    <>
      {!menuButton && (
        <div
          className="mobileMenu"
          onClick={() => {
            setMenuButton(true);
          }}
        >
          <img src={menuSvg} alt="Menu Icon" />
        </div>
      )}

      {menuButton && (
        <button
          onClick={() => {
            setMenuButton(false);
          }}
          className="settingsButtonClicked"
        >
          X
        </button>
      )}
    </>
  );
}
