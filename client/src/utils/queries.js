import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        user
        treatments {
          _id
          name
          description
          pictureURL
          price
        }
      }
    }
  }
`;

export const QUERY_TREATMENTS = gql`
  query getTreatments {
    treatments {
      _id
      name
      description
      pictureURL
      price
    }
  }
`;

export const QUERY_FACILITIES = gql`
  query getFacilities {
    facilities {
      _id
      name
      description
      pictureURL
    }
  }
`;

export const QUERY_USER = gql`
  query getUser {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        user
        treatments {
          _id
          name
          description
          pictureURL
          price
        }
      }
    }
  }
`;

export const QUERY_ORDER = gql`
  query getOrder($id: ID!) {
    order(_id: $id) {
      _id
      purchaseDate
      treatments {
        _id
        name
        description
        pictureURL
        price
      }
      user
    }
  }
`;

export const QUERY_WISHLIST = gql`
  query getWishlist($id: ID!) {
    wishlist {
      _id
      treatments {
        _id
        name
        description
        pictureURL
        price
      }
      user
    }
  }
`;
