import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../../components/Homepage/index";
import NoticeBoard from "../../components/NoticeBoard/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/noticeboard">
            <NoticeBoard />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
