import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="description-container">
      <h4 className="perfume-header">P E R F U M E</h4>
      <h1 className="perfume-name">Gabrielle Essence Eau De Parfum</h1>
      <p className="perfume-paragraph">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price-container">
        <h1 className="new-price">$149.99</h1>
        <h5 className="old-price">$169.99</h5>
      </div>
      <button className="add-button">
        <img
          className="shopping-cart-image"
          src={require(`../images/cart.png`)}
          alt="cart-img"
        />
        <p className="add-to-cart-text">Add to Cart</p>
      </button>
    </div>
  );
}

export default Description;
