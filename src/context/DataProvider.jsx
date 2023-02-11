import React, { useState, createContext, useEffect } from "react";
import supabase from "../supabase";
import { toast } from "react-toastify";

export const DataContext = createContext();
// export function useTest() {
//   return useContext(DataContext);
// }
export function DataProvider({ children }) {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Todo, setTodo] = useState([]);
  const [Trash, setTrash] = useState([]);
  const [text, setText] = useState("");
  const [Theme, setTheme] = useState("Dark");

  const toggleTheme = (e) => {
    e.preventDefault();
    if (Theme === "Dark") {
      setTheme((prev) => "Light");
    } else {
      setTheme((prev) => "Dark");
    }
  };

  const handleSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    if (error) toast.error(error.message);
    setUser(data.session.user.id);
    setEmail(data.session.user.email);
    console.log("session");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
    else toast.info("Successfully logged out!");
    setUser(null);
    setEmail(null);
    setTodo([]);
    setTrash([]);
    console.log("logout");
  };

  const handleData = async (e) => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .eq("userid", User);
    setTodo(data[0].items);
    setTrash(data[0].trash);
    if (error) toast.error(error.message);
    console.log("data");
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
    console.log("add");
  };

  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("todo")
      .update([{ items: Todo }])
      .eq("userid", User);
    if (error) toast.error(error.message);
    console.log("update");
  };

  const handleTrashUpdate = async () => {
    const { data, error } = await supabase
      .from("todo")
      .update([{ trash: Trash }])
      .eq("userid", User);
    if (error) toast.error(error.message);
    console.log("trashupdate");
  };

  useEffect(() => {
    handleSession();
  }, []);

  useEffect(() => {
    handleData();
  }, [User]);

  useEffect(() => {
    handleUpdate();
  }, [Todo]);

  useEffect(() => {
    handleTrashUpdate();
  }, [Trash]);

  return (
    <DataContext.Provider
      value={{
        User,
        setUser,
        Email,
        setEmail,
        Todo,
        setTodo,
        Trash,
        setTrash,
        text,
        setText,
        Theme,
        setTheme,
        toggleTheme,
        handleLogout,
        handleAdd,
        handleData,
        handleSession,
        handleUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
