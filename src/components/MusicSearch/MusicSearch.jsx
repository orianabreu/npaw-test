import React, { useReducer } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";

import AlbumCard from "../AlbumCard/AlbumCard";
import { initialState, reducer } from "./reducer";
import { Input, IconContainer } from "./MusicSearchStyles";
import GridLayout from "../GridLayout/GridLayout";

export default function MusicSearch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchResults, inputSearch, searchDone, error, showGrid } = state;

  const url = `https://itunes.apple.com/search?term=${inputSearch}&entity=album&limit=20`;

  const searchMusic = async (event) => {
    if (!inputSearch) {
      console.log("error");
      dispatch({ type: "empy-inputfield" });
    } else {
      dispatch({ type: "no-error" });
    }

    if (event.key === "Enter" && inputSearch) {
      try {
        const response = await axios(url);
        console.log(response.data.results);
        dispatch({ type: "get-api-data", data: response.data.results });
        dispatch({ type: "show-results" });
      } catch (error) {
        console.log(error.message);
        dispatch({ type: "error", payload: error.message });
      }
    }
  };

  const handleChange = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  const changeGridLayout = () => {
    console.log("grid changed");
    dispatch({ type: "show-grid" });
  };

  return (
    <>
      <Input
        type='text'
        value={inputSearch}
        onChange={handleChange}
        onKeyDown={searchMusic}
      />

      {error && <p>{error}</p>}

      {searchDone && (
        <IconContainer onClick={changeGridLayout}>
          {showGrid ? (
            <GridOnIcon />
          ) : (
            <GridOffIcon />
          )}
        </IconContainer>
      )}

      <GridLayout showGrid={showGrid}>
        {searchDone &&
          searchResults.map((album, index) => {
            return (
              <Grid item sm={12} md={showGrid ? 2 : 12} key={index}>
                <AlbumCard
                  artwork={album.artworkUrl100}
                  artist={album.artistName}
                  albumName={album.collectionName}
                />
              </Grid>
            );
          })}
      </GridLayout>
    </>
  );
}
