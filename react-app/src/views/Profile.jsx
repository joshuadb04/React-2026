import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getUser = async () => {
      const userData = await getUserByToken(token);
      setUser(userData.user);
    };

    getUser();
  }, [getUserByToken]);

  return (
    <>
      {user && (
        <>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </>
      )}
    </>
  );
};

export default Profile;
