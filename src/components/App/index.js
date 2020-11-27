import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../../components/Homepage/index";
import NoticeBoard from "../../components/NoticeBoard/index";

function App() {
  const [board, setBoard] = useState([]);
  const [note, setNote] = useState({
    first_name: "",
    last_name: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    async function getAllNotes() {
      const res = await fetch("http://localhost:5000/noticeboard");
      const object = await res.json();
      const data = object.payload.rows;
      setBoard(data);
      console.log(board);
    }

    getAllNotes();
  }, []);

  useEffect(() => {
    async function postNotice(note) {
      const res = await fetch("http://localhost:5000/noticeboard", {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(note),
      });
      const data = await res.json();
      console.log(data);
    }
    if (note.content !== "") {
      postNotice(note);
    }
  }, [note]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/noticeboard">
            <NoticeBoard board={board} setNote={setNote} />
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
