import React, { useReducer } from "react";
import axios from "axios";

import AlbumCard from "../AlbumCard/AlbumCard";
import { initialState, reducer } from "./reducer";

export default function MusicSearch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchResults, inputSearch, searchDone, error } = state;

  const url = `https://itunes.apple.com/search?term=${inputSearch}&entity=album&limit=20`;

  const searchMusic = async () => {
    if (!inputSearch) {
      console.log("error");
      dispatch({ type: "empy-inputfield" });
    } else {
      dispatch({ type: "no-error" });
    }

    try {
      const response = await axios(url);
      console.log(response.data.results);
      dispatch({ type: "get-api-data", data: response.data.results });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "error", payload: error.message });
    }
    dispatch({ type: "show-results" });
  };

  const handleChange = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  return (
    <div>
      <input type='text' value={inputSearch} onChange={handleChange} />
      <button onClick={searchMusic}>search</button>

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