import { Article } from './../article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles:Article[];

  ngOnInit(): void {
  }
  sortedArticles(): Article[] { 
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes); 
    }

}
