import * as React from "react";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WISHLIST } from "../utils/queries";
import { DEL_WISHLIST, ADD_ORDER } from "../utils/mutations";
import { useDispatch } from "react-redux";

const Wishlist = () => {
  // fetch data from db
  const { data } = useQuery(QUERY_WISHLIST);
  const wishlistData = data?.wishlist.treatments ?? [];

  // remove treatment from wishlist
  const [removeTreatmentFromWishlist] = useMutation(DEL_WISHLIST);
  const handleRemoveTreatment = async (treatment) => {
    try {
      await removeTreatmentFromWishlist({
        variables: { treatment },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // add treatment to cart
  const dispatch = useDispatch();
  const [addOrder] = useMutation(ADD_ORDER);
  const addToCart = async (treatment) => {
    await addOrder({
      variables: {
        treatment: treatment._id,
      },
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: treatment,
    });
    console.log("added to cart");
  };

  // render wishlist items
  const wishlistCard = wishlistData.map((treatment) => {
    return (
      <div key={treatment._id} class="wishlist-card">
        <img
          class="treatment-img"
          src={treatment.pictureURL}
          alt={`${treatment.name}`}
        />
        <h5 class="treatment-name">{treatment.name}</h5>
        <div className="btn-container">
          <button
            className="btn btn-del"
            onClick={() => handleRemoveTreatment(treatment._id)}
          >
            Remove
          </button>
          <button
            className="btn btn-addCart"
            onClick={() => addToCart(treatment._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="title">WISHLIST</h2>
      <div className="wishlist-container">{wishlistCard}</div>
    </div>
  );
};

export default Wishlist;
