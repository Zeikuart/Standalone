import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from 'src/app/services/sidenav.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() newSearchEvent: EventEmitter<string> = new EventEmitter<string>()

  // Input Value
  searchData:string = ""

  constructor(private readonly sidenav: SidenavService) {}

  ngOnInit(): void {}

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
}
