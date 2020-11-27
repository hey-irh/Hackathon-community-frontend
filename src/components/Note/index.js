import React from "react";

function Note(note) {
  return (
    <div className="note-container">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-content">{note.content}</p>
      <p className="person-name">
        {note.first_name} {note.last_name}
      </p>
      <p className="date">{note.date}</p>
    </div>
  );
}

export default Note;
