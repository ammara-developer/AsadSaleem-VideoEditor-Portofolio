import { Routes } from '@angular/router';
import { Video } from './features/video/video';
import{ Fitness } from './categories/fitness/fitness';

export const routes: Routes = [
     { path: '', component: Video, pathMatch: 'full' },
    {path:'fitness', component: Fitness}
];
