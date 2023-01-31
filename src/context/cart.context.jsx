import { createContext, useState } from "react";

const addCartItems = (cartItem, productToAddInCart) => {};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAddInCart) => {
    console.log(productToAddInCart);
    setCartItems(addCartItems(cartItems, productToAddInCart));
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
