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
      name: "Full Body Massage",
      description:
        "This medium pressure full body massage promises to melt away any hidden tension, applying the finest heated Elemis oils.",
      price: "80",
      pictureURL:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Head, Neck and Shoulders",
      description: "Deep Tissue Full Body Massage",
      price: "95",
      pictureURL:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Feet Massage",
      description:
        "Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
      price: "55",
      pictureURL:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Deep tissue full body",
      description:
        "Combat those aches and pains, with a deep tissue massage that can be tailored to focus on your specific areas of concern, ensuring your tired muscles get the TLC they truly deserve",
      price: "95",
      pictureURL:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: " Pro- Collagen Age defying facial massage",
      description:
        "Combining our most-loved Elemis treatments to create the ultimate two-hour experience. Your treatment will begin with a relaxing full body massage, designed to soothe both your muscles and mind, leading onto our Pro-Collagen facial, known for its clinically proven anti-wrinkle results. Leave Spa-Retreat not only feeling refreshed and rebalanced, but also with a firm, radiant and youthful looking complexion.",
      price: "160",
      pictureURL:
        "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Indian head massage",
      description:
        "Total relaxation. This massage focuses on energy centres of the head, neck, scalp, and face by using key acupressure points to relieve tension and stress. Inclusive of a welcoming foot ritual. Please note this treatment is performed on a therapy chair.",
      price: "80",
      pictureURL:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
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
                src={treatment.pictureURL}
                // check with the treatment model
                alt={`photo for ${treatment.name}`}
              />
              <h5 class="treatment-name">
                {/* check with the treatment model */}
                {treatment.name}
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
