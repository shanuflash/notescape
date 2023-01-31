import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

export default function List({ User, Todo, setTodo, text, setText }) {
  const [Editable, setEditable] = useState(false);
  const [dex, setdex] = useState(-1);
  const handleDelete = (index) => {
    setTodo(Todo.filter((any, i) => i !== index));
  };
  const handleEdit = () => {
    // console.log(text);
  };

  return (
    <div>
      <div className="list-container">
        {User ? (
          <div className="list">
            {Todo.map((item, index) => (
              <div className="item-container">
                {/* <input className="input" value={item}></input> */}
                <div
                  contentEditable={dex === index && Editable}
                  onInput={(e) => {
                    setText((prev) => e.target.value);
                    handleEdit();
                  }}
                  key={item}
                  className="item"
                >
                  {item}
                </div>
                <button
                  className="item-button"
                  style={{
                    borderRadius: "0",
                    borderRight: "1px #c1e6ff solid",
                  }}
                  onClick={(e) => {
                    Editable ? setEditable(false) : setEditable(true);
                    setdex(index);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  className="item-button"
                  onClick={() => {
                    handleDelete(index);
                    toast.error("Note deleted!");
                  }}
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
