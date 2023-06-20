import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  @Output() newSearchEvent: EventEmitter<string> = new EventEmitter<string>()

  // Input Value
  searchData:string = ""
  currentRoute:string = ""
  event$: any 
  constructor(private readonly sidenav: SidenavService,
              private search:SearchService,
              private router: Router) {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {

      if(event instanceof NavigationStart) {
        console.log(event.url)
        this.currentRoute = event.url
        console.log(this.currentRoute)
      }
    });
  }
              
  // Side Navigation Toggler
  public toggleSideNav(): void {
    console.log('Click!')
    this.sidenav.trigger = !this.sidenav.trigger;
  }

  // Emit Input Data
  sendSearchData() {
    console.log('Getting this: ', this.searchData)
    this.newSearchEvent.emit(this.searchData)
  }

  sendingSearchData(): void {
    if( this.currentRoute != "/articles" ) {return}
    this.search.sendClickEvent(this.searchData)
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
