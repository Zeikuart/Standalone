import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const routes: Routes = [
    // Default
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    // Dashboard
    { path: 'dashboard', component: DashboardComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'clients', component: ClientsComponent }
];
