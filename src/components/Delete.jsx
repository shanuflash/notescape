import React from "react";
import supabase from "../supabase";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Delete({ id }) {
  const [loading, setloading] = useState(false);

  const handleDelete = async () => {
    console.log(id);
    setloading(true);
    const { data, error } = await supabase.from("todos").delete().eq("id", id);
    toast.info("Note deleted!");
    setloading(false);
  };
  return (
    <div>
      <button className="item-button" onClick={handleDelete}>
        <FaTrash />
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}