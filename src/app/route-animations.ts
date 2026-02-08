import { trigger, transition, style, query, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),

    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),

    query(
      ':leave',
      [
        style({ opacity: 1, transform: 'translateY(0px) scale(1)' }),
        animate('240ms ease-in', style({ opacity: 0, transform: 'translateY(8px) scale(0.995)' })),
      ],
      { optional: true }
    ),

    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(10px) scale(0.995)' }),
        animate('340ms 40ms ease-out', style({ opacity: 1, transform: 'translateY(0px) scale(1)' })),
      ],
      { optional: true }
    ),
  ]),
]);
