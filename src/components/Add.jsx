import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Add({ handleAdd, text, setText }) {
  const handleTrash = (e) => {
    // e.preventDefault();
  };
  return (
    <div className="Add" data-aos="fade-down">
      <form className="form-container">
        <Link to="trash">
          <button className="trash" onClick={handleTrash}>
            <div>Trash</div>
            <FaTrashAlt />
          </button>
        </Link>
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          autocomplete="off"
          placeholder="Type here"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button className="input-button" onClick={handleAdd}>
          +
        </button>
      </form>
    </div>
  );
}
