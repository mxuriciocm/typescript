import { genericFunction, printObject } from "./generics";
import { getPokemon } from "./get-pokemon";

genericFunction(23231321).toFixed();
getPokemon(1)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin de getPokemon"));
