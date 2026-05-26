import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

interface Article {
  id: string;
  photoCover: string;
  title: string;
  description: string;
  date: string;
  news: string;
}

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  contentDate: string = '';
  contentNews: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    if (!id) {
      return;
    }

    const result: Article | undefined = dataFake.find(
      (article: Article) => article.id === id
    );

    if (!result) {
      return;
    }

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
    this.contentDate = result.date;
    this.contentNews = result.news;
  }
}
