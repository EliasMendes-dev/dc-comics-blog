import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.html',
  styleUrls: ['./small-card.css']
})
export class SmallCard implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  Id: string = "0";

  @Input()
  cardDate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
