import React from "react";
import "../App.css";
import { useState } from "react";
import supabase from "../supabase";
import { Navigate } from "react-router-dom";
export default function Signup() {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    setUser(data);
    console.log(error);
  };

  return (
    <>
      {/* {Au ? ( */}
      <>
        <div className="head">
          <div style={{ paddingBottom: "1rem" }} className="title">
            Login
          </div>
        </div>
        <div className="list-container">
          <form onSubmit={handleSignup}>
            <input
              className="input"
              type="email"
              value={Email}
              onChange={(e) => setEmail((prev) => e.target.value)}
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              value={Password}
              onChange={(e) => setPassword((prev) => e.target.value)}
              placeholder="Password"
            />
            <button className="input-button" type="submit">
              +
            </button>
          </form>
        </div>
      </>
      {/* ) : (
        <Navigate replace to="/" />
      )} */}
    </>
  );
}
