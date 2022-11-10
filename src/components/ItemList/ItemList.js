import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./itemList.module.css";

export const ItemList = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className={`${styles.ListItem} animate__animated animate__fadeIn`}>
        <div className={styles.ListItem__img}>
          <img
            src={pokemon.sprites.front_default}
            loading="lazy"
            alt={`${pokemon.name}-img`}
          />
        </div>
        <div className={styles.ListItem__name}>{pokemon.name}</div>
      </div>
    </Link>
  );
};
ItemList.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
