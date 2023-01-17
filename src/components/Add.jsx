import React from "react";
import supabase from "../supabase";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function Add({}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.from("todos").insert([{ text }]);
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleAdd} className="form-container">
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="input-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
