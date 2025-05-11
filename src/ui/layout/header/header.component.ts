import {Component, computed, inject} from '@angular/core';
import {SwitchComponent} from '../../atoms/switch/switch.component';
import {ThemeService} from '../../../app/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    SwitchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    themeService = inject(ThemeService)
    isDarkMode = computed(() => this.themeService.theme() === 'dark');

    toggleDarkMode() {
        this.themeService.toggleTheme();
    }
}
