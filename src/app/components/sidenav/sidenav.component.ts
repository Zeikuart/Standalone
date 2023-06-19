import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import { navItems } from './nav-data';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  desktop:boolean = true
  // Sidenav items
  navItems = navItems

  constructor( private readonly sidenav: SidenavService) {}

  // Get Trigger Value
  public get sideNavState() {
    return this.sidenav.trigger
  }
  // Close SideNav
  public closeSideNav(): void {
    this.sidenav.trigger = false
  }
  // Collapse Trigger
  collapseToggle(index:any): void{
    console.log("Index: ", index)
    
    if (!this.navItems[index]) { return }
    this.navItems[index].toggle = !this.navItems[index].toggle
    
  }


}
