import React from "react";
import LoginButton from "../LoginButton/index";
import "./homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">King's Heath Community Noticeboard</h1>
      <img
        src={
          "https://images.assetsdelivery.com/compings_v2/dniprodd/dniprodd1807/dniprodd180700257.jpg"
        }
        style={{
          width: 500,
          margin: "30px",
          marginBottom: "60px",
          borderRadius: "20px",
        }}
      ></img>
      <LoginButton />
    </div>
  );
}

export default Homepage;
