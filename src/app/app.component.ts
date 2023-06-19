import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidenavComponent, HeaderComponent, RouterOutlet, ArticlesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Standalone';

  searchData:string = ""

  store(value: string) {
    this.searchData = value
  }

  print() {
    console.log('Search Data: ', this.searchData)
  }
}
