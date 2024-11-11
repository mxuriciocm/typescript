import axios from "axios";
import { Pokemon } from "../05-interfaces/pokemon";

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  console.log(response.data.name);
  return response.data;
};
