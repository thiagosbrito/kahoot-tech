import {Component, computed, input, output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {PokemonListItem} from '../../../app/models/pokemon';
import { getPokemonImageUrl } from '../../../app/utils/poke-image';

@Component({
  selector: 'app-pokemon-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
    pokemon = input.required<PokemonListItem>()
    cardClick = output<PokemonListItem>()

    pokemonImageUrl = computed(() => getPokemonImageUrl(this.pokemon()))
}
