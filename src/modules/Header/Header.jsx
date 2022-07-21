import { NavLink } from "react-router-dom";

import s from "./header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
