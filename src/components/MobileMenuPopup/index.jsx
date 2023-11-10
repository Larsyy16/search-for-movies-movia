import React, { useContext } from "react";
import { MenuContext } from "../../components/MenuContext";
import { Link } from "react-router-dom";

import "./style.scss";

export default function MobileMenuPopup() {
  const { menuButton } = useContext(MenuContext);
  return (
    <>
      {menuButton && (
        <nav className="navMobile">
          <ul className="navMobileList">
            <li className="navMobileitem">
              <Link to="/" className="navMobileLink">
                <h2 className="home">Home </h2>
              </Link>
            </li>
            <li className="navMobileitem">
              <Link to="/About" className="navMobileLink">
                <h2 className="genre">About </h2>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
