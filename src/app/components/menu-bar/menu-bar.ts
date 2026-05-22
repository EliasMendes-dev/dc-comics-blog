import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.css'],
})
export class MenuBar implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
