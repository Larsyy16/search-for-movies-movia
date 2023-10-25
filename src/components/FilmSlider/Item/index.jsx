import React from "react";
import cx from "classnames";
import SliderContext from "../Context";
import ShowDetailsButton from "../ShowDetailsButton";
import Mark from "../Mark";
import "./style.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <>
          <div
            ref={elementRef}
            className={cx("item", {
              "item--open": isActive,
            })}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.image}`}
              alt=""
            />
            <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
            {isActive && <Mark />}
          </div>
        </>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
