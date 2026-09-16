const SingleView = (props) => {
  const media = props.media;

  const type = media.media_type.split("/");
  const isImage = type[0].toLowerCase() === "image";

  return (
    <dialog open>
      <h1>{media.title}</h1>

      <div>
        <button onClick={() => props.setSelectedItem(null)}>x</button>
      </div>

      {isImage ? (
        <img
          src={media.filename}
          alt={media.description}
          title={media.description}
        />
      ) : (
        <video src={media.filename} controls />
      )}

      <p>{media.description}</p>
    </dialog>
  );
};

export default SingleView;
