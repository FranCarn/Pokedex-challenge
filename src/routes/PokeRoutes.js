import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { PokemonList, PokemonDetails } from "../page";

export const PokeRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/pokemon/list" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/" element={<Navigate to="/pokemon/list" />} />
        </Routes>
      </div>
    </>
  );
};
