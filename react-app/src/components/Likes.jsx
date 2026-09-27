import { useState, useEffect } from "react";
import { useLikes } from "../hooks/apiHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";

const Likes = ({ item }) => {
  const [likeCount, setLikeCount] = useState([]);
  const [userLike, setUserLike] = useState([]);
  const token = localStorage.getItem("token");
  const { user } = useUserContext();

  const { postLike, deleteLike, getLikeCountByMediaId, getLikeByUser } =
    useLikes();

  useEffect(() => {
    const getLikeCount = async () => {
      const result = await getLikeCountByMediaId(item.media_id);
      setLikeCount(result);
    };

    getLikeCount();
  }, []);

  useEffect(() => {
    const getUserLike = async () => {
      if (user) {
        const result = await getLikeByUser(user.user_id, token);
        setUserLike(result.filter((like) => like.media_id === item.media_id));
      } else {
        setUserLike([]);
      }
    };

    getUserLike();
  }, []);

  return (
    <>
      <button
        className="my-1 p-1 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
        onClick={async () => {
          userLike?.length > 0
            ? await deleteLike(userLike[0].like_id, token)
            : await postLike(item.media_id, token);

          setLikeCount(await getLikeCountByMediaId(item.media_id));
          setUserLike(
            (await getLikeByUser(user.user_id, token)).filter(
              (like) => like.media_id === item.media_id,
            ),
          );
        }}
      >
        {userLike?.length > 0 ? "Liked" : "Like"}
      </button>
      <p>{likeCount?.count}</p>
    </>
  );
};

export default Likes;
