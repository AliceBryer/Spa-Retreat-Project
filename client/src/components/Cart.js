import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// const cartFromLocalStorage = JSON.parse(localStorage.getItem);

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  console.log(cart);
  const [total, setTotal] = useState(null);

  const dispatch = useDispatch();
  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!cart?.length) return false;
    setTotal(cart.reduce(addition, 0));
  }, [cart]);

  if (!cart?.length) return null;
  return (
    <div className="">
      <Link to=""></Link>
      <div>
        {cart.map((item, index) => {
          return (
            <div className="" key={index}>
              <div>
                <img src="" alt="" />
                <h4>{item.name}</h4>
                <p>Price : GBP{item.price}</p>
                <p>Amount : GBP{item.price * item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item._id })
                  }
                >
                  Remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item._id });
                    }
                  }}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {total > 0 && <h2>Total : {total}</h2>}
    </div>
  );
};

export default Cart;
