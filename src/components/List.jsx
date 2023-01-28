import React from "react";
import supabase from "../supabase";
import Delete from "./Delete";
import { useState, useEffect } from "react";
export default function List() {
  const [todo, settodo] = useState([]);
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .eq("userid", "d191a72b-de28-4bad-90d8-9dc2eb0fd0a4");
    settodo(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {todo ? (
        <div className="list-container">
          {todo.map((todo) => (
            <div className="list">
              {todo.items.map((item) => (
                <div className="item-container">
                  <div className="item">{item}</div>
                  {/* <Delete /> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        "No data found"
      )}
    </div>
  );
}
