import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-ai-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="ai-showcase" class="light-page bg-paper py-28 px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Chat mockup -->
        <div class="relative animate-on-scroll order-2 lg:order-1">
          <div class="mock-card overflow-hidden">
            <div class="flex items-center gap-2 px-5 py-4 border-b border-line">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-amber to-accent-rose inline-block"></span>
              <span class="font-bold text-sm text-ink">CodeByte AI</span>
              <span class="ml-auto text-[10px] font-bold uppercase tracking-widest text-accent-green">● Online</span>
            </div>
            <div class="p-5 space-y-4 text-sm">
              <div class="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-navy text-white px-4 py-3">
                Review our order-processing workflow and find what to automate.
              </div>
              <div class="max-w-[90%] rounded-2xl rounded-bl-sm bg-paper text-ink px-4 py-3 space-y-2">
                <p>I found <b>3 steps</b> worth automating:</p>
                <ul class="space-y-1.5 text-[13px]">
                  <li class="flex gap-2"><span class="text-accent-rose">●</span> Manual invoice matching</li>
                  <li class="flex gap-2"><span class="text-accent-amber">●</span> Duplicate data entry across 2 tools</li>
                  <li class="flex gap-2"><span class="text-accent-blue">●</span> Stock alerts sent by hand</li>
                </ul>
                <p class="text-accent-green font-bold text-[13px]">Estimated ~12 hours saved per week.</p>
              </div>
            </div>
          </div>
          <div class="float-slower mock-card absolute -top-6 -right-2 lg:-right-8 px-4 py-3 rotate-2">
            <p class="text-[10px] font-bold tracking-widest uppercase text-accent-violet">Custom model</p>
            <p class="font-extrabold text-ink text-sm">Training · 92% accuracy</p>
          </div>
        </div>

        <div class="animate-on-scroll order-1 lg:order-2" style="transition-delay: 0.15s">
          <span class="eyebrow mb-5"><span class="eyebrow-dot bg-accent-violet"></span>AI &amp; Data</span>
          <h2 class="h-display text-5xl md:text-6xl mt-4 mb-6">
            A partner that actually <span class="h-light">thinks ahead.</span>
          </h2>
          <p class="text-lg text-slate-soft leading-relaxed mb-8 max-w-xl">
            We don't just add AI; we engineer intelligence into your own systems. From automating manual workflows to training custom models, we build technology that learns, adapts and decides.
          </p>

          <div class="grid grid-cols-2 gap-3 mb-10 max-w-lg">
            <div *ngFor="let c of capabilities" class="flex items-center gap-2.5 rounded-xl bg-white border border-line px-4 py-3 text-sm font-semibold text-ink">
              <span class="eyebrow-dot" [ngClass]="c.dot"></span>{{ c.label }}
            </div>
          </div>

          <a class="link-arrow" (click)="scrollTo('contact')">Explore AI solutions <span>→</span></a>
        </div>

      </div>
    </section>
  `,
  styles: [``]
})
export class AiShowcaseComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  capabilities = [
    { label: 'Workflow automation', dot: 'bg-accent-blue' },
    { label: 'Custom ML models', dot: 'bg-accent-violet' },
    { label: 'Predictive analytics', dot: 'bg-accent-amber' },
    { label: 'AI assistants', dot: 'bg-accent-rose' }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
