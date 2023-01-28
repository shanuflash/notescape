import React from "react";
import Delete from "./Delete";
export default function List({ Todo }) {
  return (
    <div>
      {Todo ? (
        <div className="list-container">
          <div className="list">
            {Todo.map((item) => (
              <div className="item-container">
                <div key={item} className="item">
                  {item}
                </div>
                <Delete />
              </div>
            ))}
          </div>
        </div>
      ) : (
        "No data found"
      )}
    </div>
  );
}
