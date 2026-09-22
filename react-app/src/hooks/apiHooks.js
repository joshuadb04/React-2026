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

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append("file", file);

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    };

    const upload = await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + "/upload",
      fetchOptions,
    );

    return upload;
  };

  const postMedia = async (file, inputs, token) => {
    const fileData = await postFile(file, token);

    const mediaObject = {
      title: inputs.title,
      description: inputs.description,
      filename: fileData.data.filename,
      media_type: fileData.data.media_type,
      filesize: fileData.data.filesize,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(mediaObject),
    };

    const upload = await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media",
      fetchOptions,
    );

    return upload;
  };

  return { postFile, postMedia };
};

export { useMedia, useAuthentication, useUser, useFile };
