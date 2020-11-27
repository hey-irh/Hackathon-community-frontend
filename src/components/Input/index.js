import React, { useState } from "react";

function Input({ setNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit() {
    setNote({
      first_name: firstName,
      last_name: lastName,
      title: title,
      content: content,
    });
  }

  return (
    <form className="noticeForm">
      <input
        placeholder="Notice title..."
        id="noteTitle"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <textarea
        placeholder="Write your notice here..."
        id="noteContent"
        name="noteContent"
        rows="4"
        cols="50"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <br />
      <input
        placeholder="First Name"
        id="noteFirstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder="Last Name"
        id="noteLastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br />
      <button id="submitButton" onClick={() => handleSubmit()}>
        SUBMIT
      </button>
    </form>
  );
}

export default Input;
