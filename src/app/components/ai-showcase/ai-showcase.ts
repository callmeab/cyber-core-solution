import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-ai-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="ai-showcase" class="section-container bg-bg-secondary py-32 relative overflow-hidden">
      <!-- Decoration Glow -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-brand/5 blur-[150px] rounded-full"></div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div class="order-2 lg:order-1 animate-on-scroll">
           <!-- Pulsing SVG Node Network -->
           <div class="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
              <svg viewBox="0 0 400 400" class="w-full h-full">
                <!-- Lines -->
                <line x1="200" y1="200" x2="300" y2="100" stroke="rgba(123, 94, 167, 0.2)" stroke-width="2" />
                <line x1="200" y1="200" x2="100" y2="100" stroke="rgba(123, 94, 167, 0.2)" stroke-width="2" />
                <line x1="200" y1="200" x2="150" y2="300" stroke="rgba(123, 94, 167, 0.2)" stroke-width="2" />
                <line x1="200" y1="200" x2="250" y2="300" stroke="rgba(123, 94, 167, 0.2)" stroke-width="2" />
                <line x1="300" y1="100" x2="100" y2="100" stroke="rgba(123, 94, 167, 0.1)" stroke-width="1" stroke-dasharray="5,5" />

                <!-- Nodes -->
                <circle cx="200" cy="200" r="12" fill="#7B5EA7" class="animate-pulse shadow-glow-violet" />
                <circle cx="300" cy="100" r="8" fill="#00D4FF" class="animate-pulse" style="animation-delay: 0.5s" />
                <circle cx="100" cy="100" r="8" fill="#00FFB2" class="animate-pulse" style="animation-delay: 1s" />
                <circle cx="150" cy="300" r="8" fill="#7B5EA7" class="animate-pulse" style="animation-delay: 1.5s" />
                <circle cx="250" cy="300" r="8" fill="#00D4FF" class="animate-pulse" style="animation-delay: 2s" />
              </svg>
           </div>
        </div>

        <div class="order-1 lg:order-2 animate-on-scroll" style="transition-delay: 0.2s">
          <h2 class="text-4xl md:text-5xl mb-8 font-sora leading-tight">Automate Intelligence <br/> <span class="gradient-text">Into Your Core</span></h2>
          <p class="text-text-muted text-lg mb-10 font-inter leading-relaxed">
            We don't just add AI; we engineer intelligence into your proprietary systems. From automating manual workflows to training custom models, we build tech that thinks.
          </p>
          
          <div class="space-y-6">
            <div class="card-glow p-6 rounded-2xl bg-white/5 flex gap-5 items-start">
               <div class="p-3 rounded-xl bg-violet-brand/10 border border-violet-brand/20 text-violet-brand">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 18c-4.418 0-8-3.582-8-8a8 8 0 1116 0c0 4.418-3.582 8-8 8z"/></svg>
               </div>
               <div>
                  <h4 class="font-sora text-text-primary text-xl mb-1">Accelerate Training</h4>
                  <p class="text-text-muted text-sm font-inter">Proprietary vision and language models designed for your unique dataset.</p>
               </div>
            </div>

            <div class="card-glow p-6 rounded-2xl bg-white/5 flex gap-5 items-start">
               <div class="p-3 rounded-xl bg-cyan-brand/10 border border-cyan-brand/20 text-cyan-brand">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
               </div>
               <div>
                  <h4 class="font-sora text-text-primary text-xl mb-1">Optimize Decisions</h4>
                  <p class="text-text-muted text-sm font-inter">Automate complex decision-making processes with enterprise-scale predictive systems.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [``]
})
export class AiShowcaseComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
