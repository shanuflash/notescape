import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export default function Add() {
  const { handleAdd, text, setText } = useContext(DataContext);
  return (
    <div className="Add" data-aos="fade-down">
      <form className="form-container">
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          autoComplete="off"
          placeholder="Type here"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button type="submit" className="input-button" onClick={handleAdd}>
          +
        </button>
        <Link style={{ textDecoration: "none", marginLeft: "2rem" }} to="trash">
          <button className="trash">
            <div>Trash</div>
            <FaTrashAlt />
          </button>
        </Link>
      </form>
    </div>
  );
}
