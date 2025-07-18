import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName:string = "Angular";
  productPrice:number = 12500;
  inputType : string = "checkbox";
  myClassName : string = "myColor";

  showWelcomeMessage() {
    alert("Welcome to Angular Tutorial");
  }
}
