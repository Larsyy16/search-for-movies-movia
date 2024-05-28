import { Link } from "react-router-dom";
import "./style.scss";
import SearchMovies from "../SearchMovies";
import MobileMenu from "../MobileMenu";
import Switch from 'react-switch'
export default function Header({ menuButton, setMenuButton, theme, setTheme }) {
  
  const handleChange = (checked) => {
    setTheme(checked ? 'dark' : 'light'); // Update theme based on checked state
  };

  return (
    <>
      <header className={`header ${theme==='dark'? 'dark' : 'light'}`}>
        <Link to="/">Movia</Link>
        <MobileMenu menuButton={menuButton} setMenuButton={setMenuButton} />
        <nav className="nav">
          <ul className="nav-list">

            <li className="themeButton">
              {/* <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
              }}
              >
              </input> */}
              <Switch
              checked={theme === 'dark'}
              onChange={handleChange}              
              />

            </li>
            <li className="nav-item">
              <Link to="./" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <SearchMovies />
      </header>
    </>
  );
}
