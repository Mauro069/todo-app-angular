import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  template: `<svg
    [ngClass]="{ svg: !open, active: open }"
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill="#2c2c2c"
  >
    <path
      d="M1.2505 5.07401L4.08408 2.26019L6.91767 5.07401C7.20249 5.35684 7.66258 5.35684 7.9474 5.07401C8.23222 4.79118 8.23222 4.33429 7.9474 4.05146L4.5953 0.722746C4.31048 0.439914 3.85039 0.439914 3.56557 0.722746L0.213471 4.05146C-0.0713481 4.33429 -0.0713482 4.79118 0.21347 5.07401C0.498289 5.34959 0.965684 5.35684 1.2505 5.07401Z"
      fill="white"
    ></path>
  </svg>`,

  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent {
  @Input() open?: boolean;
}
