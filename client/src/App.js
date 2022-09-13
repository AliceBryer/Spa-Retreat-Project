import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Wrapper from "./components/Wrapper";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./components/Reducer";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Facilities from "./components/FacilitiesPage";
import Footer from "./components/Footer";
import TreatmentList from "./components/TreatmentList";
import Wishlist from "./components/Wishlist";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import MyAccount from "./components/MyAccount";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const store = createStore(Redcuer);

function App() {
  useEffect(() => {
    document.title = "Spa Retreat";
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/treatment" element={<TreatmentList />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/about" element={<About />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/myaccount" element={<MyAccount />} />
            </Routes>
          </Wrapper>
          <Footer />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
