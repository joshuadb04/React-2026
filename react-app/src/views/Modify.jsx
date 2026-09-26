import { useLocation } from "react-router";
import useForm from "../hooks/formHooks";
import { useNavigate } from "react-router";
import { useFile } from "../hooks/apiHooks";

const Modify = () => {
  const { state } = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  const { modifyMedia } = useFile();

  const { handleSubmit, handleInputChange, inputs } = useForm(
    () => {
      console.log(inputs.title);
      console.log(inputs.description);
    },
    {
      title: item.title,
      description: item.description,
    },
  );

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-4/5">
        <label htmlFor="title">Title</label>
        <input
          className="w-full box-border my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
          name="title"
          type="text"
          id="title"
          value={inputs.title}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="w-full box-border my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
          name="description"
          id="description"
          value={inputs.description}
          onChange={handleInputChange}
        />

        <button
          onClick={async () => {
            await modifyMedia(
              item.media_id,
              inputs,
              localStorage.getItem("token"),
            );
            navigate("/");
          }}
          className="mx-auto w-25 my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
          type="submit"
        >
          Modify
        </button>
      </div>
    </form>
  );
};

export default Modify;
