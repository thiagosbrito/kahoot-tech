import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
})
export class IconComponent {
    icon = input.required<string>()
    size =  input(16)
}
