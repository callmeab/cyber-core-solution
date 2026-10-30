import { Component, inject, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  animationService = inject(AnimationService);

  typewriterText = signal('');
  private words = [
    'web & mobile applications.',
    'AI-powered platforms.',
    'IT consulting & strategy.'
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterInterval: any;

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
    this.startTypewriter();
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterInterval);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private startTypewriter() {
    const type = () => {
      const currentWord = this.words[this.wordIndex];

      if (this.isDeleting) {
        this.typewriterText.set(currentWord.substring(0, this.charIndex - 1));
        this.charIndex--;
      } else {
        this.typewriterText.set(currentWord.substring(0, this.charIndex + 1));
        this.charIndex++;
      }

      let typeSpeed = this.isDeleting ? 30 : 80;

      if (!this.isDeleting && this.charIndex === currentWord.length) {
        typeSpeed = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        typeSpeed = 500;
      }

      this.typewriterInterval = setTimeout(type, typeSpeed);
    };

    type();
  }
}
