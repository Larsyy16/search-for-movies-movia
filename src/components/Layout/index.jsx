import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./style.scss";
import { MenuContext } from "../MenuContext";

export default function Layout() {
  return (
    <MenuContext.Consumer>
      {({ menuButton, setMenuButton }) => (
        <>
          <Header menuButton={menuButton} setMenuButton={setMenuButton} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </MenuContext.Consumer>
  );
}

