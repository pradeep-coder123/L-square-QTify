import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.cardContent}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;