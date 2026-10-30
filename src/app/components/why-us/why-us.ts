import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-us" class="light-page bg-white py-28 px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div class="animate-on-scroll">
          <span class="eyebrow mb-5"><span class="eyebrow-dot bg-accent-blue"></span>Why CodeByte</span>
          <h2 class="h-display text-5xl md:text-6xl mt-4 mb-6">
            Built different, <span class="h-light">delivered better.</span>
          </h2>
          <p class="text-lg text-slate-soft leading-relaxed mb-10 max-w-xl">
            We bridge startup speed and institutional reliability. As part of the CyCsol Group of Industries, you get a foundation of trust that smaller firms cannot match.
          </p>

          <div class="space-y-6 mb-10">
            <div *ngFor="let f of features; let i = index" class="flex gap-4 animate-on-scroll" [style.transition-delay]="(0.1 * i) + 's'">
              <span class="mt-1 w-7 h-7 shrink-0 rounded-full bg-ink text-white text-xs font-bold flex items-center justify-center">{{ i + 1 }}</span>
              <div>
                <h4 class="font-bold text-ink">{{ f.title }}</h4>
                <p class="text-slate-soft text-sm leading-relaxed">{{ f.text }}</p>
              </div>
            </div>
          </div>

          <a class="link-arrow" (click)="scrollTo('contact')">Work with us <span>→</span></a>
        </div>

        <!-- Stat card cluster -->
        <div class="relative animate-on-scroll" style="transition-delay: 0.2s">
          <div class="mock-card p-8">
            <p class="text-[10px] font-bold tracking-widest uppercase text-accent-amber">Delivery snapshot</p>
            <p class="font-[family-name:var(--font-display)] font-extrabold text-2xl text-ink mb-6">CodeByte · at a glance</p>
            <div class="grid grid-cols-2 gap-4">
              <div *ngFor="let s of stats" class="rounded-xl border border-line p-5">
                <div class="count-up-stat font-[family-name:var(--font-display)] font-extrabold text-4xl text-ink"
                     [attr.data-count]="s.value" [attr.data-suffix]="s.suffix">0</div>
                <div class="text-xs uppercase tracking-widest font-semibold text-slate-soft mt-1">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <div class="float-slow mock-card absolute -bottom-8 -left-4 lg:-left-10 w-56 p-4 -rotate-2">
            <p class="text-[10px] font-bold tracking-widest uppercase text-accent-green">Group backed</p>
            <p class="font-[family-name:var(--font-display)] font-extrabold text-ink text-lg">100+ companies</p>
            <p class="text-xs text-slate-soft">in the CyCsol ecosystem</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [``]
})
export class WhyUsComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  features = [
    { title: 'Full-stack capability', text: 'From UI to infrastructure, we own the whole stack.' },
    { title: 'AI-first thinking', text: 'We embed intelligence into everything we build.' },
    { title: 'Transparent process', text: 'Weekly updates, shared dashboards, no surprises.' },
    { title: 'Group-backed stability', text: 'Supported by CyCsol Group resources and governance.' }
  ];

  stats = [
    { value: 50, suffix: '+', label: 'Projects' },
    { value: 30, suffix: '+', label: 'Clients' },
    { value: 3, suffix: '', label: 'Years strong' },
    { value: 5, suffix: '', label: 'Industries' }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
    this.animationService.animateCountUp('.count-up-stat');
  }
}
