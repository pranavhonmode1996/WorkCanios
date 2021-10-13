import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/comman/Footer";
import NavigationBar from "../components/comman/navigationBar/NavigationBar";
import PrimaryActions from "../components/comman/primaryActions";
import Account from "../components/main/account";
import MyProfile from "../components/main/account/myProfile";
import Notifications from "../components/main/account/notifications";
import Requests from "../components/main/account/requests";
import YourHired from "../components/main/account/YourHired";
import Profile from "../components/main/adminSection/profile";
import Settings from "../components/main/adminSection/settings";
import Home from "../components/main/Home";
import WDP from "../components/main/wdp";
import WLP from "../components/main/wlp";

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
        <Route exact path="/wlp" component={WLP} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/your-hired-workers" component={YourHired} />
        <Route exact path="/requests" component={Requests} />
        <Route exact path="/primary-actions" component={PrimaryActions} />
        <Route exact path="/admin-profile" component={Profile} />
        <Route exact path="/admin-settings" component={Settings} />
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
