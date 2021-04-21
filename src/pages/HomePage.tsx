import React from 'react';
import { useState } from 'react';

import { usePokemon } from '../hooks/usePokemon';
import { UserRow } from '../components/UserRow';
import { Loading } from '../components/Loading';
import { Pokemon } from '../interfaces/fetchAllPokemonResponse';

export const HomePage = () => {
  const { isLoading, pokemons } = usePokemon();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredPokemos = (): Pokemon[] => {
    if (search.length === 0) return pokemons.slice(currentPage, currentPage + 5);

    // Escribiendo en el input
    const filtered = pokemons.filter((pokemon) => pokemon.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
      pokemons.filter((pokemon) => pokemon.name.includes(search)).length >
      currentPage + 5
    )
      setCurrentPage(currentPage + 5);
  };

  const previousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);

    const { target } = event;

    setSearch(target.value);
  };

  return (
    <div className="mt-5">
      <h1>Pokemon List</h1>
      <hr />
      <input
        type="text"
        className="mb-2 form-control"
        placeholder="Search Pokemon"
        value={search}
        onChange={onSearchChange}
      />
      <button className="btn bt btn-info" style={{ width: 100 }} onClick={previousPage}>
        Previous
      </button>
      &nbsp;
      <button className="btn bt  btn-success" style={{ width: 100 }} onClick={nextPage}>
        Next
      </button>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 300 }}>ID</th>
            <th style={{ width: 350 }}>Name</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {filteredPokemos().map((pokemon) => (
            <UserRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
      {isLoading && <Loading />}
    </div>
  );
};
