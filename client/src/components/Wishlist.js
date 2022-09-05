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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // hard-coded for testing
  return (
    <>
      <div>
        <h2 className="wishlist-title">WISHLIST</h2>
      </div>
      <div className="wishlist-container">
        {/* {userData.savedTreatments.map((treatment) => { */}
        {/* return ( */}
        <div
          // key={treatment.treatmentId}
          class="wishlist-card"
        >
          <img
            class="treatment-img"
            src=""
            // check with the treatment model
            // {treatment.pic_url}
            // alt={`photo for ${treatment.name}`}
          />
          <h5 class="treatment-name">
            treatment name
            {/* check with the treatment model */}
            {/* {treatment.name} */}
          </h5>
        </div>
        );
        {/* })} */}
      </div>
    </>
  );
};

// TODO: render in the App.js after checking the varible name with the models, queries, and mutations
export default Wishlist;
