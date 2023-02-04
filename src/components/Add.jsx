import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export default function Add() {
  const { handleAdd, text, setText, Theme } = useContext(DataContext);
  return (
    <div className="Add" data-aos="fade-down">
      <form className="form-container" style={{ padding: "none" }}>
        <input
          className={`input ${Theme}`}
          value={text}
          type="text"
          name="todoinput"
          autoComplete="off"
          placeholder="Type here"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button
          type="submit"
          className={`input-button ${Theme}4`}
          onClick={handleAdd}
        >
          +
        </button>
        <Link style={{ textDecoration: "none", marginLeft: "2rem" }} to="trash">
          <button
            className={`trash ${Theme}4`}
            style={{ border: "2px solid var(--highlight)" }}
          >
            <div>Trash</div>
            <FaTrashAlt />
          </button>
        </Link>
      </form>
    </div>
  );
}
