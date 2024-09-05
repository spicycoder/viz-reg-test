import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title: string = "Confirmation";
  @Input() content: string = "Are you sure you want to cancel? You'll loose all your data.";
  @Input() actions: string[] = ["Ok", "Cancel"];
}
