import { Link } from "react-router-dom";
import "./App.css";
import supabase from "./supabase";
import Add from "./components/Add";
import List from "./components/List";
import { useState, useEffect } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";


function App() {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const handleLogout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setUser(null);
    setEmail(null);
  };

  useEffect(() => {
    const handleSession = async (e) => {
      const { data, error } = await supabase.auth.getSession();
      console.log(error);
      setUser(data.session.user.id);
      setEmail(data.session.user.email);
    };

    handleSession();
  }, []);

  return (
    <div className="App">

      <div className="head">
        <div className="title head-right">Todo List</div>
        <div
          className="head-left"
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
        >
          <div
            className="user"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            {!User ? (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Login"
              >
                <div>Login</div>
              </Link>
            ) : (
              <div>{Email}</div>
            )}
            <div
              style={{
                display: "flex",
                background: "white",
                padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              {User ? (
                <FiLogOut onClick={handleLogout} />
              ) : (
                <Link to="/Login">
                  <FiLogIn />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <Add />

      <List />
    </div>
  );
}
export default App;
