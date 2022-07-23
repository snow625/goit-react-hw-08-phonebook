import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/auth/auth-operation";
import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
  const dispath = useDispatch();
  const handleSubmit = (data) => {
    dispath(createNewUser(data));
  };
  return (
    <div className="container">
      <h2>Register new user:</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};
export default RegisterPage;
