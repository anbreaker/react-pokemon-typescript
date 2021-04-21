import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { UserRow } from '../components/UserRow';

export const HomePage = () => {
  const { pokemons } = usePokemon();

  return (
    <div className="mt-5">
      <h1>List Pokemon</h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {pokemons.map((pokemon) => (
            <UserRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
