import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './gallary.html',
  styleUrl: './gallary.scss',
})
export class Gallery {
  phones = [
    { src: 'assets/gallery/phone1.png', title: 'iPhone Blue' },
    { src: 'assets/gallery/phone2.png', title: 'iPhone White' },
  ];

  shots = [
    { src: 'assets/gallery/concept1.png', title: 'Concept Front' },
    { src: 'assets/gallery/concept2.png', title: 'Concept Back' },
  ];
}
