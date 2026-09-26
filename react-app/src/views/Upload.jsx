import useForm from "../hooks/formHooks";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useFile } from "../hooks/apiHooks";

const Upload = () => {
  const [file, setFile] = useState(null);
  const { postFile, postMedia } = useFile();
  const navigate = useNavigate();

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  const doUpload = async (inputs) => {
    try {
      const token = localStorage.getItem("token");
      await postFile(file, token);
      await postMedia(file, inputs, token);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doUpload);

  return (
    <>
      <h1>Upload</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block" htmlFor="title">
            Title
          </label>
          <input
            className="w-100 my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-100 my-2.5 p-2.5 border border-gray-300 rounded-[5px]"
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label className="block" htmlFor="file">
            File
          </label>
          <input
            className="w-55 my-4 p-1 file:bg-[#363636] file:text-white file:p-2 file:rounded-[5px] file:cursor-pointer file:hover:bg-[#111111]"
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          className="w-50 h-50 object-cover rounded-[5px] my-2.5"
          src={
            file
              ? URL.createObjectURL(file)
              : "https://placehold.co/200?text=Choose+image"
          }
          alt="preview"
          width="200"
        />
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
