const SingleView = (props) => {
  const item = props.item;

  const type = item.media_type.split("/");
  const isImage = type[0].toLowerCase() === "image";

  return (
    <dialog
      className="fixed top-[5%] h-[90%] bg-black/80 z-9999 text-white mx-auto"
      open
    >
      <h1>{item.title}</h1>

      <div>
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-0 cursor-pointer hover:bg-[#111111]"
          onClick={() => props.setSelectedItem(null)}
        >
          x
        </button>
      </div>

      {isImage ? (
        <img
          className="max-w-full"
          src={item.filename}
          alt={item.description}
          title={item.description}
        />
      ) : (
        <video className="max-w-full" src={item.filename} controls />
      )}

      <p>{item.description}</p>
      <p>{item.username}</p>
    </dialog>
  );
};

export default SingleView;
