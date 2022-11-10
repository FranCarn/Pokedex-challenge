import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getEvolutions, getSinglePokemon } from "../../api/pokemonAPI";
import { toFirstCharUppercase, typeColors } from "../../helpers";
import { Loader } from "../Loader";
import styles from "./Card.module.css";

export const Card = () => {
  const [showMoves, setShowMoves] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [evolutions, setEvolutions] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const resp = await getSinglePokemon(id);
      const evolutionData = await getEvolutions(resp.species.url);
      setPokemonInfo(resp);
      setEvolutions(evolutionData);
    };
    getData();
  }, [id]);

  return (
    <>
      {!pokemonInfo ? (
        <Loader speed={1} />
      ) : (
        <div className={`${styles.Card} animate__animated animate__fadeIn`}>
          <div className={styles.ListItem__img}>
            <img
              src={pokemonInfo.sprites.front_shiny}
              loading="lazy"
              alt={`${pokemonInfo.name}-img`}
            />
          </div>
          <div className={styles.Card__name}>
            {toFirstCharUppercase(pokemonInfo.name)}
          </div>

          <div className={styles.Card__types}>
            {pokemonInfo.types?.map((item) => {
              return (
                <div
                  key={item.type.name}
                  className={styles.Card__type}
                  style={{ backgroundColor: typeColors[item.type.name] }}
                >
                  {toFirstCharUppercase(item.type.name)}
                </div>
              );
            })}
          </div>
          <div className={styles.Card__info}>
            <div className={styles.Card__EvolutionsContainer}>
              {evolutions.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  key={item}
                  to={`/pokemon/${item}`}
                >
                  <span className={styles.Card__Evolutions}>{item}</span>
                </NavLink>
              ))}
            </div>
            <div className={styles.Card__data}>
              <p className={styles.title}>Weight:</p>
              <p>{pokemonInfo.weight}</p>
            </div>
            <div className={styles.Card__data}>
              <p className={styles.title}>Height:</p>
              <p>{pokemonInfo.height}</p>
            </div>
            <div className={styles.Card__data}>
              <p
                className={styles.dropdown}
                onClick={() => setShowMoves(!showMoves)}
              >
                <span>Moves </span>
                <i
                  className={`fa-solid fa-chevron-down fa-sm ${
                    showMoves && styles.open
                  }`}
                />
              </p>
              <ul>
                {showMoves &&
                  pokemonInfo.moves.map((item) => (
                    <li key={item.move.name}>{`${toFirstCharUppercase(
                      item.move.name
                    )}`}</li>
                  ))}
              </ul>
            </div>
            <div className={styles.Card__data}>
              <p className={styles.title}>Ability:</p>
              {pokemonInfo.abilities.map((item) => {
                return <p key={item.ability.name}>{item.ability.name}</p>;
              })}
            </div>
          </div>
          <Link className={styles.Card__Evolutions} to="/pokemon/list">
            Volver a la pagina principal
          </Link>
        </div>
      )}
    </>
  );
};
