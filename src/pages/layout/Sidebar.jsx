import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="sidebarcon">
      <ul className="sidelist">
        <li className="sidelink">
          <Link to="/admin/Dashboard">
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidelink">
          <Link to="/admin/Request">
            <IoGitPullRequestOutline className="linkicon" />

            <span>Fundraise requests</span>
          </Link>
        </li>
        <li className="sidelink">
          <Link to="/admin/Donation">
            <BiDonateBlood className="linkicon" />
            <span>Donations</span>
          </Link>
        </li>
        <li className="sidelink">
          <Link to="/admin/User">
            <GrDocumentUser />
            <span>User details</span>
          </Link>
        </li>
      </ul>
      <div className="sideprofilecon">
        <div className="spimgcon">
          <img src="" alt="" />
        </div>
        <div className="sptext">
          <h1>Admin</h1>
          <p>Username</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
