import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "./context/TestProvider";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

/*
--------------------------TODO----------------------------
- Trash function
- Responsive (mobile)
- User profile (change info, passwd reset, change email)
----------------------------------------------------------
*/

function App() {
  AOS.init();
  const { User, Email, handleLogout } = useContext(TestContext);

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
