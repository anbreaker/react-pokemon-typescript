import { pokemonApi } from '../api/pokemonApi';
import {
  FetchAllPokemonResponse,
  Pokemon,
  SmallPokemon,
} from '../interfaces/fetchAllPokemonResponse';

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  // 1500
  const response = await pokemonApi.get<FetchAllPokemonResponse>('/pokemon?limit=10');

  const smallPokemonList = response.data.results;

  return transformSmallPokemonIntoPokemonList(smallPokemonList);
};

const transformSmallPokemonIntoPokemonList = (
  smallPokemonList: SmallPokemon[]
): Pokemon[] => {
  const pokemonArray = smallPokemonList.map((poke) => {
    const pokeArr = poke.url.split('/');
    const id = pokeArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id,
      pic,
      name: poke.name,
      // name: poke.name[0].toUpperCase() + poke.name.slice(1),
    };
  });

  return pokemonArray;
};
