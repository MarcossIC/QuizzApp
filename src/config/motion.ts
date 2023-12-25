import { animate, state, style, transition, trigger } from "@angular/animations";


export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    state('left', style({ transform: 'translate(-100%, 0)', opacity: 0 })),
    state('right', style({ transform: 'translate(100%, 0)', opacity: 0 })),
    state('up', style({ transform: 'translate(0, 100%)', opacity: 0 })),
    state('down', style({ transform: 'translate(0, -100%)', opacity: 0 })),
    animate(
      '800ms 200ms ease-out',
      style({
        transform: 'translate(0, 0)',
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '800ms 0ms ease-in',
      style({ transform: 'translate(0, 0)', opacity: 0 })
    ),
  ]),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(
      '100ms 500ms linear',
      style({
        opacity: 1,
      })
    ),
  ]),
  transition('* => void', [
    animate(
      '100ms 0ms linear',
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const headTextAnimation = trigger('headTextAnimation', [
  transition('void => *', [
    style({
      transform: `translate(100% 0)`,
      opacity: 0,
    }),
    animate(
      '300ms 10ms ease',
      style({
        transform: `translate(0 0)`,
        opacity: 1,
      })
    ),
  ]),
]);

export const headContentAnimation = trigger('headContentAnimation', [
  transition('void => *', [
    style({
      transform: `translate(100% 0)`,
      opacity: 0,
    }),
    animate(
      '600ms 200ms ease',
      style({
        transform: `translate(0 0)`,
        opacity: 1,
      })
    ),
  ]),
]);
