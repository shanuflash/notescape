import "./App.css";
import supabase from "./supabase";
import Add from "./components/Add";
import List from "./components/List";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { TestProvider } from "./context/TestProvider";

/*
--------------------------TODO----------------------------
- Trash function
- Responsive (mobile)
- User profile (change info, passwd reset, change email)
----------------------------------------------------------
*/

function App() {
  AOS.init();
  const [User, setUser] = useState(null);
  // const [Email, setEmail] = useState(null);
  const [Todo, setTodo] = useState([]);
  const [Trash, setTrash] = useState([]);
  const [text, setText] = useState("");
  const { Email, setEmail } = useContext(TestProvider);

  const handleLogout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
    else toast.info("Successfully logged out!");
    setUser(null);
    setEmail(null);
    setTodo([]);
  };

  const handleData = async (e) => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .eq("userid", User);
    setTodo(data[0].items);
    if (error) toast.error(error.message);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (text !== "") {
      setTodo((test) => [...test, text]);
      toast.success("Note added!");
      setText("");
    } else {
      toast.error("Please enter note to add!");
    }
  };

  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("todo")
      .update([{ items: Todo }])
      .eq("userid", User);
    if (error) toast.error(error.message);
  };

  const handleSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    if (error) toast.error(error.message);
    setUser(data.session.user.id);
    setEmail(data.session.user.email);
  };

  useEffect(() => {
    handleUpdate();
  }, [Todo]);

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
        <div className="title" data-aos="fade-right">
          Notes - (React & Supabase)
        </div>
        <div
          data-aos="fade-left"
          className="head-left"
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
        >
          <div className="user">
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
      <Add {...{ handleAdd, text, setText }} />
      <List {...{ User, Todo, setTodo, handleData, Trash, setTrash }} />
    </div>
  );
}
export default App;
