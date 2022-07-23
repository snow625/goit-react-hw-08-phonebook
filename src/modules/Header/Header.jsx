import { NavLink } from "react-router-dom";
import useIsLogin from "../../shared/hooks/useisLogin";
import UserMenu from "./UserMenu";
import LoginRegister from "./LoginRegister";

import s from "./header.module.css";
const Header = () => {
  const isLogin = useIsLogin();

  const styleForNavLinks = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {isLogin ? (
            <NavLink to={"/contacts"} className={styleForNavLinks}>
              Contacts
            </NavLink>
          ) : (
            <NavLink to={"/"} className={styleForNavLinks}>
              Home
            </NavLink>
          )}
          {isLogin ? <UserMenu /> : <LoginRegister />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
