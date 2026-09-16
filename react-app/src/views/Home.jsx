import MediaRow from "../components/MediaRow";
import { useState } from "react";
import SingleView from "../components/SingleView";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: "https://placecats.com/1200/800",
      thumbnail: "https://placecats.com/320/240",
      filesize: 170469,
      media_type: "image/jpeg",
      title: "Picture 1",
      description: "This is a placeholder picture.",
      created_at: "2024-01-07T20:49:34.000Z",
    },
    {
      media_id: 9,
      user_id: 7,
      filename: "https://placecats.com/800/600",
      thumbnail: "https://placecats.com/240/240",
      filesize: 1002912,
      media_type: "image/jpeg",
      title: "Pic 2",
      description: "",
      created_at: "2024-01-07T21:32:27.000Z",
    },
    {
      media_id: 17,
      user_id: 2,
      filename:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Cat_playing_with_its_claws.webm/Cat_playing_with_its_claws.webm.240p.vp9.webm",
      thumbnail: "https://placecats.com/350/350",
      filesize: 1236616,
      media_type: "video/mp4",
      title: "Bunny",
      description: "Butterflies fly around the bunny.",
      created_at: "2024-01-07T20:48:13.000Z",
    },
  ];
  return (
    <>
      <h2>My Media</h2>

      {selectedItem && (
        <SingleView media={selectedItem} setSelectedItem={setSelectedItem} />
      )}
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
