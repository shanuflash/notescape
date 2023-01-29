import React, { useEffect } from "react";
// import Delete from "./Delete";
import { FaTrash } from "react-icons/fa";

export default function List({
  User,
  textarray,
  setTextarray,
  handleData,
  handleUpdate,
  Todo,
}) {
  useEffect(() => {
    handleUpdate();
    // handleData();
  }, [textarray]);

  const handleDelete = (item) => {
    setTextarray(textarray.filter((any) => any !== item));
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
