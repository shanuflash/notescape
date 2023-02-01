import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

export default function List({ User, Todo, setTodo, text, setText }) {
  const [Editable, setEditable] = useState(false);
  const [dex, setdex] = useState(-1);
  // const [Edit, setEdit] = useState(second)
  const handleDelete = (index) => {
    setTodo(Todo.filter((any, i) => i !== index));
  };
  const handleEdit = (index) => {
    if (Editable) {
      const nextTodo = Todo.map((c, i) => {
        if (i === index) {
          return text;
        } else {
          return c;
        }
      });
      setTodo(nextTodo);
    }
  };

  return (
    <div>
      <div className="list-container">
        {User ? (
          <div className="list">
            {Todo.map((item, index) => (
              <div className="item-container">
                <div
                  contentEditable={dex === index && Editable}
                  // onClick={(e) => setText(item)}
                  onInput={(e) => {
                    setText((prev) => e.target.innerText);
                  }}
                  key={item}
                  className="item"
                  style={{ border: dex === index ? "1px black solid" : "" }}
                >
                  {item}
                </div>
                <button
                  // disabled={dex === index ? "false" : "true"}
                  className="item-button"
                  style={{
                    borderRadius: "0",
                    borderRight: "1px #c1e6ff solid",
                  }}
                  onClick={(e) => {
                    setText(item);
                    if (Editable) {
                      handleEdit(index);
                      setText("");
                      setdex(-1);
                    } else {
                      setdex(index);
                    }
                    Editable ? setEditable(false) : setEditable(true);
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
