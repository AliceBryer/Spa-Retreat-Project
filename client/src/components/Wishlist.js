import React from "react";

import Auth from "../utils/auth";
import { removeTreatmentId } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/client";
// name of the functions to be edited after getting the code from backend team
import { GET_USER } from "../utils/queries";
import { REMOVE_WISHLIST } from "../utils/mutations";

const Wishlist = () => {
  const { loading, data } = useQuery(GET_USER);
  const [removeTreatment] = useMutation(REMOVE_WISHLIST);

  const userData = data?.user || {};

  const handleDeleteTreatment = async (treatmentId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      await removeTreatment({
        variables: { treatmentId },
      });
      removeTreatmentId(treatmentId);
    } catch (err) {
      console.error(err);
    }
  };
};
