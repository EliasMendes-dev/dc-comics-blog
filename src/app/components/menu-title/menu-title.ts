import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  templateUrl: './menu-title.html',
  styleUrls: [
    './menu-title.css',
    './menu-title.responsive.css'
  ]
})
export class MenuTitle implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
