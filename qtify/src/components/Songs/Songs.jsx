import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/songs"
        );

        console.log("Songs API response:", response.data);
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );

        console.log("Genres API response:", response.data);
        setGenres(response.data.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <Section
      title="Songs"
      data={filteredSongs}
      genres={genres}
      selectedGenre={selectedGenre}
      setSelectedGenre={setSelectedGenre}
      isSongSection={true}
    />
  );
}

export default Songs;