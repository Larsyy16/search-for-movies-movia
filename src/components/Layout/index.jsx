import {useContext} from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./style.scss";
import { MenuContext } from "../MenuContext";

export default function Layout() {

  const {theme, setTheme, menuButton, setMenuButton} = useContext(MenuContext);
  const className = 'dark';
  return (


        <>
          <Header menuButton={menuButton} setMenuButton={setMenuButton}
          theme={theme} setTheme={setTheme}
          className={theme==='dark'? 'dark' : 'light'} />
          <main className={theme==='dark'? 'dark' : 'light'}>
            <Outlet />
          </main>
          <Footer theme={theme} setTheme={setTheme}/>
        </>
  );
}
