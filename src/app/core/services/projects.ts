import { Injectable } from '@angular/core';

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
}

export interface Phase {
  name: string;
  duration: string;
  tasks: string[];
}

export interface Solution {
  icon: string;
  title: string;
  description: string;
}

export interface Result {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  timeline: string;
  team: string;
  status: string;
  year: string;
   role?: string;
  type?: string;
  tags?: string[];
  shortDescription?: string;
  client: string;
  industry: string;
  images: string[];
  overview: string;
  challenge: string;
  painPoints: string[];
  solutions: Solution[];
  phases: Phase[];
  results: Result[];
  testimonial: { quote: string; name: string; designation: string; company: string };
  techStack: TechStack;
  liveUrl: string;
  githubUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {

 private projects: Project[] = [
  {
    id: 'smart-app-360',
    name: 'Smart App 360',
    category: 'Web Development',
    role: 'Angular Developer',
    type: 'Web',
    tags: ['Angular', 'Tailwind CSS', 'Material UI', 'jQuery', 'Bootstrap'],
    shortDescription: 'Business management solution',

    tagline: 'POS, Inventory & Accounts Management System',
    timeline: '2023',
    team: '',
    status: 'Completed',
    year: '2023',
    client: 'Confidential',
    industry: 'Retail',

    images: ['/smartapp-360.png'],

    overview: `A web-based business management solution with integrated POS, Inventory, and Accounts management modules. Designed for efficient retail operations.`,
    challenge: `Manual workflows and inefficient retail management.`,
    painPoints: [
      'Manual purchase tracking',
      'Slow billing',
      'Inventory mismanagement'
    ],
    solutions: [
      { icon: 'zap', title: 'Automation', description: 'Automated billing and inventory workflows' }
    ],
    phases: [],
    results: [
      { value: '50%', label: 'Faster Operations' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Angular', 'Tailwind CSS', 'Material UI'],
      backend: ['Dot Net', 'JavaScript'],
      database: ['SQL'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'clery-edge',
    name: 'Clery Edge',
    category: 'Web Development',
    role: 'Angular Developer',
    type: 'Web',
    tags: ['Angular', 'ASP.NET Core', 'DevExpress', 'Web API'],
    shortDescription: 'Legacy system modernization',

    tagline: 'Migration from ASPX to Angular + .NET Core',
    timeline: '2024',
    team: 'Confidential',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'Enterprise',

    images: ['/clery-edge.png'],

    overview: `Revamped legacy ASPX platform into Angular + ASP.NET Core system.`,
    challenge: `Outdated system with poor performance.`,
    painPoints: [
      'Legacy UI',
      'Low scalability',
      'Performance issues'
    ],
    solutions: [
      { icon: 'refresh', title: 'Migration', description: 'Complete system modernization' }
    ],
    phases: [],
    results: [
      { value: '2x', label: 'Performance Boost' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Angular', 'DevExpress'],
      backend: ['ASP.NET Core'],
      database: ['SQL'],
      devops: ['Azure Devops']
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'discover-sair',
    name: 'Discover Sair',
    category: 'Web, Mobile & Admin Panel',
    role: 'Angular / Ionic Developer',
    type: 'Web & Mobile',
    tags: ['Angular', 'Ionic', 'MongoDB', 'Express.js', 'Node.js'],
    shortDescription: 'Travel booking platform',

    tagline: 'Multi-role travel booking system',
    timeline: '2024',
    team: 'N/A',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'Travel',

    images: ['/discover-sair.png'],

    overview: `A full-stack travel booking system with admin, manager, and traveler roles.`,
    challenge: `Complex booking workflows and role management.`,
    painPoints: [
      'Complex approvals',
      'Multi-role access',
      'Booking management'
    ],
    solutions: [
      { icon: 'map', title: 'Booking System', description: 'Streamlined booking and approvals' }
    ],
    phases: [],
    results: [
      { value: '60%', label: 'Efficiency Increase' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Angular', 'Ionic'],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'prop-ui',
    name: 'Prop UI',
    category: 'Migration & Enhancement',
    role: 'Angular Developer',
    type: 'Web',
    tags: ['Angular 19', 'Migration'],
    shortDescription: 'Angular upgrade project',

    tagline: 'Migration to Angular 19',
    timeline: '2024',
    team: 'N/A',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'Fitness',

    images: ['/propiu-web-1.jpg'],

    overview: `Upgraded gym management system to Angular 19.`,
    challenge: `Legacy Angular version limitations.`,
    painPoints: [
      'Old Angular version',
      'Performance issues'
    ],
    solutions: [
      { icon: 'arrow-up', title: 'Upgrade', description: 'Migrated to Angular 19' }
    ],
    phases: [],
    results: [
      { value: '30%', label: 'Performance Gain' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Angular 19'],
      backend: ['Dot net'],
      database: ['SQL'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'droneleaf',
    name: 'DroneLeaf',
    category: 'Web Development',
    role: 'Angular Developer',
    type: 'Web',
    tags: ['Angular', 'GraphQL', 'REST API'],
    shortDescription: 'Drone management platform',

    tagline: 'Dual-user drone service platform',
    timeline: '2024',
    team: 'N/A',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'Technology',

    images: ['/drone-leaf.jpg'],

    overview: `Drone services platform with real-time dashboards.`,
    challenge: `Handling real-time updates.`,
    painPoints: [
      'Real-time sync',
      'User role management'
    ],
    solutions: [
      { icon: 'activity', title: 'Live Data', description: 'GraphQL integration for real-time updates' }
    ],
    phases: [],
    results: [
      { value: '99%', label: 'Realtime Accuracy' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Angular'],
      backend: ['GraphQL', 'REST API'],
      database: ['SQL'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'nic-skin-care',
    name: 'NIC Skin-Care',
    category: 'Mobile App Development',
    role: 'Ionic-Angular Developer',
    type: 'Mobile',
    tags: ['Ionic', 'Angular', 'OpenAI', 'Firebase'],
    shortDescription: 'AI skincare app',

    tagline: 'AI-powered skincare recommendations',
    timeline: '2024',
    team: 'N/A',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'HealthTech',

    images: ['/nic-mocup.png'],

    overview: `AI app for skincare analysis using facial scans.`,
    challenge: `Accurate AI recommendations.`,
    painPoints: [
      'Image processing',
      'AI integration'
    ],
    solutions: [
      { icon: 'cpu', title: 'AI Engine', description: 'OpenAI-powered recommendations' }
    ],
    phases: [],
    results: [
      { value: '85%', label: 'Accuracy' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Ionic', 'Angular'],
      backend: ['Firebase'],
      database: ['Firestore'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  },

  {
    id: 'hand-hero-3d',
    name: 'Hand Hero 3D',
    category: 'Mobile App Development',
    role: 'Ionic-Angular Developer',
    type: 'Mobile',
    tags: ['Ionic', 'Angular', '3D'],
    shortDescription: '3D interactive app',

    tagline: 'Immersive 3D mobile experience',
    timeline: '2024',
    team: 'N/A',
    status: 'Completed',
    year: '2024',
    client: 'Confidential',
    industry: 'Eductions',

    images: ['/hand-hero-mocup.png'],

    overview: `3D gesture-based interactive mobile application.`,
    challenge: `Rendering performance.`,
    painPoints: [
      '3D rendering',
      'Mobile performance'
    ],
    solutions: [
      { icon: 'box', title: '3D Engine', description: 'Optimized rendering pipeline' }
    ],
    phases: [],
    results: [
      { value: 'Smooth', label: 'Performance' }
    ],
    testimonial: { quote: '', name: '', designation: '', company: '' },

    techStack: {
      frontend: ['Ionic', 'Angular'],
      backend: ['Firebase'],
      database: ['Firestore'],
      devops: []
    },

    liveUrl: '',
    githubUrl: ''
  }
];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}