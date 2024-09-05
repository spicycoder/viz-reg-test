import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { StatsComponent } from "./stats/stats.component";
import { RangeComponent } from './range/range.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, StatsComponent, RangeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'VisualRegressionTest';
}
