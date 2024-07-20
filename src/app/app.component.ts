import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'this loaded dynamically';
  imgURL: string = 'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?auto=webp&s=6611d9c403cb948d1caf33e595f129bd18d745e3';

  isDisabled: boolean = true;
  isActive: boolean = true;

  fruitName: string = 'apple';

  userName: string = 'John Doe';

  textValue: string = 'Value is comming from the component'

  buttonClick() {
    console.log('button clicked')
  }

  keyEnter() {
    console.log('key pressed')
  }

  // keyEnterJs(event:object) {
  //   console.log(event);
  // }
  keyEnterJs(event:any) {
    // console.log(event.keyCode);
    if(event.keyCode == 13){
      console.log('Enter Key Pressed')
    }
  }

  keyupFiltering() {
    console.log('KeyUp Filtering')
  }
  
  keyupFilteringA(user:HTMLInputElement) {
    console.log(user.value)
    console.log(user.id)
  }

  updateUserName(username:HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }

  onKeyUpDataOne() {
    console.log(this.textValue);
  }
  onKeyUpDataTwo() {
    console.log(this.textValue);
  }
}
