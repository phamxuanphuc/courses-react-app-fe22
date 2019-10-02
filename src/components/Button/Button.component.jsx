import React from "react";

const ButtonCustomer = ({
  children,
  signInGoogle,
  addToCart,
  ...otherProps
}) => (
  <button
    className={`${addToCart && "add-to-cart"} ${signInGoogle &&
      "sign-in-google"} button-custom`}
    {...otherProps}>
    <div className='btn-children'>{children}</div>
  </button>
);
export default ButtonCustomer;
