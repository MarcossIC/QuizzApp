import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>backdrop works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackdropComponent implements OnInit {

  ngOnInit(): void { }

}
