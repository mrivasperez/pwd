import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  title = 'pwd';
  password = '';

  passwordLength = 0;
  handleChangePasswordLength = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  };

  useLetters = false;
  handleUseLetters = () => (this.useLetters = !this.useLetters);

  useNumbers = false;
  handleUseNumbers = () => (this.useNumbers = !this.useNumbers);

  useSymbols = false;
  handleUseSymbols = () => (this.useSymbols = !this.useSymbols);

  /**Generate password.*/
  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) validChars += letters;
    if (this.useNumbers) validChars += numbers;
    if (this.useSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
