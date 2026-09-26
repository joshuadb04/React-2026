import useForm from "../hooks/formHooks";
import { useUser } from "../hooks/apiHooks";

const RegisterForm = () => {
  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const { postUser } = useUser();

  const doRegister = async (inputs) => {
    try {
      const result = await postUser(inputs);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <h1>Register</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-4/5">
          <label htmlFor="registeruser">Username</label>
          <input
            className="my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="registerpassword">Password</label>
          <input
            className="my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="new-password"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label htmlFor="registeremail">Email</label>
          <input
            className="my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
