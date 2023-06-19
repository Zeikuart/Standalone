import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';

@Injectable({ providedIn: 'root'})

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  searchData:string = ""

  print() {
    console.log(`Requesting ${this.searchData} to server...`)
  }

}
