import React from "react";

import Auth from "../utils/auth";
import { removeTreatmentId, saveTreatmentIds } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/client";
// name of the functions to be edited after getting the code from backend team
import { GET_USER } from "../utils/queries";
import { DEL_WISHLIST } from "../utils/mutations";

const Wishlist = () => {
  //   const { loading, data } = useQuery(GET_USER);
  //   const [removeTreatment] = useMutation(DEL_WISHLIST);

  //   const userData = data?.user || {};

  //   const handleDeleteTreatment = async (treatmentId) => {
  //     const token = Auth.loggedIn() ? Auth.getToken() : null;

  //     if (!token) {
  //       return false;
  //     }
  //     try {
  //       await removeTreatment({
  //         variables: { treatmentId },
  //       });
  //       removeTreatmentId(treatmentId);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   // if data isn't here yet
  //   if (loading) {
  //     return <h2>LOADING...</h2>;
  //   }

  const dummyData = [
    {
      name: "treatment A",
      description: "abcdefg",
      picture:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwdHJlYXRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "treatment B",
      description: "hijklmno",
      picture:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhJTIwdHJlYXRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  // hard-coded for testing
  return (
    <>
      <div>
        <h2 className="title">WISHLIST</h2>
      </div>
      <div className="wishlist-container">
        {/* {userData.savedTreatments.map((treatment) => { */}
        {dummyData.map((treatment) => {
          return (
            <div
              // key={treatment.treatmentId}
              class="wishlist-card"
            >
              <img
                class="treatment-img"
                src={treatment.picture}
                // check with the treatment model
                alt={`photo for ${treatment.name}`}
              />
              <h5 class="treatment-name">
                {/* check with the treatment model */}
                {treatment.name}: {treatment.description}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

// TODO: render in the App.js after checking the varible name with the models, queries, and mutations
export default Wishlist;
