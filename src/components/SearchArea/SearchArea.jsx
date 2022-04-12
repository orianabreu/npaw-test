import React, { useState } from 'react';
import axios from 'axios';

export default function SearchArea() {
    const [results, setResults] = useState([]);
    const [inputSearch, setInputSearch] = useState("");

    const url = `https://itunes.apple.com/search?term=${inputSearch}&entity=album&limit=20`;

    const searchMusic = async () => {
        try {
            const response = await axios(url);
            console.log(response.data.results);
        } catch(error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setInputSearch(e.target.value);
    }

  return (
    <div>
        <input type="text" value={inputSearch} onChange={handleChange}/>
        <button onClick={searchMusic}>search</button>
    </div>
  )
}

