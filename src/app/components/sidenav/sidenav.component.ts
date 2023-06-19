import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  sales:boolean = false
  desktop:boolean = true

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
  collapseToggle(id:string){
    if (id === 'sales'){this.sales = !this.sales}
  }


}
