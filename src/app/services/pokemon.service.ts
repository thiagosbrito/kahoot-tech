import { Injectable, computed, inject, signal, effect, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {lastValueFrom, map, switchMap} from 'rxjs';
import {PokemonDetail, PokemonListResponse} from '../models/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);

  private readonly fetchPokemonList = (limit: number, offset: number) => {
      return this.http.get<PokemonListResponse>(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`).pipe(
          map((response) => response.results),
      )
  }

  private readonly fetchPokemonDetail = (id: string) => {
      return this.http.get<PokemonDetail>(`${BASE_URL}/pokemon/${id}`).pipe(
          map((response => response)),
      )
  }

  readonly offset = signal(0);
  readonly limit = 10;
  readonly hasMore = signal(true);

  readonly pokemonList = resource({
      loader: () => lastValueFrom(this.fetchPokemonList(this.limit, this.offset())),
      defaultValue: [],
  });

  readonly pokemonDetail = (id: string) => {
      return resource({
          loader: () => lastValueFrom(this.fetchPokemonDetail(id)),
          defaultValue: {} as PokemonDetail,
      });
  }

  async loadMore() {
    if (!this.hasMore()) return;

    const currentOffset = this.offset();
    const newOffset = currentOffset + this.limit;

    try {
      const newPokemons = await lastValueFrom(this.fetchPokemonList(this.limit, newOffset));

      if (newPokemons.length === 0) {
        this.hasMore.set(false);
        return;
      }

      this.offset.set(newOffset);
      const currentList = this.pokemonList.value() || [];
      this.pokemonList.set([...currentList, ...newPokemons]);
    } catch (error) {
      console.error('Error loading more Pokemon:', error);
    }
  }
}
