import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  features = [
    { label: 'Full-Stack Capability', description: 'From UI to infrastructure, we own the whole stack.' },
    { label: 'AI-First Thinking', description: 'We embed intelligence into everything we build.' },
    { label: 'Transparent Process', description: 'Weekly updates, shared dashboards, no surprises.' },
    { label: 'Group-Backed Stability', description: 'Supported by CyCsol Group resources and governance.' }
  ];

  stats = [
    { value: 50, suffix: '+', label: 'Projects' },
    { value: 30, suffix: '+', label: 'Clients' },
    { value: 3, suffix: '', label: 'Years Strong' },
    { value: 5, suffix: '', label: 'Industries' }
  ];

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
    this.animationService.animateCountUp('.count-up-stat');
  }
}
