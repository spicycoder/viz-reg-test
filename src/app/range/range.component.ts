import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './range.component.html'
})
export class RangeComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number = 40;
}
