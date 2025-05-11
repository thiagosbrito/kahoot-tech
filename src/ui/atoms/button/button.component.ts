import { Component, input, output } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    label = input.required<string>()
    variant = input<'primary' | 'secondary' | 'tertiary'>('primary')
    buttonClicked = output()
}
