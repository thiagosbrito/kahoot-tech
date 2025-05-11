import { Component, inject, signal } from '@angular/core';
import { SwitchComponent } from "../../ui/atoms/switch/switch.component";
import { PokemonService } from '../services/pokemon.service';
import { getPokemonImageUrl } from '../utils/poke-image';
import { NgOptimizedImage} from '@angular/common';
import {ThemeService} from '../services/theme.service';
import {HeaderComponent} from '../../ui/layout/header/header.component';
import {HeroComponent} from '../../ui/layout/hero/hero.component';
import {PokemonListComponent} from '../../ui/layout/pokemon-list/pokemon-list.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
  imports: [
    SwitchComponent,
    NgOptimizedImage,
    HeaderComponent,
    HeroComponent,
    PokemonListComponent
  ],
})
export class HomeComponent {
    pokemonService = inject(PokemonService);
    readonly pokemons = this.pokemonService.pokemonList
    protected readonly getPokemonImageUrl = getPokemonImageUrl;


}
