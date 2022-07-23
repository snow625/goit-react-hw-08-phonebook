import { NavLink } from "react-router-dom";
import s from "./loginRegister.module.css";

const LoginRegister = () => {
  const styleForNavLinks = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };
  return (
    <div className={s.loginWrapper}>
      <NavLink to={"/login"} className={styleForNavLinks}>
        Login
      </NavLink>
      |
      <NavLink to={"/register"} className={styleForNavLinks}>
        Register
      </NavLink>
    </div>
  );
};
export default LoginRegister;
