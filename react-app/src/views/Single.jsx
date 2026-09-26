import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state.item;
  const type = item.media_type.split("/");
  const isImage = type[0].toLowerCase() === "image";

  return (
    <dialog
      className="fixed top-[5%] h-[90%] bg-black border-gray-800 p-4 border-4 z-9999 text-white mx-auto"
      open
    >
      <h1>{item.title}</h1>

      {isImage ? (
        <img
          className="h-[70%] object-contain"
          src={item.filename}
          alt={item.description}
          title={item.description}
        />
      ) : (
        <video
          className="h-[70%] object-contain"
          src={item.filename}
          controls
        />
      )}

      <p>{item.description}</p>
      <p>{item.username}</p>
      <button
        className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </dialog>
  );
};

export default Single;
