import React from "react";
import { Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/comman/Footer";
import NavigationBar from "../components/comman/navigationBar/NavigationBar";
import Account from "../components/main/account";
import Home from "../components/main/Home";
import WDP from "../components/main/wdp";

const AppRoutes = () => {
  return (
    <>
      <NavigationBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/wdp" component={WDP} />
        <Route exact path="/account" component={Account} />
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
