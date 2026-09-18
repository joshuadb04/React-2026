import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state.item;
  const type = item.media_type.split("/");
  const isImage = type[0].toLowerCase() === "image";

  return (
    <dialog open>
      <h1>{item.title}</h1>

      {isImage ? (
        <img
          src={item.filename}
          alt={item.description}
          title={item.description}
        />
      ) : (
        <video src={item.filename} controls />
      )}

      <p>{item.description}</p>
      <p>{item.username}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </dialog>
  );
};

export default Single;
