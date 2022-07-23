import { Link } from "react-router-dom";
import s from "./homePage.module.css";
const HomePage = () => {
  return (
    <div className={`container ${s.pageContainer}`}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Welcome to the Phonebook project.</h2>
        <p>
          For the full operation of the application, please{" "}
          <Link className={s.link} to={"/register"}>
            Register
          </Link>{" "}
          or{" "}
          <Link className={s.link} to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default HomePage;
