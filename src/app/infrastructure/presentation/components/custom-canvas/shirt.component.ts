import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>shirt works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShirtComponent implements OnInit {

  ngOnInit(): void { }

}
