import React from "react";
import { useEffect } from "react";

export default function Add({
  handleAdd,
  handleUpdate,
  Todo,
  loading,
  setLoading,
  text,
  setText,
}) {
  useEffect(() => {
    if (loading === true) {
      handleUpdate();
    }
    setLoading(false);
  }, [Todo]);

  return (
    <div>
      <form onSubmit={handleAdd} className="form-container">
        <input
          className="input"
          value={text}
          type="text"
          name="todoinput"
          onChange={(e) => setText((prev) => e.target.value)}
        />
        <button className="input-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
