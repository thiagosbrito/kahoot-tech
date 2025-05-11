import {Component, input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {PokemonDetail} from '../../../app/models/pokemon';

@Component({
  selector: 'app-pokemon-details-card',
    imports: [
        NgForOf,
        NgOptimizedImage
    ],
  templateUrl: './pokemon-details-card.component.html',
  styleUrl: './pokemon-details-card.component.scss'
})
export class PokemonDetailsCardComponent {
    pokemon = input.required<PokemonDetail>()
}
