import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimationService } from './core/services/animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  private animationService = inject(AnimationService);

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.observeElements('.animate-on-scroll');
      this.animationService.animateCountUp('.count-up-aff');
      this.animationService.animateCountUp('.count-up-stat');
    }, 500);
  }
}
