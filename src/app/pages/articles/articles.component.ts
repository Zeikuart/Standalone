import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

}
