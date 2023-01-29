import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import supabase from "../supabase";
import { Navigate } from "react-router-dom";
export default function Login() {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const handleSignin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    setUser(data);
    console.log(error);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    console.log(data);
    if (!error) {
      const { error: err } = await supabase
        .from("todo")
        .insert({ items: [], userid: data.user.id });
      console.log(err);
      setUser(data.user.id);
    }
  };

  return (
    <>
      {!User ? (
        <>
          <div className="head">
            <div style={{}} className="title head-right">
              Login / Sign Up
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
            className="list-container list-container-misc"
          >
            <form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              className="signin"
            >
              <input
                className="input input-misc"
                type="email"
                value={Email}
                onChange={(e) => setEmail((prev) => e.target.value)}
                placeholder="Email"
              />
              <input
                className="input input-misc"
                type="password"
                value={Password}
                onChange={(e) => setPassword((prev) => e.target.value)}
                placeholder="Password"
              />
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={handleSignin}
                  className="input-button-misc"
                  type="submit"
                >
                  Login
                </button>
                <button
                  onClick={handleSignup}
                  className="input-button-misc"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
}
