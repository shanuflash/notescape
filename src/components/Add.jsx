import React from "react";

export default function Add({ handleAdd, text, setText }) {
  return (
    <div>
      <form onSubmit={handleAdd} className="form-container">
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button className="input-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
