import { Component, inject, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation';

interface ServiceTab {
  id: string;
  label: string;
  dot: string;
  heading: string;
  points: string[];
  tags: string[];
  mock: { title: string; rows: { name: string; meta: string; tone: string }[] };
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  animationService = inject(AnimationService);

  tabs: ServiceTab[] = [
    {
      id: 'web',
      label: 'Web & Mobile',
      dot: 'bg-accent-blue',
      heading: 'Made for products that need to ship.',
      points: [
        'Frontend in Angular, React and Next.js',
        'Backend in .NET, Node.js, Python and PHP',
        'MongoDB, MySQL and SQL Server databases',
        'iOS & Android apps with Ionic, React Native and Flutter'
      ],
      tags: ['Angular', '.NET', 'Flutter'],
      mock: {
        title: 'Release board',
        rows: [
          { name: 'Customer portal', meta: 'Angular · .NET', tone: 'bg-blue-100 text-blue-700' },
          { name: 'Field-sales app', meta: 'Flutter · iOS & Android', tone: 'bg-amber-100 text-amber-700' },
          { name: 'Admin dashboard', meta: 'React · Node.js', tone: 'bg-violet-100 text-violet-700' }
        ]
      }
    },
    {
      id: 'consulting',
      label: 'IT Consulting',
      dot: 'bg-accent-amber',
      heading: 'Made for teams that need a technical partner.',
      points: [
        'Technology strategy and fractional CTO advisory',
        'Cloud migration and infrastructure management',
        'Security reviews and 24/7 technical oversight',
        'Ongoing IT support that scales with you'
      ],
      tags: ['Strategy', 'Cloud', 'Security'],
      mock: {
        title: 'Infrastructure health',
        rows: [
          { name: 'Cloud workloads', meta: 'All services healthy', tone: 'bg-emerald-100 text-emerald-700' },
          { name: 'Security audit', meta: '2 items to review', tone: 'bg-amber-100 text-amber-700' },
          { name: 'Backups', meta: 'Last run 02:00', tone: 'bg-blue-100 text-blue-700' }
        ]
      }
    },
    {
      id: 'design',
      label: 'UI/UX Design',
      dot: 'bg-accent-violet',
      heading: 'Made for experiences people enjoy.',
      points: [
        'Research, wireframes and clickable prototypes',
        'Design systems built in Figma',
        'Brand and high-quality graphic design',
        'Handoff your developers will thank you for'
      ],
      tags: ['Figma', 'Prototyping'],
      mock: {
        title: 'Design review',
        rows: [
          { name: 'Onboarding flow', meta: 'v3 · approved', tone: 'bg-emerald-100 text-emerald-700' },
          { name: 'Dashboard kit', meta: 'In review', tone: 'bg-violet-100 text-violet-700' },
          { name: 'Brand assets', meta: 'Exported', tone: 'bg-blue-100 text-blue-700' }
        ]
      }
    },
    {
      id: 'api',
      label: 'API & Integrations',
      dot: 'bg-accent-rose',
      heading: 'Made for systems that need to talk.',
      points: [
        'Custom REST API development',
        'Third-party and payment integrations',
        'Legacy system connectivity',
        'Monitoring, versioning and clear documentation'
      ],
      tags: ['REST', 'Webhooks'],
      mock: {
        title: 'Integrations',
        rows: [
          { name: 'Payments gateway', meta: 'Connected', tone: 'bg-emerald-100 text-emerald-700' },
          { name: 'CRM sync', meta: 'Syncing every 5 min', tone: 'bg-blue-100 text-blue-700' },
          { name: 'ERP webhook', meta: 'Healthy', tone: 'bg-emerald-100 text-emerald-700' }
        ]
      }
    }
  ];

  activeId = signal('web');
  active = computed(() => this.tabs.find(t => t.id === this.activeId()) ?? this.tabs[0]);

  select(id: string) {
    this.activeId.set(id);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }
}
