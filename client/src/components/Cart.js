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
    <div className="">
      <Link to=""></Link>
      <div>
        {cart.map((item, index) => {
          return (
            <div className="wishlist-card" key={index}>
              <div>
                <img
                  className="treatment-img"
                  src={item.pictureURL}
                  alt="Treatment"
                />
                <h4 className="treatment-name">{item.name}</h4>
                <p>Price : £{item.price}</p>
                {/* <p>Amount : GBP{item.price * item.quantity}</p> */}
                <div className="btn-container">
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
            </div>
          );
        })}
      </div>
      {/* {total > 0 && <h2>Total : {total}</h2>} */}
      <div className="flex-row space-between">
        <strong>Total: £{calculateTotal()}</strong>
      </div>
    </div>
  );
};

export default Cart;
