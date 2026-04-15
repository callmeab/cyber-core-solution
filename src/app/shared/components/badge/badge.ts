import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/10">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" [ngClass]="colorClass"></span>
        <span class="relative inline-flex rounded-full h-2 w-2" [ngClass]="colorClass"></span>
      </span>
      <span class="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
        <ng-content></ng-content>
      </span>
    </div>
  `,
  styles: [``]
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'accent';

  get colorClass() {
    switch (this.variant) {
      case 'primary': return 'bg-brand-primary';
      case 'secondary': return 'bg-brand-secondary';
      default: return 'bg-brand-accent';
    }
  }
}
