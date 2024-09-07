import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { StatsComponent } from "./stats/stats.component";
import { RangeComponent } from './range/range.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    StatsComponent,
    RangeComponent,
    FormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'VisualRegressionTest';
}
