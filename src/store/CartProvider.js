import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const remnoveItemToCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: remnoveItemToCartHandler,
  };

  return <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
