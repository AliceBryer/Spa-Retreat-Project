import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const DEL_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($treatment: [ID]!) {
    addOrder(treatment: $treatment) {
      _id
      purchaseDate
      treatments {
        name
      }
      user
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation updateOrder($id: ID!, $quantity: Int!) {
    updateOrder(_id: $id, quantity: $quantity) {
      _id
      name
      description
      pictureURL
      price
    }
  }
`;

export const DEL_ORDER = gql`
  mutation deleteOrder($id: ID!) {
    deleteOrder(_id: $id) {
      treatments {
        _id
        name
        description
      }
      user
    }
  }
`;

export const ADD_WISHLIST = gql`
  mutation addTreatmentToWishlist($treatment: [ID]!) {
    addTreatmentToWishlist(treatment: $treatment) {
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

export const DEL_WISHLIST = gql`
  mutation removeTreatmentFromWishlist($treatment: [ID]!) {
    removeTreatmentFromWishlist(treatment: $treatment) {
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
