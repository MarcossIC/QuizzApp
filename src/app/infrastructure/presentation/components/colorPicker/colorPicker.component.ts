import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'color-picker',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './colorPicker.component.html',
  styleUrls: ['./colorPicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements OnInit {

  ngOnInit(): void { }

}
