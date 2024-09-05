import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html'
})
export class StatsComponent {
  @Input() statistics: {title: string, value: string}[] = [
    {
      title: 'Orders in 3 months',
      value: '108'
    },
    {
      title: 'Samples in 3 months',
      value: '1,800'
    },
    {
      title: 'Average Samples per Order',
      value: '17'
    }
  ];
}
