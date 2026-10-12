import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo';

interface LegalSection { heading: string; body: string[]; }

const EMAIL = 'info@codebyte.tech';
const UPDATED = 'October 2026';

const DOCS: Record<string, { title: string; description: string; intro: string; sections: LegalSection[] }> = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How CodeByte collects and uses information submitted through codebyte.tech.',
    intro: 'This policy explains what information CodeByte ("we", "us") collects through codebyte.tech and how we use it.',
    sections: [
      { heading: 'Information we collect', body: [
        'When you use our contact form or message us on WhatsApp or email, we receive the details you choose to share: your name, email address, the service you are interested in, and your project brief.',
        'Like most websites, basic technical data (such as browser type and pages visited) may be recorded by our hosting provider in standard server logs.' ] },
      { heading: 'How we use it', body: [
        'We use your information only to respond to your enquiry, prepare proposals, and communicate about work you ask us to do. We do not sell your information.' ] },
      { heading: 'Sharing', body: [
        'We may share information with service providers that help us operate our website and communications, or where required by law. Our parent company, CyCsol Group, may be involved in enquiries where relevant to the engagement.' ] },
      { heading: 'Retention and your rights', body: [
        'We keep enquiry details for as long as needed to handle your request and our business records. You may ask us to access, correct or delete your information at any time.' ] },
      { heading: 'Third-party links', body: [
        'Our site links to third-party services such as WhatsApp, LinkedIn and Instagram. Their privacy practices are their own.' ] },
      { heading: 'Contact', body: [ `Questions about this policy: ${EMAIL}.` ] },
    ],
  },
  terms: {
    title: 'Terms of Service',
    description: 'Terms governing the use of the CodeByte website and enquiries.',
    intro: 'By using codebyte.tech you agree to these terms. They apply to this website and to enquiries made through it.',
    sections: [
      { heading: 'Use of the website', body: [
        'The content on this site is provided for general information about CodeByte and its services. You agree not to misuse the site or attempt to disrupt it.' ] },
      { heading: 'Services and proposals', body: [
        'Submitting an enquiry does not create a contract. Any engagement is governed by a separate written proposal or agreement that sets out scope, timelines and fees.' ] },
      { heading: 'Intellectual property', body: [
        'The CodeByte name, logo and site content belong to CodeByte. Project names and screenshots in our portfolio belong to their respective owners and are shown with their permission or in anonymised form.' ] },
      { heading: 'Disclaimer', body: [
        'The site is provided "as is". We aim to keep information accurate but make no warranty that it is complete or error-free, and we are not liable for losses arising from use of the site.' ] },
      { heading: 'Changes', body: [
        'We may update these terms from time to time. Continued use of the site means you accept the updated terms.' ] },
      { heading: 'Contact', body: [ `Questions about these terms: ${EMAIL}.` ] },
    ],
  },
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="min-h-screen bg-bg-primary py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <a routerLink="/" class="text-cyan-brand font-sora text-sm hover:underline">← Back to CodeByte</a>
        <h1 class="text-4xl md:text-5xl font-sora font-bold text-white mt-8 mb-4">{{ doc.title }}</h1>
        <p class="text-text-muted text-sm mb-8">Last updated: {{ updated }}</p>
        <p class="text-text-muted font-inter leading-relaxed mb-10">{{ doc.intro }}</p>
        @for (s of doc.sections; track s.heading) {
          <section class="mb-8">
            <h2 class="text-xl font-sora font-semibold text-text-primary mb-3">{{ s.heading }}</h2>
            @for (p of s.body; track p) {
              <p class="text-text-muted font-inter leading-relaxed mb-3">{{ p }}</p>
            }
          </section>
        }
      </div>
    </main>
  `,
})
export class LegalComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  updated = UPDATED;
  doc = DOCS[this.route.snapshot.data['doc']] ?? DOCS['privacy'];

  ngOnInit() {
    window.scrollTo(0, 0);
    this.seo.update({
      title: `${this.doc.title} | CodeByte`,
      description: this.doc.description,
      path: this.route.snapshot.routeConfig?.path ? `/${this.route.snapshot.routeConfig.path}` : '/privacy',
    });
  }
}
