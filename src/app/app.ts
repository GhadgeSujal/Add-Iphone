import { AfterViewInit, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  Router,
  RouterOutlet,
  ChildrenOutletContexts,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

import { routeAnimations } from './route-animations';

declare const AOS: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations],
})
export class App implements AfterViewInit {
  loading = false;

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
      this.router.events.subscribe((e) => {
  if (e instanceof NavigationStart) this.loading = true;

  if (e instanceof NavigationEnd) {
    setTimeout(() => {
      this.loading = false;
      
  
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard(); 
        }
      }, 100); 
    }, 150);
  }
});
  }

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 900, once: true, offset: 120, easing: 'ease-out-cubic' });
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.routeConfig?.path;
  }
}
