import { Component, OnInit } from '@angular/core';
import {NavbarItem} from "../../model/navbar-item";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items: NavbarItem[] = [
    {
      item: 'Home',
      url: '/',
    },
    {
      item: 'Przepisy',
      url: '/recipe',
    },
    {
      item: 'Kontakt',
      url: '/contact',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
