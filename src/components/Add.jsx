import React from "react";
import supabase from "../supabase";
import { useState, useEffect } from "react";
//todo: login
export default function Add({}) {
  const [text, setText] = useState("");
  const [textarray, setTextarray] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .eq("userid", "d191a72b-de28-4bad-90d8-9dc2eb0fd0a4");
    setTextarray(data[0].items);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTextarray((test) => [...test, text]);
    setText("");
  };

  useEffect(() => {
    console.log(textarray);
    if (loading === true) {
      const test = async () => {
        const { data, error } = await supabase
          .from("todo")
          .update([{ items: textarray }])
          .eq("id", 1);
        console.log(error);
      };
      test();
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
