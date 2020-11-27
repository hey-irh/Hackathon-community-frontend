import React from "react";
import Note from "../Note/index";
import Input from "../Input/index";

import LogoutButton from "../LogoutButton/index";
// import Profile from "../Profile/index";

function NoticeBoard({ board, setNote }) {
  console.log(`bord in the Notce board ${board}`);
  return (
    <div>
      <h1>King's Heath Community Noticeboard</h1>
      <LogoutButton />
      <Input setNote={setNote} />
      <div className="pin-board">
        {board.map((note) => {
          return <Note note={note} key={note.note_id} />;
        })}
      </div>
    </div>
  );
}

export default NoticeBoard;

// Input component

// Note components
//Props
