import { Routes } from '@angular/router';

export const routes: Routes = [
    // Default
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    // Dashboard
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
    // Articles
    { path: 'articles', loadComponent: () => import('./pages/articles/articles.component').then((m) => m.ArticlesComponent) },
    // Clients
    { path: 'clients', loadComponent: () => import('./pages/clients/clients.component').then((m) => m.ClientsComponent) }
];
