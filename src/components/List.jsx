import React, { useEffect } from "react";
// import Delete from "./Delete";
import { FaTrash } from "react-icons/fa";

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
  const handleDelete = (item) => {
    console.log(textarray);
    setTextarray(textarray.filter((any) => any !== item));
    console.log(textarray);
  };
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
                <button
                  className="item-button"
                  onClick={() => handleDelete(item)}
                >
                  <FaTrash />
                </button>
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
