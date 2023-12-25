import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AiPickerComponent } from '@components/aiPicker/aiPicker.component';
import { ColorPickerComponent } from '@components/colorPicker/colorPicker.component';
import { CustomButtonComponent } from '@components/customButton/customButton.component';
import { FilePickerComponent } from '@components/filePicker/filePicker.component';
import { TabComponent } from '@components/tab/tab.component';
import { StoreService } from 'src/app/application/store/store.service';
import { EditorTabs, FilterTabs, Tab } from 'src/app/domain';

@Component({
  selector: 'app-customaizer',
  standalone: true,
  imports: [
    CommonModule,
    AiPickerComponent,
    ColorPickerComponent,
    FilePickerComponent,
    TabComponent,
    CustomButtonComponent,
  ],
  templateUrl: './customaizer.component.html',
  styleUrls: ['./customaizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomaizerComponent implements OnInit {
  public EditorTabs: Tab[] = EditorTabs;
  public FilterTabs: Tab[] = FilterTabs;

  constructor(protected store: StoreService, private router: Router) {}
  ngOnInit(): void {
          this.store.state.update((current) => ({
            ...current,
            intro: false,
          }));
  }
  goBack() {
    this.store.state.update((current) => ({
      ...current,
      intro: true,
    }));

    this.router.navigate(['/']);
  }
}
