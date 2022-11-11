import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import { ItemList, Paginator } from "./components/";
import styles from "./home.module.css";
import { usePokeApp } from "../../hooks/usePokeApp";

export const PokemonList = () => {
  const [search, setSearch] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const { prevUrl, prevPage, nextUrl, nextPage, pokemonData, loading } =
    usePokeApp();

  useEffect(() => {
    setSearch("");
    setSearchedPokemon(pokemonData);
  }, [pokemonData]);
  useEffect(() => {
    if (!search) return setSearchedPokemon(pokemonData);
    const filterArray = pokemonData.filter((pokemon) =>
      pokemon.species.name.includes(search.toLowerCase())
    );
    setSearchedPokemon(filterArray);
  }, [pokemonData, search]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.searchbarContainer}>
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
        <div className={styles.grid__container}>
          {searchedPokemon.map((pokemon) => (
            <ItemList key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
      <Paginator
        prevUrl={prevUrl}
        nextUrl={nextUrl}
        prevPage={prevPage}
        nextPage={nextPage}
        loading={loading}
      />
    </div>
  );
};
