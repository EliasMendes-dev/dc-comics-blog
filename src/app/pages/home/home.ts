import { Component, OnInit } from '@angular/core';
import { BigCard } from '../../components/big-card/big-card';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { SmallCard } from '../../components/small-card/small-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitle,
    BigCard,
    SmallCard
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
