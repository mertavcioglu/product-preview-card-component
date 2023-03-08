import React from "react";
import "./Container.css";
import Description from "./Description";

function Container() {
  return (
    <div className="main-container">
      <img
        className="parfume-desktop-image"
        src={require("../images/image-product-desktop.jpg")}
        alt="parfume-desktop-img"
      />
      <img
        className="parfume-mobile-image"
        src={require("../images/image-product-mobile.jpg")}
        alt="parfume-mobile-img"
      />
      <Description />
    </div>
  );
}

export default Container;
