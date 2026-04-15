import { Component, inject, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationService } from '../../core/services/animation';
import { ProjectsService, Project } from '../../core/services/projects';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  date: string;
  category: string;
  image: string;
  isHovered?: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {

  private animationService = inject(AnimationService);
  private projectsService = inject(ProjectsService);

  categories = ['All', 'Web Application', 'AI Solution'];

  activeCategory = signal('All');

  // ✅ Transform service data → UI model
  private mapToPortfolio(project: Project): PortfolioProject {
    return {
      id: project.id,
      title: project.name,
      description: project.tagline,
      tags: [
        ...project.techStack.frontend,
        ...project.techStack.backend
      ].slice(0, 5), // limit tags for UI
      role: 'Angular Developer', // 💡 static or derive if needed
      date: project.year,
      category: project.category,
      image: project.images?.[0] || '',
      isHovered: false
    };
  }

  // ✅ mapped projects
  allProjects: PortfolioProject[] = this.projectsService
    .getAll()
    .map(p => this.mapToPortfolio(p));

  filteredProjects = computed(() => {
    const active = this.activeCategory();

    if (active === 'All') return this.allProjects;

    return this.allProjects.filter(p =>
      p.category.toLowerCase().includes(active.toLowerCase())
    );
  });

  ngAfterViewInit() {
    this.animationService.observeElements('.animate-on-scroll');
  }

  setCategory(category: string) {
    this.activeCategory.set(category);
    setTimeout(() => {
      this.animationService.observeElements('.animate-on-scroll');
    }, 50);
  }

  toggleHover(project: PortfolioProject, state: boolean) {
    project.isHovered = state;
  }
}