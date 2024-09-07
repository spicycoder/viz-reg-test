import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
  email: string = '';
  username: string = '';
  password: string = '';

  userInputs: string = '';

  computeInput() {
    this.userInputs = `${this.email} ${this.username}`;
    console.log(this.email);
    console.log(this.username);
    console.log(this.userInputs);
  }
}
