import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    // template: `<h1>Navbar component</h1>
    //         <p>Dummy paragraph</p>
    //         <button>Submit</button>
    //         `,
    // styles: `h1{
    //     color: red;
    //     background: black
    // }
    // `,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class AppNavbar {}