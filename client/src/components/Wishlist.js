import React from "react";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WISHLIST } from "../utils/queries";
import { DEL_WISHLIST } from "../utils/mutations";

const Wishlist = () => {
  const { data } = useQuery(QUERY_WISHLIST);
  const wishlistData = data?.wishlist.treatments ?? [];

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
            // onClick={addCart}
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
