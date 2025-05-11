export type PokemonListItem = {
    name: string;
    url: string;
};

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
};

export type PokemonSprites = {
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
};

export type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export type PokemonAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

export type PokemonDetail = {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: PokemonSprites;
    types: PokemonType[];
    abilities: PokemonAbility[];
};
