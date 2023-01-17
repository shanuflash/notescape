import React from "react";
import { useRealtime } from "react-supabase";
import Delete from "./Delete";
export default function List() {
  const [result, reexecute] = useRealtime("todos");
  const { data: tasks, error, fetching } = result;
  // if (fetching) {
  //   return "Loading";
  // }
  // if (!tasks || !tasks.length) {
  //   return "test";
  // }
  return (
    <div className="list-container">
      {fetching ? (
        "Loading..."
      ) : tasks ? (
        <div className="list">
          {tasks.map((todo) => (
            <div className="item-container">
              <div className="item">{todo.text}</div>
              <Delete id={todo.id} />
            </div>
          ))}
        </div>
      ) : (
        "No data found"
      )}
    </div>
  );
}
