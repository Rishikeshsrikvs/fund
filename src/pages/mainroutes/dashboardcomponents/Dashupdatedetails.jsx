import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import "./Dashupdatedetails.css";
const Dashupdatedetails = () => {
  return (
    <div className="udparent">
      <div className="udtop">
        <button>BACK</button>
        <h1>Update Details</h1>
        <div className="udtopright">
          <span></span>
          <h6>health fund</h6>
        </div>
      </div>
      <div className="udcardcon">
        <div className="udcard">
          <div className="duc1con">
            <div className="duc1profile">
              <img src="" alt="" />
              <div className="ducsub">
                <h6>USERNAME</h6>
                <p>user</p>
              </div>
            </div>
            <div className="udright">Urgent Requirement</div>
          </div>
          <div className="duc2con">
            <p>Title / Patient Name</p>
            <h1>Help For Surgery</h1>
          </div>
          <div className="duc3con">
            <div className="duc3left">
              <p>Contact Person</p>
              <h1>Jack</h1>
            </div>
            <div className="duc3left">
              <p>Contact Person Number</p>
              <h1>1234567890</h1>
            </div>
          </div>
          <div className="duc4con">
            <div className="duc4right">
              <p>Required Amount</p>
              <h1>7,00,000</h1>
            </div>
          </div>
        </div>
        <div className="udimagemain">
          <h1>New Images</h1>
          <div className="udimagecon"></div>
          <button>
            <IoDownloadOutline className="udimgbtn" />
          </button>
        </div>
      </div>
      <div className="desmain">
        <h1>New Description</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, pariatur
          dolore enim sed necessitatibus vero quibusdam beatae, voluptate,
          dolores rem dolorem aliquid? Dicta nihil sit corporis ut quia
          explicabo! Molestiae aliquid odit numquam unde dolorem ea nostrum
          doloremque nihil, dicta veniam facilis a quaerat pariatur eum dolore
          blanditiis quae. Exercitationem voluptatem dolores, qui voluptate,
          pariatur laudantium amet ullam eveniet, mollitia ipsum error itaque
          perspiciatis ex quae rem repudiandae libero doloremque veritatis quam.
          Ipsam qui, at expedita a deleniti eligendi, voluptatum omnis ullam
          eveniet non corporis deserunt modi ea tempore. Veritatis facilis
          repellat incidunt quaerat hic numquam id accusamus totam quam?
        </p>
      </div>
      <div className="udbottomcon">
        <button className="udapprove">Approve</button>
        <button className="uddownload">Download</button>
      </div>
    </div>
  );
};

export default Dashupdatedetails;
