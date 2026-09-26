import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks";

const Layout = () => {
  const { handleAutoLogin, user } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);
  return (
    <div>
      <nav className=" bg-[#0e0e0e] flex-1 p-4">
        <ul className="flex justify-around">
          <li>
            <Link
              to="/"
              className="block text-white text-center p-4 hover:bg-[#111111]"
            >
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="block text-white text-center p-4 hover:bg-[#111111]"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/upload"
                  className="block text-white text-center p-4 hover:bg-[#111111]"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block text-white text-center p-4 hover:bg-[#111111]"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="block text-white text-center p-4 hover:bg-[#111111]"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
