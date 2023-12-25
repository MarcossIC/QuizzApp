import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, type OnInit } from '@angular/core';
import { Tab } from 'src/app/domain';

@Component({
  selector: 'tab',
  standalone: true,
  inputs: ['tab', 'isFillterTab', 'isActiveTab'],
  outputs: ['handleClick'],
  template: `
    <div
      class="tab-btn"
      [ngClass]="{
        'rounded-full glassmorphism': isFillterTab,
        'rounded-4': !isFillterTab
      }"
      (click)="handleClick.emit(tab.name)"
    >
      <img
        src="{{ tab.icon }}"
        alt="{{ tab.name }}"
        [ngClass]="{
          'w-2/3 h-2/3': isFillterTab,
          'w-11/12 h-11/12 object-contain': !isFillterTab
        }"
      />
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TabComponent implements OnInit {
  public tab: Tab = {} as Tab;
  public isFillterTab: boolean = false;
  public isActiveTab: string = '';

  public handleClick: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}
}
