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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://placehold.co/200?text=Choose+image"
          }
          alt="preview"
          width="200"
        />
        <button
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
