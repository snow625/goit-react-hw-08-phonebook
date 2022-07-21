import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h2>RegisterPage</h2>
      <RegisterForm onSubmit={handleSubmit} />;
    </div>
  );
};
export default RegisterPage;
