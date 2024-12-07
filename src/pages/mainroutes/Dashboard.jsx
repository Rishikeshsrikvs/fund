import React from "react";
import "./Dashboard.css";
import Dashboardupdate from "./dashboardcomponents/Dashboardupdate";

const Dashboard = () => {
  return (
    <div className="dashparent">
      <div className="dashnotconmain">
        <div className="dashnot">
          <h1>37</h1>
          <div className="dashnottext">
            <p>total Fundraise Request</p>
            <span className="dashnotsapn1">31%</span>
          </div>
        </div>
        <div className="dashnot">
          <h1>9</h1>
          <div className="dashnottext">
            <p>total Donation</p>
            <span className="dashnotsapn2">10%</span>
          </div>
        </div>
      </div>
      <div className="dashupparent">
        <div className="dashuptitlecon">
          <h1>post an update</h1>
          <span></span>
        </div>
        <Dashboardupdate />
      </div>
    </div>
  );
};

export default Dashboard;
