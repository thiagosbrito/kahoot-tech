import { PokemonListItem } from "../models/pokemon";

export function getPokemonImageUrl(pokemon: PokemonListItem): string {
    const url = pokemon.url;
    const id = url.split('/').filter(Boolean).pop();
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
