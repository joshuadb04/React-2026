import useForm from "../hooks/formHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const { handleLogin } = useUserContext();

  const doLogin = async (inputs) => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-4/5">
          <label htmlFor="loginuser">Username</label>
          <input
            className="my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="loginpassword">Password</label>
          <input
            className="my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
