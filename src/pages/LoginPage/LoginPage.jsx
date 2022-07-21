import LoginForm from "../../modules/LoginForm";
const LoginPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h2>LoginPage</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
