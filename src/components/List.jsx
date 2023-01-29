import React, { useEffect } from "react";
import Delete from "./Delete";

export default function List({
  Todo,
  User,
  textarray,
  handleData,
  setTextarray,
}) {
  useEffect(() => {
    handleData();
  }, [textarray]);
  return (
    <div>
      <div className="list-container">
        {User ? (
          <div className="list">
            {Todo.map((item) => (
              <div className="item-container">
                <div key={item} className="item">
                  {item}
                </div>
                <Delete {...{ item, textarray, setTextarray }} />
              </div>
            ))}
          </div>
        ) : (
          <div>Login to continue</div>
        )}
      </div>
    </div>
  );
}
