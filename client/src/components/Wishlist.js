import React from "react";

// import Auth from "../utils/auth";
// import { removeTreatmentId } from "../utils/localStorage";

import {
  useQuery,
  // , useMutation
} from "@apollo/client";
// name of the functions to be edited after getting the code from backend team
import { QUERY_WISHLIST } from "../utils/queries";
// import { DEL_WISHLIST } from "../utils/mutations";

const Wishlist = () => {
  const { data } = useQuery(QUERY_WISHLIST);
  // const [removeTreatmentFromWishlist] = useMutation(DEL_WISHLIST);

  // const handleDeleteTreatment = async (_id) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     await removeTreatmentFromWishlist({
  //       variables: { _id },
  //     });
  //     removeTreatmentId(_id);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // testing buttons
  function addCart() {
    alert("You clicked add cart!");
  }
  const wishlistData = data?.wishlist.treatments ?? [];

  console.log(wishlistData);
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
            // onClick={() => handleDeleteTreatment(treatment._id)}
          >
            Remove
          </button>
          <button className="btn btn-addCart" onClick={addCart}>
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
