import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-ai-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-showcase.component.html',
  styleUrl: './ai-showcase.component.css'
})
export class AiShowcaseComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  capabilities = [
    'Predictive Analytics',
    'Natural Language Processing',
    'Automated Decision Systems',
    'Computer Vision',
    'Data Pipeline Engineering'
  ];

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
