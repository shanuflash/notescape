import { FaTrash, FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaSmileWink } from "react-icons/fa";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function List({}) {
  const { User, Todo, setTodo, handleData, setTrash } = useContext(DataContext);
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
    <>
      {User ? (
        <div>
          <div className="list-container" data-aos="fade-up">
            {Todo.length !== 0 ? (
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
                      style={{
                        border:
                          dex === index ? "2px var(--highlight) solid" : "",
                      }}
                    >
                      {item}
                    </div>
                    <button
                      // data-aos="fade-up"
                      className="item-button"
                      style={{
                        borderRadius: "0",
                        borderRight: "1px #001018 solid",
                        borderLeft: "1px #001018 solid",
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
              <div className="empty-trash">
                <FaSmileWink
                  style={{
                    fontSize: "10vw",
                  }}
                />
                Add notes to manage them!
              </div>
            )}
          </div>
        </div>
      ) : (
        <Navigate replace to="/Login" />
      )}
    </>
  );
}
