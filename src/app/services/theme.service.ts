import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
const THEME_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private _theme = signal<Theme>(this.getStoredTheme());
    readonly theme = this._theme.asReadonly();

    constructor() {
        this.applyTheme(this._theme());
    }

    toggleTheme(): void {
        const newTheme = this._theme() === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme: Theme): void {
        this._theme.set(theme);
        this.applyTheme(theme);
        localStorage.setItem(THEME_KEY, theme);
    }

    private applyTheme(theme: Theme): void {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(`theme-${theme}`);
    }

    private getStoredTheme(): Theme {
        const stored = localStorage.getItem(THEME_KEY);
        return stored === 'dark' ? 'dark' : 'light';
    }
}
