import "../App.css";
import { useContext } from "react";
import { TestContext } from "../context/TestProvider";
import { toast } from "react-toastify";
import { FaTrashRestore } from "react-icons/fa";
import AOS from "aos";

export default function Trash() {
  AOS.init();

  const { Trash, setTrash, setTodo } = useContext(TestContext);
  const handleRestore = (item, index) => {
    setTrash(Trash.filter((any, i) => i !== index));
    setTodo((test) => [...test, item]);
  };
  return (
    <>
      <>
        <div className="head">
          <div className="title head-right" data-aos="fade-right">
            Trash (Beta)
          </div>
        </div>
        <div className="list-container list-container-misc">
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
    </>
  );
}
