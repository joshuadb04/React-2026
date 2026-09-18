const SingleView = (props) => {
  const item = props.item;

  const type = item.media_type.split("/");
  const isImage = type[0].toLowerCase() === "image";

  return (
    <dialog open>
      <h1>{item.title}</h1>

      <div>
        <button onClick={() => props.setSelectedItem(null)}>x</button>
      </div>

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
    </dialog>
  );
};

export default SingleView;
