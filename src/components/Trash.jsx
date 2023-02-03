import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { FaTrashRestore, FaTrash } from "react-icons/fa";
import AOS from "aos";
import Prompt from "./Prompt";
import { useState } from "react";

export default function Trash() {
  AOS.init();
  const { Trash, setTrash, setTodo, User } = useContext(DataContext);
  const [isOpen, setisOpen] = useState(false);

  const handleRestore = (item, index) => {
    setTrash(Trash.filter((any, i) => i !== index));
    setTodo((test) => [...test, item]);
  };

  const handleEmptyTrash = () => {
    setTrash([]);
    toast.error("Trash cleared!");
  };
  return (
    <div style={{ background: "black", overflow: "hidden" }}>
      {User ? (
        <>
          <div className="head">
            <div className="title head-right" data-aos="fade-right">
              Trash (Beta)
            </div>
            <div
              data-aos="fade-left"
              className="head-left"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div
                className="emptytrash user"
                // onClick={handleEmptyTrash}
                onClick={() => {
                  setisOpen(!isOpen);
                }}
                style={{
                  fontSize: "2vw",
                  borderRadius: "2rem",
                  // marginRight: "2rem",
                  padding: "1rem 2rem 1rem 2rem",
                }}
              >
                Clear Trash <FaTrash />
              </div>
            </div>
          </div>
          {isOpen && <Prompt {...{ handleEmptyTrash, isOpen, setisOpen }} />}

          <div
            className="list-container list-container-misc"
            data-aos="fade-up"
          >
            <div className="list">
              {Trash.map((item, index) => (
                <div className="item-container">
                  <div
                    // data-aos="fade-up"
                    className="item"
                  >
                    {item}
                  </div>
                  <button
                    // data-aos="fade-up"
                    className="item-button"
                    onClick={() => {
                      handleRestore(item, index);
                      toast.success("Note restored!");
                    }}
                  >
                    <FaTrashRestore />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Navigate replace to="/Login" />
      )}
    </div>
  );
}
