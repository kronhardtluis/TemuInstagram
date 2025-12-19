import { Routes } from '@angular/router';
import { Mainpage } from './components/mainpage/mainpage';
import { Contactpage } from './components/contactpage/contactpage';

export const routes: Routes = [
    {path:'', component:Mainpage},
    {path:'contact', component:Contactpage}
];
