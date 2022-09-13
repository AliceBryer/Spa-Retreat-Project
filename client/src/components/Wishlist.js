import React from "react";

import Auth from "../utils/auth";
import { removeTreatmentId } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/client";
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
  // try {
  //   await removeTreatmentFromWishlist({
  //     variables: { _id },
  //   });
  //   removeTreatmentId(_id);
  // } catch (err) {
  //   console.error(err);
  // }
  // };

  //   {
  //     name: "Deep tissue full body",
  //     description:
  //       "Combat those aches and pains, with a deep tissue massage that can be tailored to focus on your specific areas of concern, ensuring your tired muscles get the TLC they truly deserve",
  //     price: "95",
  //     pictureURL:
  //       "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   },
  //   {
  //     name: "Age defying facial massage",
  //     description:
  //       "Combining our most-loved Elemis treatments to create the ultimate two-hour experience. Your treatment will begin with a relaxing full body massage, designed to soothe both your muscles and mind, leading onto our Pro-Collagen facial, known for its clinically proven anti-wrinkle results. Leave Spa-Retreat not only feeling refreshed and rebalanced, but also with a firm, radiant and youthful looking complexion.",
  //     price: "160",
  //     pictureURL:
  //       "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  //   },
  //   {
  //     name: "Indian head massage",
  //     description:
  //       "Total relaxation. This massage focuses on energy centres of the head, neck, scalp, and face by using key acupressure points to relieve tension and stress. Inclusive of a welcoming foot ritual. Please note this treatment is performed on a therapy chair.",
  //     price: "80",
  //     pictureURL:
  //       "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  //   },
  // ];

  // testing buttons
  function addCart() {
    alert("You clicked add cart!");
  }
  const wishlistData = data?.wishlist.treatments ?? [];

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
