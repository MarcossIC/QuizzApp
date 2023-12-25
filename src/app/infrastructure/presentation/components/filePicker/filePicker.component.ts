import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'file-picker',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>filePicker works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerComponent implements OnInit {

  ngOnInit(): void { }

}
