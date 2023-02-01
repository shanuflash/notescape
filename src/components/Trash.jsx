import { FaTrash, FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import { useState } from "react";
import AOS from "aos";
import { useLocation } from "react-router-dom";
// import "aos/dist/aos.css";

export default function Trash(Trash, setTrash) {
  AOS.init();
  return (
    <div>
      <div className="head">
        <div style={{}} className="title head-right">
          Trash
        </div>
      </div>
      <div className="list-container">
        <div className="list">
          {/* {Trash.map((item, index) => (
            <div className="item-container">
              <div
                contentEditable={dex === index && Editable}
                onInput={(e) => {
                  setEdit((prev) => e.target.innerText);
                }}
                // data-aos="fade-up"
                key={item}
                className="item"
              >
                {item}
              </div>
              <button
                // data-aos="fade-up"
                className="item-button"
              >
                <FaTrash />
              </button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
