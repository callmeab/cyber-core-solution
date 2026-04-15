import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;
  private countObservers: IntersectionObserver | null = null;

  observeElements(selector: string) {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(selector).forEach(el => {
      this.observer?.observe(el);
    });
  }

  animateCountUp(selector: string) {
    if (typeof window === 'undefined') return;

    this.countObservers = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const endValue = parseInt(target.getAttribute('data-count') || '0');
          this.startCount(target, endValue);
          this.countObservers?.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(selector).forEach(el => {
      this.countObservers?.observe(el);
    });
  }

  private startCount(el: HTMLElement, endValue: number) {
    let startValue = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / endValue));
    
    const timer = setInterval(() => {
      startValue += Math.ceil(endValue / 100);
      if (startValue >= endValue) {
        el.innerText = endValue.toLocaleString() + (el.getAttribute('data-suffix') || '');
        clearInterval(timer);
      } else {
        el.innerText = startValue.toLocaleString() + (el.getAttribute('data-suffix') || '');
      }
    }, 20);
  }
}
