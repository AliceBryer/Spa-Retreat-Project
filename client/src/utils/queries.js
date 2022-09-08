import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      _id
      name
      email
      profilePic
    }
  }
`;

export const QUERY_TREATMENTS = gql`
  query getTreatments {
    treatments {
      _id
      name
      price
      pictureURL
      description
    }
  }
`;

export const QUERY_SINGLE_TREATMENT = gql`
  query getSingleTreatment($treatmentId: ID!) {
    treatment(treatmentId: $treatmentId) {
      _id
      name
      price
      pictureURL
      description
      reviews {
        _id
        title
        name
        description
      }
    }
  }
`;

export const QUERY_FACILITIES = gql`
  query getFacilities {
    facilities {
      _id
      name
      pictureURL
    }
  }
`;

// export const QUERY_ORDERS = gql`
//   query getOrders {
//     orders {
// // to be done
//       }
//     }
//   }
// `;
