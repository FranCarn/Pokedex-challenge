import axios from "axios";
import PropTypes from "prop-types";

export const getPokemon = async ({ url }) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return [{}];
  }
};

export const getAllPokemon = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return [{}];
  }
};

export const getPokemonMoves = async (pokemonId) => {
  try {
    const res = await axios.get(process.env.REACT_APP_MOVEURL + pokemonId);
    return res.data;
  } catch (error) {
    return [{}];
  }
};

export const getSinglePokemon = async (name) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_POKEURL}/${name}`);
    return res.data;
  } catch (error) {
    return [{}];
  }
};

export const getEvolutions = async (url) => {
  let getEvolutionChain;

  try {
    const res = await axios.get(url);
    getEvolutionChain = res.data.evolution_chain.url;
  } catch (error) {
    console.log(error);
  }

  const getEvolutionData = async () => {
    try {
      const res = await axios.get(getEvolutionChain);
      const normal = [res.data.chain.species.name];

      if (res.data.chain.evolves_to.length === 0) return [normal];
      const firstEvolution = res.data.chain.evolves_to.map(
        (item) => item.species.name
      );

      if (res.data.chain.evolves_to[0].evolves_to.length === 0)
        return [normal, firstEvolution];

      const secondEvolution = [
        res.data.chain.evolves_to[0].evolves_to[0].species.name,
      ];
      return [normal, firstEvolution, secondEvolution];
    } catch (error) {
      console.log(error);
    }
  };
  const data = await getEvolutionData();

  return data;
};

getPokemon.propTypes = {
  url: PropTypes.string.isRequired,
};
getAllPokemon.propTypes = {
  url: PropTypes.string.isRequired,
};
getPokemonMoves.propTypes = {
  pokemonId: PropTypes.number.isRequired,
};
getSinglePokemon.propTypes = {
  name: PropTypes.string.isRequired,
};
getEvolutions.propTypes = {
  url: PropTypes.string.isRequired,
};
