import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataProvider";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import AOS from "aos";

/*
--------------------------TODO----------------------------
- Trash permadelete, Empty trash
- Theme
- Responsive (mobile)
- User profile (passwd reset, change email, 2fa)
----------------------------------------------------------
*/

function App() {
  AOS.init();
  const { User, Email, handleLogout, Theme, toggleTheme } =
    useContext(DataContext);
  return (
    <div className={`App ${Theme}2`}>
      <div className="head">
        <div
          className={`title ${Theme}`}
          // data-aos="fade-right"
        >
          Notes - (React & Supabase)
        </div>
        <div
          data-aos="fade-left"
          className="head-left"
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
        >
          <div className={`user ${Theme}`}>
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
                background: "#00334d",
                padding: "1rem",
                borderRadius: "2rem",
              }}
              className={`${Theme}2`}
            >
              {User ? <FiLogOut onClick={handleLogout} /> : <FiLogIn />}
            </div>
            {/* <div>
              <MdLightMode onClick={toggleTheme} />
            </div> */}
          </div>
        </div>
      </div>
      <Add />
      <List />
    </div>
  );
}
export default App;
