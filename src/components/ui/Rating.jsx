import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
    return(
        <div className="book__ratings">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon
            icon="star"
            key={index}
            className="book__ratings--star"
          />
        ))}
        {
            !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half" className="book__ratings--star" />
        }
      </div>
    )
}

export default Rating;