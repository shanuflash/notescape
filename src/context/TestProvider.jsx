import React, { useState, useContext, createContext } from "react";

const TestContext = createContext();

// export function useTest() {
//   return useContext(TestContext);
// }
export function TestProvider({ children }) {
  //   const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);
  //   const [Todo, setTodo] = useState([]);
  //   const [Trash, setTrash] = useState([]);
  //   const [text, setText] = useState("");
  return (
    <TestContext.Provider
      value={{
        Email: Email,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}
