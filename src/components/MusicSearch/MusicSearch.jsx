import React, { useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";

export default function MusicSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchDone, setSearchDone] = useState(false);

  const url = `https://itunes.apple.com/search?term=${inputSearch}&entity=album&limit=20`;

  const searchMusic = async () => {
    try {
      const response = await axios(url);
      console.log(response.data.results);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
    setSearchDone(true);
  };

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <input type='text' value={inputSearch} onChange={handleChange} />
      <button onClick={searchMusic}>search</button>

      {searchDone &&
        searchResults.map((album, index) => {
          return (
            <AlbumCard
              key={index}
              artwork={album.artworkUrl100}
              artist={album.artistName}
              albumName={album.collectionName}
            />
          );
        })}
    </div>
  );
}
