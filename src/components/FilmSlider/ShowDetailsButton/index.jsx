import React from "react";
import IconArrowDown from "../../../assets/IconArrowDown";
import "./style.scss";

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
