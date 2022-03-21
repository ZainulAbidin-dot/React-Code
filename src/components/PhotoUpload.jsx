import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/PhotoUpload.css";

function PhotoUpload() {
  return (
    <div className="PhotoUpload">
      <img
        src={"/rest-pictures/restaurant.jfif"}
        className="restaurantCover"
        alt="Restaurant-Logo"
      />
    </div>
  );
}

export default PhotoUpload;
