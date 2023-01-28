import React from "react";
import "../App.css";
import { useState } from "react";
import supabase from "../supabase";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <div className="head">
        <div className="title">Login</div>
      </div>
      <div className="list-container">
        <form onSubmit={handleSubmit}>
          {/* <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
