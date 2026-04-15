import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  services = [
    {
      title: 'Web & Mobile Development',
      icon: 'monitor',
      description: 'Custom web and mobile applications built with modern technologies.',
      tech: {
        frontend: 'Angular, React, Next.js',
        backend: '.NET, Node.js, Python, PHP',
        database: 'MongoDB, MySQL, SQL Server',
        mobile: 'Ionic, React Native, Flutter (iOS & Android)'
      }
    },
    {
      title: 'IT Consulting & Managed Services',
      icon: 'network',
      description: 'Technology strategy, infrastructure management, cloud solutions, and ongoing IT support to help businesses scale efficiently.'
    },
    {
      title: 'UI/UX & Graphic Design',
      icon: 'figma',
      description: 'Modern UI/UX design, wireframing, prototyping, and high-quality graphic design using tools like Figma.'
    }
  ];

  bottomServices = [
    {
      title: 'API & Integrations',
      icon: 'plug',
      description: 'Seamless third-party integrations, REST APIs, and system connectivity for enhanced functionality.'
    }
  ];

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
