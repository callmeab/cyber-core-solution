import { Component, inject, AfterViewInit, ElementRef, ViewChild, OnDestroy, signal } from '@angular/core';
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
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  animationService = inject(AnimationService);
  
  typewriterText = signal('');
  private words = [
    'Web & Mobile Applications.',
    'AI-Powered Platforms.',
    'IT Consulting & Strategy.'
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterInterval: any;
  private animationId: number = 0;

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
    this.startTypewriter();
    this.initParticles();
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterInterval);
    cancelAnimationFrame(this.animationId);
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

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      size = Math.random() * 2 + 1;
      speedX = Math.random() * 0.5 - 0.25;
      speedY = Math.random() * 0.5 - 0.25;

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 212, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      this.animationId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();
  }
}
