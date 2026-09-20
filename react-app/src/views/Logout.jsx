import { useUserContext } from "../hooks/contextHooks.js";

const Logout = () => {
  const { handleLogout } = useUserContext();
  handleLogout();
};

export default Logout;
