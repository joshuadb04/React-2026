import PropTypes from "prop-types";
import { Link } from "react-router";
import { useUserContext } from "../hooks/contextHooks";
import { useFile } from "../hooks/apiHooks";
import { useNavigate } from "react-router";

const MediaRow = (props) => {
  const { user } = useUserContext();
  const item = props.item;
  const { deleteMedia } = useFile();
  const navigate = useNavigate();
  //const setSelectedItem = props.setSelectedItem;
  return (
    <tr>
      <td>
        <img
          className="w-50 h-50 object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>
      <td className="p-4 border border-gray-300 text-center">{item.title}</td>
      <td className="p-4 border border-gray-300 text-center">
        {item.description}
      </td>
      <td className="p-4 border border-gray-300 text-center">
        {new Date(item.created_at).toLocaleString("fi-FI")}
      </td>
      <td className="p-4 border border-gray-300 text-center">
        {item.filesize}
      </td>
      <td className="p-4 border border-gray-300 text-center">
        {item.media_type}
      </td>
      <td className="p-4 border border-gray-300 text-center">
        {item.username}
      </td>
      <td className="p-4 border border-gray-300 text-center">
        <Link to="/single" state={{ item }}>
          <button className="my-1 p-1 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]">
            Show
          </button>
        </Link>

        {user && (user.user_id === item.user_id || user.role === "admin") && (
          <>
            <Link to="/modify" state={{ item }}>
              <button className="my-1 p-1 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]">
                Modify
              </button>
            </Link>

            <button
              className="my-1 p-1 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
              onClick={async () => {
                confirm("Are you sure you want to delete this image?")
                  ? await deleteMedia(
                      item.media_id,
                      localStorage.getItem("token"),
                    ).then(() => navigate(0))
                  : null;
              }}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MediaRow;
