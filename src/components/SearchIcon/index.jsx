import { useState } from "react";
import "./SearchIcon.scss";

const SearchIcon = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="search-icon" onClick={toggleSearch}>
      <svg src="../../assets/magGlass.svg"></svg>
      {isSearchVisible && (
        <div className="search-container">
          <input type="text" placeholder="Search..." />
        </div>
      )}
    </div>
  );
};

export default SearchIcon;
