import useForm from "../../shared/hooks/useForm";
import { Navigate } from "react-router-dom";

import { initialState } from "./initialState";
import { fields } from "./fields";

import useIsLogin from "../../shared/hooks/useisLogin";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import s from "./registerForm.module.css";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const isLogin = useIsLogin();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const { name, email, password } = state;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button text="Register" />
    </form>
  );
};
export default RegisterForm;
