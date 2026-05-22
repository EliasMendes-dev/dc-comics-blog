import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';

@Component({
  selector: 'app-home',
  imports: [MenuBar, MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
