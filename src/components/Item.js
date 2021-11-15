import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const isInCart = inCart ? "in-cart" : "";

  function clickHandler(){
    setInCart((inCart) => !inCart)
  }


  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={clickHandler} className="add" >{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
