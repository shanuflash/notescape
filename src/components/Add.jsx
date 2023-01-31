import React from "react";

export default function Add({ handleAdd, text, setText }) {
  return (
    <div className="Add">
      <form onSubmit={handleAdd} className="form-container">
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          autocomplete="off"
          placeholder="Type here"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button className="input-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
