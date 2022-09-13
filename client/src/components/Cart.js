import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };

  const total = cart.reduce(addition, 0);
  return (
    <div className="">
      <Link to=""></Link>
      <div>
        {cart.map((item) => {
          return (
            <div className="" key={item.id}>
              <div>
                <img src="" alt="" />
                <h4>{item.name}</h4>
                <p>Price : GBP{item.price}</p>
                <p>Amount : GBP{item.price * item.quantity}</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
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
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
