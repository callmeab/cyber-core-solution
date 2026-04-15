import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-affiliation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affiliation.component.html',
  styleUrl: './affiliation.component.css'
})
export class AffiliationComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
    this.animationService.animateCountUp('.count-up-aff');
  }
}
