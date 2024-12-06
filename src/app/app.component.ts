import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pwd';
  password = '';

  passwordLength = 0;
  handleChangePasswordLength = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    console.log(typeof value);
    this.passwordLength = Number(value);
  };

  useLetters = false;
  handleUseLetters = () => (this.useLetters = !this.useLetters);

  useNumbers = false;
  handleUseNumbers = () => (this.useNumbers = !this.useNumbers);

  useSymbols = false;
  handleUseSymbols = () => (this.useSymbols = !this.useSymbols);

  /**Generate password.*/
  onButtonClick() {
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
    this.password = 'Password!!!';
  }
}
