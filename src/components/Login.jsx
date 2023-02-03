import "../App.css";
import { useState, useContext } from "react";
import supabase from "../supabase";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "../context/DataProvider";
import AOS from "aos";

export default function Login() {
  AOS.init();
  const { User, setUser, Email, setEmail } = useContext(DataContext);
  const [Password, setPassword] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    if (error) toast.error(error.message);
    else toast.info("Successfully logged in!");
    setUser(data.user.id);
    setPassword(null);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    setPassword(null);
    if (error) toast.error(error.message);
    else {
      toast.info("Successfully signed up!");
      const { error: err } = await supabase
        .from("todo")
        .insert({ items: [], userid: data.user.id });
      toast.error("Unexpected error!");
      setUser(data.user.id);
    }
  };

  return (
    <>
      {!User ? (
        <>
          <div className="head">
            <div style={{}} className="title head-right" data-aos="fade-right">
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
            data-aos="fade-up"
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
