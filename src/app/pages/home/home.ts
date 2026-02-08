import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


type Slide = {
  theme: 'orange' | 'blue' | 'white';
  img: string;
};

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],      
    animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit, OnDestroy {
  private timerId?: number;

  defaultImg = 'assets/gallery/iphone-orange.png';

  private readonly slides: Slide[] = [
    { theme: 'orange', img: 'assets/gallery/iphone-orange.png' },
    { theme: 'blue',   img: 'assets/gallery/iphone-blue.png' },
    { theme: 'white',  img: 'assets/gallery/iphone-white.png' },
  ];

  index = 0;
  currentIphoneSrc = this.slides[0].img;
  theme = this.slides[0].theme;
  isFading = false;

  ngOnInit(): void {
    // preload images
    this.slides.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });

    this.timerId = window.setInterval(() => {
      this.index = (this.index + 1) % this.slides.length;
      this.currentIphoneSrc = this.slides[this.index].img;
      this.theme = this.slides[this.index].theme;
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }
}
