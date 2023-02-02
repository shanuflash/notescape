import React, { useState, createContext, useEffect } from "react";
import supabase from "../supabase";
import { toast } from "react-toastify";

export const TestContext = createContext();

// export function useTest() {
//   return useContext(TestContext);
// }
export function TestProvider({ children }) {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Todo, setTodo] = useState([]);
  const [Trash, setTrash] = useState([]);
  const [text, setText] = useState("");

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
    <TestContext.Provider
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
        handleLogout,
        handleAdd,
        handleData,
        handleSession,
        handleUpdate,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}
