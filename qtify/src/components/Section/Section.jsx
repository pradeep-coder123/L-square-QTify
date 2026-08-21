import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  apiEndpoint,
  data,
  genres,
  selectedGenre,
  setSelectedGenre,
  isSongSection = false,
}) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (isSongSection) {
      return;
    }

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint, isSongSection]);

  const sectionData = isSongSection ? data : albums;

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>

        {!isSongSection && (
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {isSongSection && (
        <Tabs
          value={selectedGenre}
          onChange={(event, newValue) => setSelectedGenre(newValue)}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
            />
          ))}
        </Tabs>
      )}

      {isSongSection || !showAll ? (
        <Carousel data={sectionData} isSongSection={isSongSection} />
      ) : (
        <div className={styles.cardGrid}>
          {sectionData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              follows={isSongSection ? item.likes : item.follows}
              title={item.title}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;