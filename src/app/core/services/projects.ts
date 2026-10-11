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
      id: 'cinesnacks',
      name: 'CineSnacks',
      category: 'SaaS Products',
      role: 'Commercial SaaS · Cinema ERP',
      type: 'SaaS Product',
      tags: ['Cinema ERP', 'SaaS', 'QR Ticketing', 'Concessions POS', 'Multi-tenant'],
      shortDescription: 'All-in-one Cinema Management ERP & Concession POS Platform.',
      tagline: 'End-to-End Cinema Management ERP & Multi-Tenant SaaS Platform',
      timeline: 'Live Product',
      team: 'CodeByte Engineering',
      status: 'Live',
      year: '2024-Present',
      client: 'Cinema Chains & Entertainment Venues',
      industry: 'Entertainment & Cinema',
      images: ['smartapp-360.png'],
      overview: `CineSnacks is an enterprise-grade cinema management platform engineered to unify and automate the complete operational spectrum of single and multi-screen cinema chains. From high-speed contactless box-office ticketing to food court concessions POS, scheduling, dynamic pricing, and multi-tenant chain governance, CineSnacks powers modern theater operations with zero downtime.`,
      challenge: `Traditional cinema theaters suffer from fragmented systems: separate ticketing terminals, disconnected concession counters, manual inventory reordering, paper-based ticket validation, and zero centralized oversight across multiple branch theaters.`,
      painPoints: [
        'Disconnected ticketing and concession POS causing long lobby queues',
        'Manual gate checking leading to ticket fraud and delays',
        'High concession waste and lack of real-time inventory deduction',
        'Inability for cinema chains to centrally manage pricing, packages, and schedules across multiple locations'
      ],
      solutions: [
        { icon: 'zap', title: 'High-Velocity Box Office & QR Checking', description: 'Real-time seat mapping, rapid ticket booking, and instant digital QR/barcode gate validation.' },
        { icon: 'coffee', title: 'Concession Stalls POS & Combo Bundles', description: 'Touchscreen POS for food stalls with automatic combo deductions, real-time inventory syncing, and kitchen display integration.' },
        { icon: 'film', title: 'Movies, Schedules & Screen Management', description: 'Dynamic movie showtime scheduling, auditorium capacity planning, and screen assignments.' },
        { icon: 'users', title: 'Staff Roles & Shift Auditing', description: 'Role-based access control (box office cashiers, floor staff, managers) with end-of-shift cash drawer reconciliations.' },
        { icon: 'tag', title: 'Dynamic Packages & Pricing Control', description: 'Customizable ticket + snack bundles, seasonal discounts, and automated peak-hour pricing rules.' },
        { icon: 'globe', title: 'Multi-Cinema Multi-Tenant SaaS Architecture', description: 'Centralized cloud dashboard managing multiple theater locations, shared master menus, and unified financial analytics.' }
      ],
      phases: [
        { name: 'Core Ticketing & Seating Engine', duration: 'Phase 1', tasks: ['Interactive auditorium seat maps', 'Fast checkout POS', 'Digital gate pass QR generation'] },
        { name: 'Food Stalls POS & Concessions Module', duration: 'Phase 2', tasks: ['Food stall touch POS', 'Combo item logic', 'Ingredient-level inventory tracking'] },
        { name: 'Multi-Tenant SaaS & Executive Suite', duration: 'Phase 3', tasks: ['Multi-cinema management', 'Franchise billing', 'Consolidated chain reports'] }
      ],
      results: [
        { value: '4x', label: 'Faster Box Office & Queue Processing' },
        { value: '100%', label: 'Real-time Concession Stock Visibility' },
        { value: 'Multi-Chain', label: 'Centralized Franchise Governance' }
      ],
      testimonial: {
        quote: 'CineSnacks transformed our theaters. Ticketing and popcorn queues dropped dramatically, and our multi-screen management is now 100% automated across all locations.',
        name: 'Operations Director',
        designation: 'General Manager',
        company: 'Cinema Multiplex Chain'
      },
      techStack: {
        frontend: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
        backend: ['ASP.NET Core', 'REST API', 'WebSockets'],
        database: ['SQL Server', 'Redis Cache'],
        devops: ['Docker', 'Azure Cloud', 'CI/CD']
      },
      liveUrl: 'https://CineSnacks.com',
      githubUrl: ''
    },

    {
      id: 'harvest-hub',
      name: 'Harvest Hub',
      category: 'Marketplace & POS',
      role: 'Agri-Tech Platform · Digital POS',
      type: 'Marketplace Solution',
      tags: ['Agri-Tech', 'B2B Marketplace', 'Farmer POS', 'Direct Trade', 'Supply Chain'],
      shortDescription: 'Direct Farmer-to-Distributor Agricultural Marketplace & Trading POS.',
      tagline: 'Decentralized Agricultural Trading Marketplace & Direct Settlement POS',
      timeline: 'Commercial Solution',
      team: 'CodeByte Engineering',
      status: 'Live',
      year: '2024-Present',
      client: 'Agricultural Producers & Wholesale Distributors',
      industry: 'AgriTech & Supply Chain',
      images: ['drone-leaf.jpg'],
      overview: `Harvest Hub is a transformative Agri-Tech marketplace and point-of-sale ecosystem engineered to eliminate predatory middlemen by connecting farmers directly with bulk wholesale distributors, retailers, and food processors. By pairing transparent digital auctions with instant weight-scale POS settlement and freight logistics, Harvest Hub unlocks fair value for growers and reliable supply for commercial buyers.`,
      challenge: `Traditional agricultural supply chains are bottlenecked by layers of commission agents, lack of price transparency, delayed payments to smallholder farmers, and massive post-harvest spoilage due to slow negotiation cycles.`,
      painPoints: [
        'Farmers losing up to 40% margin to exploitative intermediaries and middlemen',
        'Zero real-time price visibility across wholesale mandis and markets',
        'Manual cash settlements with high risk of non-payment or bad debts',
        'Inefficient crop logistics resulting in spoilage and delayed fulfillment'
      ],
      solutions: [
        { icon: 'shopping-bag', title: 'Digital Farmer Selling Platform', description: 'Simple crop listing wizard with geo-tagging, harvest date estimations, quality grading, and bulk lot auctions.' },
        { icon: 'truck', title: 'Direct Distributor B2B Network', description: 'Verified buyer catalog enabling wholesale distributors and food corporations to bid or purchase directly from farm gates.' },
        { icon: 'dollar-sign', title: 'Digital Weighbridge & Instant POS Settlement', description: 'Integrated weight-scale and grading POS calculating payouts instantly with escrow protection and digital payouts.' },
        { icon: 'trending-up', title: 'Transparent Fair-Market Price Discovery', description: 'Real-time market rate index tracking commodity pricing trends to prevent unfair underbidding.' },
        { icon: 'navigation', title: 'End-to-End Agri Trading & Logistics Dispatch', description: 'Automated digital dispatch notes, transport booking integration, and delivery milestone confirmation.' }
      ],
      phases: [
        { name: 'Marketplace Core & Farmer Onboarding', duration: 'Phase 1', tasks: ['Farmer digital identity', 'Crop category catalogues', 'Bidding mechanism'] },
        { name: 'Trade POS & Financial Escrow', duration: 'Phase 2', tasks: ['Scale POS integration', 'Direct bank payout integration', 'Invoice automation'] },
        { name: 'Logistics & Distributor Dashboard', duration: 'Phase 3', tasks: ['Bulk route optimization', 'Quality dispute mediation', 'Analytics hub'] }
      ],
      results: [
        { value: '+35%', label: 'Farmer Income Increase' },
        { value: '0', label: 'Middlemen Exploitation' },
        { value: 'Instant', label: 'Direct Harvest-to-Buyer Settlement' }
      ],
      testimonial: {
        quote: 'Harvest Hub eliminated middlemen fees and enabled us to sell directly to major retail chains with guaranteed instant payments on harvest day.',
        name: 'Producer Cooperative Lead',
        designation: 'Agricultural Federation',
        company: 'Harvest Hub Network'
      },
      techStack: {
        frontend: ['Angular', 'Progressive Web App (PWA)', 'Tailwind CSS'],
        backend: ['Node.js / ASP.NET Core', 'GraphQL / REST API'],
        database: ['PostgreSQL', 'Redis'],
        devops: ['AWS', 'Docker', 'SMS Gateway Integration']
      },
      liveUrl: '',
      githubUrl: ''
    },

    {
      id: 'smart-inventory',
      name: 'Smart Inventory Management System',
      category: 'Enterprise ERP',
      role: 'Enterprise Inventory ERP · AI-Powered POS',
      type: 'Enterprise ERP',
      tags: ['Inventory ERP', 'Smart POS', 'AI Forecasting', 'Barcode Engine', 'Multi-Warehouse'],
      shortDescription: 'Integrated Multi-Branch POS & Predictive AI Inventory Platform.',
      tagline: 'Next-Generation Multi-Branch Inventory ERP with Predictive AI & Intelligent POS',
      timeline: 'Enterprise Product',
      team: 'CodeByte Engineering',
      status: 'Live',
      year: '2024-Present',
      client: 'Retailers, Wholesalers & Commercial Enterprises',
      industry: 'Retail, Wholesale & Supply Chain',
      images: ['smartapp-360.png'],
      overview: `Smart Inventory Management System is an enterprise-grade business management and retail operating system designed for modern multi-store and warehouse enterprises. Integrating lightning-fast point-of-sale (POS), automated stock replenishments, cross-warehouse transfers, and predictive AI analytics, it empowers businesses to completely eliminate stockouts, minimize shrinkage, and streamline high-volume sales transactions.`,
      challenge: `High-volume retail and wholesale businesses struggle with mismatched inventory numbers across physical stores and online channels, slow checkout processes during peak hours, dead stock accumulating silently, and blind forecasting relying on guesswork.`,
      painPoints: [
        'Stockouts on high-demand items causing lost sales and frustrated customers',
        'Excess capital locked in dead or slow-moving stock with no early warnings',
        'Slow barcode scanning and disconnected billing registers during peak footfall',
        'Unidentified stock shrinkage, theft, and inventory discrepancies across warehouses'
      ],
      solutions: [
        { icon: 'shopping-cart', title: 'High-Speed Omni-Channel POS', description: 'Rapid barcode-scanning POS with split payments, offline-first transaction resilience, customer loyalty, and instant thermal receipt printing.' },
        { icon: 'archive', title: 'Automated Multi-Warehouse Stock Tracking', description: 'Live stock level synchronization across multiple branches, automated inter-warehouse transfer requests, and batch/expiry tracking.' },
        { icon: 'cpu', title: 'AI Predictive Demand Forecasting', description: 'Machine learning models analyzing historical sales velocity, seasonal trends, and upcoming promotions to predict exact inventory requirements weeks in advance.' },
        { icon: 'shield-alert', title: 'AI Shrinkage & Anomaly Detection', description: 'Algorithmic monitoring flags abnormal stock adjustments, sudden discrepancies, and cashier return irregularities in real-time.' },
        { icon: 'bar-chart', title: 'Executive Operations & Profit Intelligence', description: 'Real-time gross margin analytics, fast-moving vs dead-stock matrix, cash flow projections, and exportable tax reports.' }
      ],
      phases: [
        { name: 'Core POS & Unified Catalog', duration: 'Phase 1', tasks: ['Multi-currency POS register', 'Barcode catalog generation', 'Receipt engine'] },
        { name: 'Warehouse & Transfer Mechanics', duration: 'Phase 2', tasks: ['Multi-branch sync', 'PO & GRN workflow', 'Batch & expiry alerts'] },
        { name: 'AI Prediction Engine & BI Analytics', duration: 'Phase 3', tasks: ['Demand prediction model', 'Anomaly detection heuristics', 'Executive reporting suite'] }
      ],
      results: [
        { value: '99.8%', label: 'Inventory Record Accuracy' },
        { value: '-42%', label: 'Reduction in Overstock & Dead Capital' },
        { value: '< 2 sec', label: 'POS Checkout Processing Time' }
      ],
      testimonial: {
        quote: 'The AI demand forecasting alone saved us hundreds of thousands by ensuring we never run out of bestsellers while drastically reducing dead inventory across our 8 locations.',
        name: 'Chief Operating Officer',
        designation: 'Operations Director',
        company: 'Retail Enterprise Group'
      },
      techStack: {
        frontend: ['Angular 19', 'Tailwind CSS', 'Chart.js', 'RxJS'],
        backend: ['ASP.NET Core', 'Python AI Microservice', 'Entity Framework Core'],
        database: ['PostgreSQL', 'Redis In-Memory'],
        devops: ['Docker', 'Nginx', 'Automated Daily Backups']
      },
      liveUrl: '',
      githubUrl: ''
    },

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

    images: ['smartapp-360.png'],

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

    images: ['clery-edge.png'],

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

    images: ['discover-sair.png'],

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

    images: ['propiu-web-1.jpg'],

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

    images: ['drone-leaf.jpg'],

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

    images: ['nic-mocup.png'],

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

    images: ['hand-hero-mocup.png'],

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