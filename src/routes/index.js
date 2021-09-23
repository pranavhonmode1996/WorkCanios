import React from "react";
import { Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/comman/Footer";
import NavigationBar from "../components/comman/navigationBar/NavigationBar";
import Account from "../components/main/account";
import MyProfile from "../components/main/account/myProfile";
import Notifications from "../components/main/account/notifications";
import Requests from "../components/main/account/requests";
import YourHired from "../components/main/account/YourHired";
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
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/your-hired-workers" component={YourHired} />
        <Route exact path="/requests" component={Requests} />
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
