import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataProvider";
import { FiLogOut, FiLogIn } from "react-icons/fi";
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
  const { User, Email, handleLogout } = useContext(DataContext);

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
      <Add />
      <List />
    </div>
  );
}
export default App;
