import React, { useEffect } from "react";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
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
import reducer from "./utils/reducer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Facilities from "./components/FacilitiesPage";
import Footer from "./components/Footer";
import TreatmentList from "./components/TreatmentList";
import Wishlist from "./components/Wishlist";
import AboutUs from "./components/AboutUs";
import MyAccount from "./components/MyAccount";
import Cart from "./components/Cart";

const httpLink = createHttpLink({
  // uri: `${window.location.origin}/graphql`,
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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

function App() {
  useEffect(() => {
    document.title = "Spa Retreat";
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Wrapper>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
