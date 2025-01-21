import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={`Item ${isInCart ? "in-cart" : ""}`}>
      <h3>{name}</h3>
      <p>{category}</p>
      <button onClick={handleAddToCartClick}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
