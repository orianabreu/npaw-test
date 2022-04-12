import React, { useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";

export default function MusicSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://itunes.apple.com/search?term=${inputSearch}&entity=album&limit=20`;

  const searchMusic = async () => {
    if (!inputSearch) {
        console.log("error");
        setError("Please, add a valid search album name or artist")
    } else {
        setError(null);
    }

    setIsLoading(true);

    try {
      const response = await axios(url);
      console.log(response.data.results);
      setSearchResults(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setSearchDone(true);
  };

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <input type='text' value={inputSearch} onChange={handleChange} />
      <button onClick={searchMusic}>{isLoading ? "Loading..." : "Search"}</button>

      {error && <p>{error}</p>}

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
