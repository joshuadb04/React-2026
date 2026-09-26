import MediaRow from "../components/MediaRow";
import { useState } from "react";
import SingleView from "../components/SingleView";
import { useMedia } from "../hooks/apiHooks";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { mediaArray } = useMedia();

  return (
    <>
      <h2>My Media</h2>

      {selectedItem && (
        <SingleView media={selectedItem} setSelectedItem={setSelectedItem} />
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 border border-gray-300 text-center">
              Thumbnail
            </th>
            <th className="p-4 border border-gray-300 text-center">Title</th>
            <th className="p-4 border border-gray-300 text-center">
              Description
            </th>
            <th className="p-4 border border-gray-300 text-center">Created</th>
            <th className="p-4 border border-gray-300 text-center">Size</th>
            <th className="p-4 border border-gray-300 text-center">Type</th>
            <th className="p-4 border border-gray-300 text-center">Username</th>
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
