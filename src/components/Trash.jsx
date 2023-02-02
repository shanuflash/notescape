import "../App.css";
import { useContext } from "react";
import { TestContext } from "../context/TestProvider";

export default function Trash() {
  const { Trash, setTrash, setText } = useContext(TestContext);
  const handleTrash = () => {
    e.preventDefault();
    toast.success("Note added!");
  };
  const hadnleRestore = () => {
    e.preventDefault();
  };
  return (
    <>
      <>
        <div className="head">
          <div style={{}} className="title head-right">
            Trash
          </div>
        </div>
        <div className="list-container list-container-misc">
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
                  hadnleRestore(item, index);
                  toast.error("Note deleted!");
                }}
              >
                {/* <FaTrash /> */}
              </button>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
