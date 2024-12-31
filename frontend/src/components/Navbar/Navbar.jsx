import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";

export const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  console.log("isAdmin", isAdmin);

  return (
    <>
      <header>
        <div className="containerr">
          <div className="logo-brand">
            <NavLink to="/">Bablu Kumar</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout"> Logout </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}

              {isAdmin === true && (
                <li>
                  <NavLink to="/admin"> Admin </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
