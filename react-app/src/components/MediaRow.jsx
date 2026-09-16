import PropTypes from "prop-types";

const MediaRow = (props) => {
  const item = props.item;
  const selectedItem = props.selectedItem;
  const setSelectedItem = props.setSelectedItem;
  return (
    <tr onClick={() => setSelectedItem(item)}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <button onClick={() => props.setSelectedItem(item)}>View</button>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MediaRow;
