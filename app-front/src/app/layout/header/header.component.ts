import { Component, OnInit } from '@angular/core';
import { faBars, faPenToSquare, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    faBars = faBars;
    faPenToSquare = faPenToSquare;
    faCartShopping = faCartShopping;
    faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
