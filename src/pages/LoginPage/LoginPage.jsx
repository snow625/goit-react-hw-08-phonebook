import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginOldUser } from "../../redux/auth/auth-operation";

import useIsLogin from "../../shared/hooks/useisLogin";

import LoginForm from "../../modules/LoginForm";
const LoginPage = () => {
  const dispatch = useDispatch();

  const isLogin = useIsLogin();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const handleSubmit = (data) => {
    dispatch(loginOldUser(data));
  };

  return (
    <div className="container">
      <h2>Login:</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
