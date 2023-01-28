import React from "react";
import supabase from "../supabase";
import { useState, useEffect } from "react";
//todo: login
export default function Add({
  handleAdd,
  handleUpdate,
  textarray,
  loading,
  setLoading,
  text,
  setText,
}) {
  useEffect(() => {
    if (loading === true) {
      handleUpdate();
    }
    setLoading(false);
  }, [textarray]);
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
