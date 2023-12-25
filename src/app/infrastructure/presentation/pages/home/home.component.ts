import { trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '@components/customButton/customButton.component';
import { StoreService } from 'src/app/application/store/store.service';
import { fadeAnimation, headContentAnimation, headTextAnimation, slideInOut } from 'src/config/motion';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(protected store: StoreService, private router: Router) {}
  ngOnInit(): void {
      this.store.state.update((current) => ({
      ...current,
      intro: true,
    }));

  }

  click(){
    this.store.state.update((current) => ({ ...current, intro: false }));

    this.router.navigate(['/customizer']);
  }
}
