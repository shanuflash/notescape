import React from "react";
import supabase from "../supabase";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Delete({ item, textarray, setTextarray }) {
  const handleDelete = (item) => {
    // const { data, error } = await supabase.from("todos").delete().eq("id", id);
    const test = textarray.filter((any) => any !== item);
    console.log(test);
    setTextarray(test);
    console.log(textarray);
    // console.log(textarray.filter((a) => a !== item));
    // console.log(textarray);
    // toast.info("Note deleted!");
  };
  return (
    <div>
      <button className="item-button" onClick={() => handleDelete(item)}>
        <FaTrash />
      </button>
    </div>
  );
}
