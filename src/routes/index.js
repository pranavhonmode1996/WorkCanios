import React from "react";
import { Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/comman/Footer";
import NavigationBar from "../components/comman/navigationBar/NavigationBar";
import Home from "../components/main/Home";

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
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
