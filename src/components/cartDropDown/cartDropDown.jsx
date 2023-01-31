import React from "react";
import Button from "../button/button.component";
import "./cartDropDown.styles.scss";
import CartItem from "../cart-item/cartItem.component";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">Your cart is Empty</div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
