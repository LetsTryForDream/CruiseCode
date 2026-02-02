import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        redirectTo: 'operator',
        pathMatch: 'full',
    },
    { path: '**', redirectTo: '' },
];
