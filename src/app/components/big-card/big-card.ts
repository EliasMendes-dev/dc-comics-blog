import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css']
})
export class BigCard implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  Id: string = "0";

  @Input()
  cardDate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
