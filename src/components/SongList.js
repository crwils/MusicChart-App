import React from "react";
import SongListItem from "./SongListItem";

const SongList = ({ songs }) => {
if (songs == null || songs.length === 0) {
    return <p>Loading...</p>
}

  return (
    <div>
      {songs.map((song, index) => {
        return (
          <SongListItem
            key={song.id.attributes["im:id"]}
            position={index + 1}
            title={song["im:name"].label}
            artist={song["im:artist"].label}
            image={song["im:image"][1].label}
            audio={song.link[1].attributes.href}
          />
        );
      })}
    </div>
  );
};

export default SongList;
