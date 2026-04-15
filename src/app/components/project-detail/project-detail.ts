import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project, ProjectsService } from '../../core/services/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  project!: Project;
  relatedProjects: Project[] = [];
  selectedImage: string = '';
  imageChanging = false;

  techGroups = [
    { key: 'frontend', label: 'Frontend', color: 'cyan' },
    { key: 'backend', label: 'Backend', color: 'violet' },
    { key: 'database', label: 'Database', color: 'amber' },
    { key: 'devops', label: 'DevOps & Tools', color: 'mint' },
  ];

  private observer!: IntersectionObserver;
  private countObserver!: IntersectionObserver;
  private counted = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const found = this.projectsService.getById(id);
      if (!found) { this.router.navigate(['/']); return; }
      this.project = found;
      this.selectedImage = found.images[0];
      this.relatedProjects = this.projectsService.getAll()
        .filter(p => p.id !== id)
        .slice(0, 3);
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initScrollAnimations();
      this.initCountUp();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    if (this.countObserver) this.countObserver.disconnect();
  }

  selectImage(img: string): void {
    if (img === this.selectedImage) return;
    this.imageChanging = true;
    setTimeout(() => {
      this.selectedImage = img;
      this.imageChanging = false;
    }, 250);
  }

  getTechArray(key: string): string[] {
    return (this.project.techStack as any)[key] || [];
  }

  private initScrollAnimations(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.aos').forEach(el => this.observer.observe(el));
  }

  private initCountUp(): void {
    this.countObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.counted) {
        this.counted = true;
        document.querySelectorAll('.count-stat').forEach(el => {
          const target = el.getAttribute('data-target') || '';
          const isNumeric = /^\d+$/.test(target);
          if (!isNumeric) return;
          let current = 0;
          const end = parseInt(target);
          const duration = 2000;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= end) { current = end; clearInterval(timer); }
            el.textContent = Math.floor(current).toString();
          }, 16);
        });
      }
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.results-section');
    if (statsSection) this.countObserver.observe(statsSection);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}