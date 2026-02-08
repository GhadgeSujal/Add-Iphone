import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Features } from './pages/features/features';
import { Gallery } from './pages/gallary/gallary';
import { Buy } from './pages/buy/buy';
import { Contact } from './pages/contact/contact';
// import { App } from './app';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'features', component: Features },
  { path: 'gallary', component: Gallery },
  { path: 'buy', component: Buy },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
