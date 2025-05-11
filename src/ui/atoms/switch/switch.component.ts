import { NgStyle } from '@angular/common';
import { Component, computed, input, model, output } from '@angular/core';
import {IconComponent} from '../icon/icon.component';

@Component({
    selector: 'app-switch',
  imports: [NgStyle, IconComponent],
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.scss',
})
export class SwitchComponent {
    checked = model<boolean>(false)
    checkedChange = output<boolean>()
    size = input<'small' | 'medium' | 'large'>()
    trackColor = input<string>('#2196F3')
    icon = input<string | undefined>()

    onToggle() {
        this.checked.update((isChecked) => !isChecked)
        this.checkedChange.emit(this.checked())
    }

    switchClass = computed(() => {
        return `switch switch-${this.size()}`
    })

    sliderStyle = computed(() => {
        return {
            backgroundColor: this.checked() ? this.trackColor() : '#ccc',
            boxShadow: this.checked() ? `0 0 1px ${this.trackColor()}` : '',
        }
    })
}
