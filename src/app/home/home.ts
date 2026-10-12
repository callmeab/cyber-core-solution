import { Component, inject } from '@angular/core';
import { SeoService } from '../core/services/seo';
import { HeroComponent } from "../components/hero/hero.component";
import { ServicesComponent } from "../components/services/services.component";
import { WhyUsComponent } from "../components/why-us/why-us";
import { AiShowcaseComponent } from "../components/ai-showcase/ai-showcase";
import { PortfolioComponent } from "../components/portfolio/portfolio.component";
import { AffiliationComponent } from "../components/affiliation/affiliation.component";
import { ContactComponent } from "../components/contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, WhyUsComponent, AiShowcaseComponent, PortfolioComponent, AffiliationComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    inject(SeoService).update({
      title: 'CodeByte | Software House for Web, Mobile App & AI Development',
      description: 'CodeByte is a software house building custom web applications, mobile apps, ERP/SaaS platforms and AI solutions for growing businesses. Get a free consultation.',
      path: '/',
    });
  }
}
