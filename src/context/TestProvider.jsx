import React, { useState, useContext, createContext } from "react";

const TestContext = createContext();

// export function useTest() {
//   return useContext(TestContext);
// }
export function TestProvider({ props }) {
  //   const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  //   const [Todo, setTodo] = useState([]);
  //   const [Trash, setTrash] = useState([]);
  //   const [text, setText] = useState("");
  return (
    <TestContext.Provider
      value={{
        Email,
        setEmail,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
}
