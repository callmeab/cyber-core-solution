import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-us" class="section-container bg-bg-primary py-32 overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div class="animate-on-scroll">
          <h2 class="text-5xl md:text-6xl mb-10 font-sora leading-tight">
            Ship Faster with <br/>
            <span class="gradient-text">Enterprise Stability</span>
          </h2>
          <p class="text-text-muted text-lg md:text-xl mb-12 font-inter leading-relaxed">
            We bridge the gap between startup-speed and institutional reliability. As part of the **CyCsol Group of Industries**, we offer a foundation of trust that smaller firms cannot match.
          </p>

          <div class="space-y-8">
            <div class="flex gap-6 p-8 rounded-3xl bg-white/5 card-glow group transition-all duration-500 animate-on-scroll" [style.transition-delay]="'0.1s'">
              <div class="w-14 h-14 shrink-0 rounded-2xl bg-cyan-brand/10 flex items-center justify-center text-cyan-brand font-sora font-extrabold text-2xl border border-cyan-brand/20 group-hover:bg-cyan-brand group-hover:text-bg-primary transition-all duration-300">01</div>
              <div>
                <h4 class="text-2xl font-sora mb-3 text-text-primary">Inherit Group Strength</h4>
                <p class="text-text-muted font-inter text-base leading-relaxed">Your projects are secured by the industrial heritage and financial stability of a global multi-sector conglomerate.</p>
              </div>
            </div>

            <div class="flex gap-6 p-8 rounded-3xl bg-white/5 card-glow group transition-all duration-500 animate-on-scroll" [style.transition-delay]="'0.2s'">
              <div class="w-14 h-14 shrink-0 rounded-2xl bg-violet-brand/10 flex items-center justify-center text-violet-brand font-sora font-extrabold text-2xl border border-violet-brand/20 group-hover:bg-violet-brand group-hover:text-white transition-all duration-300">02</div>
              <div>
                <h4 class="text-2xl font-sora mb-3 text-text-primary">Deploy at Velocity</h4>
                <p class="text-text-muted font-inter text-base leading-relaxed">We move in weeks, not months. Our agile teams specialize in rapid prototyping and iterative value delivery.</p>
              </div>
            </div>

            <div class="flex gap-6 p-8 rounded-3xl bg-white/5 card-glow group transition-all duration-500 animate-on-scroll" [style.transition-delay]="'0.3s'">
              <div class="w-14 h-14 shrink-0 rounded-2xl bg-mint-brand/10 flex items-center justify-center text-mint-brand font-sora font-extrabold text-2xl border border-mint-brand/20 group-hover:bg-mint-brand group-hover:text-bg-primary transition-all duration-300">03</div>
              <div>
                <h4 class="text-2xl font-sora mb-3 text-text-primary">Commit to Quality</h4>
                <p class="text-text-muted font-inter text-base leading-relaxed">Elite engineering talent across modern stacks, focused on clean code, automated testing, and scalable architecture.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative animate-on-scroll lg:pl-10" style="transition-delay: 0.4s">
          <div class="aspect-square glass-panel rounded-[4rem] p-6 relative overflow-hidden group border border-white/10 shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-brand/10 to-violet-brand/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div class="h-full w-full rounded-[3rem] bg-bg-secondary flex flex-col items-center justify-center p-12 text-center border border-white/5 relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                <span class="text-7xl md:text-9xl font-sora font-extrabold text-white mb-6 tracking-tighter shimmer-text">100+</span>
                <span class="text-lg font-sora text-cyan-brand font-bold uppercase tracking-[0.3em] mb-10">Companies in Group</span>
                <p class="text-text-muted text-lg font-inter leading-relaxed px-4 text-center">Benefit from the shared wisdom and industrial expertise of the global CyCsol ecosystem.</p>
                
                <div class="mt-16 w-full flex justify-center gap-6 opacity-40">
                   <div class="h-1.5 w-12 bg-white/10 rounded-full"></div>
                   <div class="h-1.5 w-24 bg-cyan-brand rounded-full shadow-glow-cyan animate-pulse"></div>
                   <div class="h-1.5 w-12 bg-white/10 rounded-full"></div>
                </div>
            </div>
          </div>
          <div class="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-cyan-brand/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        </div>

      </div>
    </section>
  `,
  styles: [``]
})
export class WhyUsComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
