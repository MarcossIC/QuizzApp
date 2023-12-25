import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'ai-picker',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aiPicker.component.html',
  styleUrls: ['./aiPicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiPickerComponent implements OnInit {

  ngOnInit(): void { }

}
