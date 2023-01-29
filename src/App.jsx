import "./App.css";
import supabase from "./supabase";
import Add from "./components/Add";
import List from "./components/List";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";

/*
--------------------------TODO----------------------------
- Create table entry for every use signed in.
- Data for other users
- Redirect on Login page
- Login, Sign Up in one page (or link)
- Fix delete
- User profile (change info, passwd reset, change email)
----------------------------------------------------------
*/

function App() {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [textarray, setTextarray] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setUser(null);
    setEmail(null);
    setTodo([]);
  };
  const handleData = async (e) => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .eq("userid", User);
    console.log("handledata:", data);
    console.log(data[0].items);
    setTodo(data[0].items);
    setTextarray(data[0].items);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    setTextarray((test) => [...test, text]);
    setText("");
  };
  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("todo")
      .update([{ items: textarray }])
      .eq("userid", User);
    console.log(error);
  };
  const handleSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    console.log(error);
    setUser(data.session.user.id);
    setEmail(data.session.user.email);
  };
  useEffect(() => {
    handleSession();
    handleData();
  }, [User]);
  useEffect(() => {
    handleSession();
    handleData();
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
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
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              {User ? <FiLogOut onClick={handleLogout} /> : <FiLogIn />}
            </div>
          </div>
        </div>
      </div>
      <Add
        {...{
          handleAdd,
          handleUpdate,
          textarray,
          loading,
          setLoading,
          text,
          setText,
          User,
        }}
      />
      <List {...{ Todo, User }} />
    </div>
  );
}
export default App;
