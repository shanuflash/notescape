import React from "react";
import supabase from "../supabase";
import Delete from "./Delete";
import { useState, useEffect } from "react";
export default function List() {
  const [todo, settodo] = useState([]);
  const [error, seterror] = useState();
  async function fetchData() {
    let { data: data, errors } = await supabase.from("todo").select("*");
    console.log(data);
    settodo(data);
    seterror(errors);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="list-container">
      {todo ? (
        <div>
          {todo.map((todo) => (
            <div className="list">
              {todo.items.map((item) => (
                <div className="item-container">
                  <div className="item">{item}</div>
                  <Delete id={todo.id} />
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
