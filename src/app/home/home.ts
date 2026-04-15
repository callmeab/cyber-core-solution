import { Component } from '@angular/core';
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
export class Home {}
