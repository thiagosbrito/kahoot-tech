import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'pokemon/:id',
        loadComponent: () =>
            import('./pokemon/pokemon.component').then((m) => m.PokemonComponent),
    },
];
