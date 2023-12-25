import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, type OnInit } from '@angular/core';
import { StoreService } from 'src/app/application/store/store.service';

@Component({
  selector: 'custom-button',
  standalone: true,
  inputs: ['text', 'type:typeButton', 'customStyle'],
  outputs: ['handleClick'],
  template: `
    <button
      class="px-2 py-1.5 flex-1 rounded-md {{ customStyle }}"
      (click)="onClick()"
      [ngClass]="{ filled: type === 'filled' }"
      style="--bg: {{ store.state().color }}"
    >
      {{ text }}
    </button>
  `,
  styles: [
    `
      .filled {
        background-color: var(--bg);
        color: #fff;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class CustomButtonComponent implements OnInit {
  public text: string = '';
  public type: string = '';
  public customStyle: string = '';
  handleClick: EventEmitter<void> = new EventEmitter();

  constructor(public store: StoreService) {}

  ngOnInit(): void {}

  onClick() {
    this.handleClick.emit();
  }
}
