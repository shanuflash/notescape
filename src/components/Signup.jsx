import React from "react";
import "../App.css";
import { useState } from "react";
import supabase from "../supabase";
import { Navigate } from "react-router-dom";
export default function Signup() {
  const [user, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  // const [Au, setAu] = useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    console.log(data);
    console.log(error);
    // if (data.user.id) {
    //   setAu(true);
    // }
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
