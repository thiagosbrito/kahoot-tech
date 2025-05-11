import { Component, computed, input, signal, inject } from '@angular/core';
import { LoaderComponent } from '../../atoms/loader/loader.component';
import { PokemonListItem } from '../../../app/models/pokemon';
import { ButtonComponent } from '../../atoms/button/button.component';
import {PokemonCardComponent} from '../pokemon-list-card/pokemon-card.component';
import { NgClass } from '@angular/common';
import { PokemonService } from '../../../app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemon-list',
  imports: [
    NgClass,
    LoaderComponent,
    ButtonComponent,
    PokemonCardComponent
  ],
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
    pokemons = input.required<PokemonListItem[]>()
    isLoading = input<boolean>(true)
    sortDirection = signal<'asc' | 'desc'>('asc')
    protected pokemonService = inject(PokemonService)
    private router = inject(Router)

    async loadMore() {
        await this.pokemonService.loadMore();
    }

    onPokemonClick(pokemon: PokemonListItem) {
        const id = pokemon.url.split('/').filter(Boolean).pop()
        void this.router.navigate(['/pokemon', id]);
    }

    sortedList = computed(() => {
        return this.pokemons().sort((a, b) => {
            return this.sortDirection() === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        })
    })
}
