import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from 'src/app/components/maintenance/maintenance.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, MaintenanceComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

}
