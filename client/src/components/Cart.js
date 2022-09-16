import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  // const state = useSelector((state) => state);
  const cart = useSelector((state) => state?.cart);
  console.log(cart);
  const [total, setTotal] = useState(null);

  const dispatch = useDispatch();
  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };

  useEffect(() => {
    if (!cart?.length) return false;
    setTotal(cart.reduce(addition, 0));
  }, [cart]);

  function calculateTotal() {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
  }

  if (!cart?.length) return null;
  return (
    <>
      <div>
        <h2 className="title">CART</h2>
      </div>
      <Link to=""></Link>
      <div>
        {cart.map((item, index) => {
          return (
            <div key={index} className="cart-container">
              <div className="cart-item">
                <img
                  className="cart-item-img"
                  src={item.pictureURL}
                  alt="Treatment"
                />
              </div>
              <div className="cart-item">
                <h4 className="cart-item-name">{item.name}</h4>
              </div>
              <div className="cart-item">
                <p className="cart-item-price">Price : £{item.price}</p>
              </div>
              {/* <p>Amount : GBP{item.price * item.quantity}</p> */}
              <div className="cart-item">
                <button
                  className="btn btn-del"
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item._id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        {/* {total > 0 && <h2>Total : {total}</h2>} */}
        <div className="cart-total-price">
          <strong>Total: £{calculateTotal()}</strong>
        </div>
      </div>
    </>
  );
};

export default Cart;
