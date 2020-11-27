import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x1t6jr2y.eu.auth0.com"
      clientId="Bhqtpk45atNrpQEHo4OEeYcIyLgFO6qr"
      redirectUri={"http://localhost:3000/noticeboard"}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-x1t6jr2y.eu.auth0.com"
//     clientId="Bhqtpk45atNrpQEHo4OEeYcIyLgFO6qr"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );
