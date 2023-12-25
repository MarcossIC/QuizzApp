import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-camre-ring',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>camreRing works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamreRingComponent implements OnInit {

  ngOnInit(): void { }

}
