import { Component, inject, computed } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetail } from '../models/pokemon';
import { NgOptimizedImage, NgIf, NgFor } from '@angular/common';
import { HeaderComponent } from '../../ui/layout/header/header.component';
import {PokemonDetailsCardComponent} from '../../ui/layout/pokemon-details-card/pokemon-details-card.component';
import {LoaderComponent} from '../../ui/atoms/loader/loader.component';

@Component({
    selector: 'app-pokemon',
    standalone: true,
  imports: [NgOptimizedImage, NgIf, NgFor, HeaderComponent, RouterLink, PokemonDetailsCardComponent, LoaderComponent],
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
    private route = inject(ActivatedRoute);
    private pokemonService = inject(PokemonService);

    private pokemonResource = this.pokemonService.pokemonDetail(this.route.snapshot.params['id']);

    isLoading = computed(() => this.pokemonResource.isLoading());
    error = computed(() => this.pokemonResource.error());
    pokemonData = computed(() => this.pokemonResource.value());
}
