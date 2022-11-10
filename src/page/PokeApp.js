import React, { useEffect, useState } from "react";
import { Paginator, Loader } from "../components";
import { ItemList } from "../components/ItemList";
import PropTypes from "prop-types";
import styles from "../App.module.css";

export const PokeApp = ({ pokemon }) => {
  const [search, setSearch] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const { prevUrl, prevPage, nextUrl, nextPage, pokemonData, loading } =
    pokemon;

  useEffect(() => {
    setSearch("");
    setSearchedPokemon(pokemonData);
  }, [pokemonData]);
  useEffect(() => {
    if (!search) return;
    const filterArray = pokemonData.filter((pokemon) =>
      pokemon.species.name.includes(search.toLowerCase())
    );
    setSearchedPokemon(filterArray);
  }, [pokemonData, search]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div>
        <div className={styles.searchbar}>
          <i className="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading && <Loader speed={2} />}
      </div>
      <div className={styles.grid__container}>
        {search
          ? searchedPokemon.map((pokemon) => (
              <ItemList key={pokemon.name} pokemon={pokemon} />
            ))
          : pokemonData.map((pokemon) => (
              <ItemList key={pokemon.name} pokemon={pokemon} />
            ))}
      </div>
      <Paginator
        prevUrl={prevUrl}
        nextUrl={nextUrl}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};
PokeApp.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
