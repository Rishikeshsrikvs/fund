import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../mainroutes/Dashboard";
import Donation from "../mainroutes/Donation";
import User from "../mainroutes/User";
import Request from "../mainroutes/Request";
import Dashupdatedetails from "../mainroutes/dashboardcomponents/Dashupdatedetails";

const Content = () => {
  return (
    <div className="contentmain">
      <Routes>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Donation" element={<Donation />} />
        <Route path="User" element={<User />} />
        <Route path="Request" element={<Request />} />

        <Route path="updatedetails" element={<Dashupdatedetails />} />
      </Routes>
    </div>
  );
};

export default Content;
