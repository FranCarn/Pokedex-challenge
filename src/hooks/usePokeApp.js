import { useEffect, useState } from "react";
import { getAllPokemon, getPokemonById } from "../api";

export const usePokeApp = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getAllPokemon(process.env.REACT_APP_POKEURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await getPokemonsIMG(response.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  const nextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await getPokemonsIMG(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prevPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await getPokemonsIMG(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const getPokemonsIMG = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokeData = await getPokemonById(pokemon);
        return pokeData;
      })
    );
    setPokemonData(_pokemonData);
  };

  return {
    pokemonData,
    nextUrl,
    prevUrl,
    loading,
    setPokemonData,
    nextPage,
    prevPage,
    setLoading,
  };
};
