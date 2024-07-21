import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgTemplateOutlet, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userName: string = 'John Doe'

  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;

  loginCount: number = 0;

  // userRole: string = "Admin";
  userRole: string = "Member";

  countLoginAttempts() {
    this.loginCount ++; //* increase the default value by one
    console.log(this.loginCount);
  }

  users: Array<string> = ['John', 'Sam', 'Smith', 'Raj'];

  usersObj: Array<any> = [
    { id: 1, name : 'John', email: 'john@gmail.com' },
    { id: 2, name : 'Smith', email: 'smith@gmail.com' },
    { id: 3, name : 'Sam', email: 'sam@gmail.com' },
    { id: 4, name : 'Raj', email: 'raj@gmail.com' },    
  ]

  addNewUser() {
    let user = { id: 5, name: 'user 1', email: 'user1@gmail.com' };
    this.usersObj.push(user);
  }

  // onDelete(user: object) {
  //   let index = this.usersObj.indexOf(user);
  //   // console.log(index);
  //   this.usersObj.splice(index, 1);
  // }

  onDelete(index: number) {
    this.usersObj.splice(index, 1);
  }

  constructor() {
    console.log(this.usersObj.length)
  }

  usersObjA: Array<any> = []

  addNewUserA() {
    let user = { id: 5, name: 'user 1', email: 'user1@gmail.com' };
    this.usersObjA.push(user);
  }

  // usersRoleA: string = 'Admin';
  usersRoleA: string = '';
}
