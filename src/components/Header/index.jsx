import { Link } from "react-router-dom";
import "./style.scss";
import SearchMovies from "../SearchMovies";
import MobileMenu from "../MobileMenu";

export default function Header({ menuButton, setMenuButton }) {
  return (
    <>
      <header className="header">
        <span>Movia</span>
        <MobileMenu menuButton={menuButton} setMenuButton={setMenuButton} />
        <nav className="nav">
          <ul className="nav-list">
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
