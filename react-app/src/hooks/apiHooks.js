import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

        const newArray = await Promise.all(
          json.map(async (item) => {
            const result = await fetchData(
              import.meta.env.VITE_AUTH_API + "/users/" + item.user_id,
            );

            return { ...item, username: result.username };
          }),
        );

        setMediaArray(newArray);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };

    getMedia();
  }, []);
  return { mediaArray };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      };

      const loginResult = await fetchData(
        import.meta.env.VITE_AUTH_API + "/auth/login",
        fetchOptions,
      );

      console.log(loginResult);
      return loginResult;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return { postLogin };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const user = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      fetchOptions,
    );

    return user;
  };
  const postUser = async (user) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const result = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users",
      fetchOptions,
    );

    return result;
  };

  return { getUserByToken, postUser };
};

export { useMedia, useAuthentication, useUser };
