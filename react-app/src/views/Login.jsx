import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? <LoginForm /> : <RegisterForm />}

      <button
        className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
        onClick={() => setShowLogin(!showLogin)}
      >
        {showLogin ? "Register" : "Login"}
      </button>
    </>
  );
};

export default Login;
