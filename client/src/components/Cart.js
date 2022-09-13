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
      <div>{cart.map((item) => {})}</div>
    </div>
  );
};
