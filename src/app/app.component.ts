import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AiShowcaseComponent } from './components/ai-showcase/ai-showcase.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AffiliationComponent } from './components/affiliation/affiliation.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimationService } from './core/services/animation';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyUsComponent,
    AiShowcaseComponent,
    PortfolioComponent,
    AffiliationComponent,
    ContactComponent,
    Footer
],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  private animationService = inject(AnimationService);

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.observeElements('.animate-on-scroll');
      this.animationService.animateCountUp('.count-up-aff');
      this.animationService.animateCountUp('.count-up-stat');
    }, 500);
  }
}
