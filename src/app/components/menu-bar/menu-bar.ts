import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.css'],
})
export class MenuBar implements OnInit {
  isincontentpage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkIfInContentPage();
    // Verificar mudanças de rota
    this.router.events.subscribe(() => {
      this.checkIfInContentPage();
    });
  }

  private checkIfInContentPage(): void {
    this.isincontentpage = this.router.url.includes('/content');
  }
}
