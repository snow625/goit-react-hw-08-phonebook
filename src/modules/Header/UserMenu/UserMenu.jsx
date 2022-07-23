import { useSelector, useDispatch } from "react-redux";

import { userLogout } from "../../../redux/auth/auth-operation";
import { userData } from "../../../redux/auth/auth-selector";

import s from "./userMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogout());
  };

  const user = useSelector(userData).user;
  const { email } = user;
  return (
    <div className={s.wrapper}>
      <p className={s.email}>{email}</p>
      <button onClick={handleClick} className={s.button} type="button">
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
