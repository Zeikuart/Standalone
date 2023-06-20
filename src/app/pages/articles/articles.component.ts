import { Component, Injectable, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root'})

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnDestroy{

  searchData:string = ""
  clickEventSub:Subscription

  constructor(private search:SearchService, private route: ActivatedRoute) {
    
    this.clickEventSub =  this.search.getClickEvent().subscribe((searchData:string)=>{
      console.log("Searching: ", searchData)
      this.searchData = searchData
      this.print()
      
    })
  }

  print() {

    console.log(`Requesting ${this.searchData} to server...`) 
  }

  ngOnDestroy() {
    this.clickEventSub.unsubscribe();
  }

}
