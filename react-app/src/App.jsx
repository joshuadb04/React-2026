import Home from "./components/Home.jsx";
import Login from "./views/login.jsx";
import Routes from "react";
import { UserProvider } from "./context/UserContext.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Home />
      <UserProvider>
        <Routes></Routes>
      </UserProvider>
    </>
  );
};

export default App;
