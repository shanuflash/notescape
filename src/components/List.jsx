import { FaTrash, FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import { DataContext } from "../context/DataProvider";
import { useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function List({}) {
  const { User, Todo, setTodo, handleData, Trash, setTrash } =
    useContext(DataContext);
  AOS.init();
  const [Editable, setEditable] = useState(false);
  const [dex, setdex] = useState(-1);
  const [Edit, setEdit] = useState("");
  const handleDelete = (item, index) => {
    setTrash((test) => [...test, item]);
    setTodo(Todo.filter((any, i) => i !== index));
  };
  const handleEdit = (index) => {
    if (Editable) {
      const nextTodo = Todo.map((c, i) => {
        if (i === index) {
          return Edit;
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
                  onInput={(e) => {
                    setEdit((prev) => e.target.innerText);
                  }}
                  // data-aos="fade-up"
                  key={index}
                  className="item"
                  style={{ border: dex === index ? "1px black solid" : "" }}
                >
                  {item}
                </div>
                <button
                  // data-aos="fade-up"
                  className="item-button"
                  style={{
                    borderRadius: "0",
                    borderRight: "1px #c1e6ff solid",
                  }}
                  onClick={(e) => {
                    if (Edit === "" && Editable) {
                      toast.error("Note cannot be empty!");
                      Edit.forceUpdate();
                      handleData();
                    }
                    if (Edit !== "" || Editable === false) setEdit(item);
                    if (Edit !== "" && Editable) {
                      if (index === dex) {
                        handleEdit(index);
                      } else if (index !== dex) {
                        handleEdit(dex);
                      }
                      setEdit("");
                      setEditable(true);
                    }
                    dex === -1 ? setdex(index) : setdex(-1);
                    Editable ? setEditable(false) : setEditable(true);
                  }}
                >
                  {Editable ? (
                    index === dex ? (
                      <TiTick />
                    ) : (
                      <FaEdit />
                    )
                  ) : (
                    <FaEdit />
                  )}
                </button>
                <button
                  // data-aos="fade-up"
                  className="item-button"
                  onClick={() => {
                    handleDelete(item, index);
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
